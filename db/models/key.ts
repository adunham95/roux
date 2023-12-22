import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const KeySchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    hashed_password: String,
  },
  { _id: false, timestamps: true },
);

// Duplicate the ID field.
KeySchema.virtual('id').get(function () {
  return this._id.toString();
});

// Ensure virtual fields are serialised.
KeySchema.set('toJSON', {
  virtuals: true,
});
KeySchema.set('toObject', {
  virtuals: true,
});

export default mongoose.models.Key || mongoose.model('Key', KeySchema);
