import mongoose, { Schema } from 'mongoose';

const TeamsSchema = new Schema(
  {
    name: { type: String, required: true },
    membershipID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);

TeamsSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

TeamsSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.models.Teams || mongoose.model('Teams', TeamsSchema);
