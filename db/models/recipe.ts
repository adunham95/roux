import { Schema, models, model } from 'mongoose';
import teams from './teams';
import user from './user';

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
  servings: { type: Number, default: 1 },
  instructions: [InstructionsSchema],
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
