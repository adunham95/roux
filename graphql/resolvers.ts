import Product from '@/db/models/products';
import createUser from './mutations/createUser';
import updateUser from './mutations/updateUser';
import getUserById from './queries/getUserById';
import generateBetaTokens from './mutations/generateBetaTokens';
import getAllBetaTokens from './queries/getBetaTokens';
import createMembershipTier from './mutations/createMembershipTier';
import getMembershipTiers from './queries/getMembershipTiers';
import createRecipe from './mutations/createRecipe';
import getRecipe from './queries/getRecipe';
import forgotPassword from './mutations/forgotPassword';
import resetPassword from './mutations/resetPassword';
import getMyRecipes from './queries/getMyRecipes';
import updateRecipe from './mutations/updateRecipe';

interface IProductInput {}

const resolvers = {
  Query: {
    // products
    getProducts: async () => {
      try {
        const products = await Product.find({});

        return products;
      } catch (err) {
        console.log(err);
      }
    },
    getProduct: async (_: unknown, { id }: { id: string }) => {
      const product = await Product.findById(id);

      if (!product) {
        throw new Error('Product not found');
      }

      return product;
    },
    getUserById,
    getAllBetaTokens,
    getMembershipTiers,
    getRecipe,
    getMyRecipes,
  },

  Mutation: {
    // products
    newProduct: async (_: unknown, { input }: { input: IProductInput }) => {
      try {
        const product = new Product(input);

        const result = await product.save();

        return result;
      } catch (err) {
        console.log(err);
      }
    },
    updateProduct: async (
      _: unknown,
      { id, input }: { id: string; input: IProductInput },
    ) => {
      let product = await Product.findById(id);

      if (!product) {
        throw new Error('Product not found');
      }

      product = await Product.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });

      return product;
    },
    deleteProduct: async (_: unknown, { id }: { id: string }) => {
      const product = await Product.findById(id);

      if (!product) {
        throw new Error('Producto no encontrado');
      }

      await Product.findOneAndDelete({ _id: id });

      return 'Producto eliminado';
    },
    createUser,
    updateUser,
    generateBetaTokens,
    createMembershipTier,
    createRecipe,
    forgotPassword,
    resetPassword,
    updateRecipe,
  },
};

export default resolvers;
