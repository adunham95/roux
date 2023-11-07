import mongoose, { Schema } from 'mongoose';

const TeamMemberSchema = new Schema({
  role: { type: String, required: true },
  teamID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

TeamMemberSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

TeamMemberSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.models.TeamMember ||
  mongoose.model('TeamMember', TeamMemberSchema);
