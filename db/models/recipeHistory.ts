import { Schema, model, models } from 'mongoose';
import user from './user';

const RecipeHistorySchema = new Schema(
  {
    recipeID: Schema.Types.ObjectId,
    userID: Schema.Types.ObjectId,
    teamID: Schema.Types.ObjectId,
    add: [String],
    delete: [String],
    update: [{ key: String, value: Schema.Types.Mixed }],
  },
  { timestamps: true },
);

RecipeHistorySchema.virtual('id').get(function () {
  return this._id.toHexString();
});
RecipeHistorySchema.virtual('user', {
  ref: user,
  localField: 'userID',
  foreignField: '_id',
  justOne: true,
});
RecipeHistorySchema.set('toJSON', {
  virtuals: true,
});

export default models.RecipeHistory ||
  model('RecipeHistory', RecipeHistorySchema);
