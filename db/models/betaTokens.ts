import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const BetaTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    redeemed: {
      type: Boolean,
      default: 'false',
    },
  },
  { timestamps: true },
);

// Duplicate the ID field.
BetaTokenSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

BetaTokenSchema.set('toJSON', {
  virtuals: true,
});
BetaTokenSchema.set('toObject', {
  virtuals: true,
});

export default mongoose.models.BetaToken ||
  mongoose.model('BetaToken', BetaTokenSchema);
