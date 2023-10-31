import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  productionCapacity: {
    type: Number,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createAt: {
    type: Date,
    defalut: Date.now(),
  },
});

UserSchema.index({ name: 'text' });

export default mongoose.models.Product || mongoose.model('User', UserSchema);
