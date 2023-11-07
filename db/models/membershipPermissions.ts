import mongoose, { Schema } from 'mongoose';

export const MembershipPermissionsSchema = new Schema({
  name: String,
  permissions: [String],
  locked: {
    type: Boolean,
    default: false,
  },
});

MembershipPermissionsSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

MembershipPermissionsSchema.set('toJSON', {
  virtuals: true,
});
MembershipPermissionsSchema.set('toObject', {
  virtuals: true,
});

export default mongoose.models.MembershipPermission ||
  mongoose.model('MembershipPermission', MembershipPermissionsSchema);
