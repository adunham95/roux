import Product from '@/db/models/products';
import createUser from './mutations/createUser';

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
    createUser: createUser,
  },
};

export default resolvers;
