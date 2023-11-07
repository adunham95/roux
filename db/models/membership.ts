import mongoose, { Schema } from 'mongoose';
import membershipTier from './membershipTier';

const MembershipSchema = new Schema({
  tierID: { type: Schema.Types.ObjectId, required: true },
  cost: Number,
  billingType: {
    type: String,
    default: 'MONTHLY',
    enum: ['MONTHLY', 'YEARLY'],
  },
  maxTeamSize: {
    type: Number,
  },
  maxRecipeCount: {
    type: Number,
  },
  customPermissions: { type: [Schema.Types.ObjectId] },
});

MembershipSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

MembershipSchema.virtual('defaultPermission', {
  ref: membershipTier,
  localField: 'tierID', // Of post collection
  foreignField: '_id', // Of user collection
  justOne: true,
});

MembershipSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.models.Membership ||
  mongoose.model('Membership', MembershipSchema);
