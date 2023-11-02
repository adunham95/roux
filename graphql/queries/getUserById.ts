import User from '@/db/models/user';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getUserById(_: unknown, { id }: { id: string }) {
  const updatedUser = await User.findById(id);

  return updatedUser.toJSON();
}

export default getUserById;
