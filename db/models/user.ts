import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema(
  {
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
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'ACTIVE',
      enum: ['ACTIVE', 'DISABLED', 'RESET_REQUIRED'],
    },
  },
  { timestamps: true },
);

// Duplicate the ID field.
UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
  virtuals: true,
});
UserSchema.set('toObject', {
  virtuals: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
