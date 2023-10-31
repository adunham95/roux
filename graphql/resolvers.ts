interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
}

const resolvers = {
  Query: {
    users: async () => {
      try {
        const response = await fetch(process.env.URL_API || '');
        const data = await response.json();

        return data.users.map((u: IUser) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error('Something went wrong');
      }
    },
    searchUser: async (parent: unknown, { value }: { value: string }) => {
      try {
        const response = await fetch(
          `${process.env.URL_API}/search?q=${value}`,
        );
        const data = await response.json();

        return data.users.map((u: IUser) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error('Something went wrong');
      }
    },
  },
};

export default resolvers;
