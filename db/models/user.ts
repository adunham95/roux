import mongoose from 'mongoose';
import teamMember from './teamMember';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    status: {
      type: String,
      default: 'ACTIVE',
      enum: ['ACTIVE', 'DISABLED', 'RESET_REQUIRED'],
    },
  },
  { _id: false, timestamps: true },
);

// Duplicate the ID field.
UserSchema.virtual('userId').get(function () {
  return this._id.toString();
});

UserSchema.virtual('teamRoles', {
  ref: teamMember,
  localField: '_id',
  foreignField: 'userID',
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
  virtuals: true,
});
UserSchema.set('toObject', {
  virtuals: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
