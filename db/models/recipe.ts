import { Schema, models, model } from 'mongoose';
import teams from './teams';
import user from './user';
import recipeHistory from './recipeHistory';

const IngredientsSchema = new Schema({
  instructionRefId: String,
  refId: String,
  name: String,
  count: Number,
  type: String,
});

const InstructionsSchema = new Schema({
  refId: String,
  description: String,
  order: Number,
});

const RecipeSchema = new Schema({
  userID: String,
  teamID: Schema.Types.ObjectId,
  name: String,
  description: String,
  servings: { type: Number, default: 1 },
  instructions: [InstructionsSchema],
  ingredients: [IngredientsSchema],
});

// Duplicate the ID field.
RecipeSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
RecipeSchema.virtual('team', {
  ref: teams,
  localField: 'teamID',
  foreignField: '_id',
  justOne: true,
});
RecipeSchema.virtual('user', {
  ref: user,
  localField: 'userID',
  foreignField: '_id',
  justOne: true,
});
RecipeSchema.virtual('history', {
  ref: recipeHistory,
  localField: '_id',
  foreignField: 'recipeID',
});
RecipeSchema.set('toJSON', {
  virtuals: true,
});
export default models.Recipe || model('Recipe', RecipeSchema);
