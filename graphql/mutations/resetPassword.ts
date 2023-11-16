import User from '@/db/models/user';
import Auth from '@/services/auth.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function resetPassword(
  _: unknown,
  { resetCode, newPassword }: { resetCode: string; newPassword: string },
) {
  try {
    const currentUser = await User.findOne({ resetCode });
    if (!currentUser) {
      throw Error('Reset Code not Found');
    }
    const password = await Auth.hashPassword(newPassword);
    currentUser.password = password;
    currentUser.status = 'ACTIVE';
    await currentUser.save();
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default resetPassword;
