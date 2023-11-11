import { Schema, models, model } from 'mongoose';

const IngredientsSchema = new Schema({
  name: String,
  count: Number,
  type: String,
});

const InstructionsSchema = new Schema({
  description: String,
  order: Number,
  ingredients: [IngredientsSchema],
});

const RecipeSchema = new Schema({
  userID: Schema.Types.ObjectId,
  teamID: Schema.Types.ObjectId,
  name: String,
  description: String,
  instructions: [InstructionsSchema],
});

// Duplicate the ID field.
RecipeSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
IngredientsSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
InstructionsSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

RecipeSchema.set('toJSON', {
  virtuals: true,
});
IngredientsSchema.set('toJSON', {
  virtuals: true,
});
InstructionsSchema.set('toJSON', {
  virtuals: true,
});

export default models.Recipe || model('Recipe', RecipeSchema);
