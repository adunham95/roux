import mongoose, { Schema } from 'mongoose';
import membershipPermissions from './membershipPermissions';
import teams from './teams';

const TeamMemberSchema = new Schema({
  roleID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  teamID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

TeamMemberSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

TeamMemberSchema.virtual('access', {
  ref: membershipPermissions,
  localField: 'roleID',
  foreignField: '_id',
  justOne: true,
});

TeamMemberSchema.virtual('team', {
  ref: teams,
  localField: 'teamID',
  foreignField: '_id',
  justOne: true,
});

TeamMemberSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.models.teamMember ||
  mongoose.model('teamMember', TeamMemberSchema);
