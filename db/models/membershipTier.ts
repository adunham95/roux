import mongoose, { Schema } from 'mongoose';

const MembershipFeaturesSchema = new Schema({
  title: String,
  description: String,
});

const MembershipTierSchema = new Schema({
  tierName: String,
  tierDescription: String,
  features: [MembershipFeaturesSchema],
  maxTeamSize: {
    type: Number,
  },
  maxRecipeCount: {
    type: Number,
  },
  yearlyCost: {
    type: Number,
  },
  monthlyCost: {
    type: Number,
  },
  default: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  defaultPermission: Schema.Types.ObjectId,
});

MembershipTierSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

MembershipTierSchema.set('toJSON', {
  virtuals: true,
  // transform: function (doc, ret) {
  //   ret.id = ret._id;
  //   delete ret._id;
  //   delete ret.__v;
  //   ret.permissions = ret.permissions.map((p: { _id: string }) => {
  //     return {
  //       id: p._id,
  //       ...p,
  //     };
  //   });
  //   ret.features = ret.features.map((f: { _id: string }) => {
  //     return {
  //       id: f._id,
  //       ...f,
  //     };
  //   });
  // },
});
MembershipTierSchema.set('toObject', {
  virtuals: true,
});

export default mongoose.models.MembershipTier ||
  mongoose.model('MembershipTier', MembershipTierSchema);
