import { Schema, model, models } from 'mongoose';

const RecipeHistorySchema = new Schema({
  recipeID: Schema.Types.ObjectId,
  userID: Schema.Types.ObjectId,
  teamID: Schema.Types.ObjectId,
  add: [String],
  delete: [String],
  update: [{ key: String, value: Schema.Types.Mixed }],
});

RecipeHistorySchema.virtual('id').get(function () {
  return this._id.toHexString();
});
RecipeHistorySchema.set('toJSON', {
  virtuals: true,
});

export default models.RecipeHistory ||
  model('RecipeHistory', RecipeHistorySchema);
