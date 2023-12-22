import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const SessionSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    active_expires: {
      type: Number,
      required: true,
    },
    idle_expires: {
      type: Number,
      required: true,
    },
  },
  { _id: false, timestamps: true },
);

// Duplicate the ID field.
SessionSchema.virtual('id').get(function () {
  return this._id.toString();
});

// Ensure virtual fields are serialised.
SessionSchema.set('toJSON', {
  virtuals: true,
});
SessionSchema.set('toObject', {
  virtuals: true,
});

export default mongoose.models.Session ??
  mongoose.model('Session', SessionSchema);
