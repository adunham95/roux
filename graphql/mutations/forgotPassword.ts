import User from '@/db/models/user';
import { generateID } from '@/utils/generateID';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function forgotPassword(_: unknown, { email }: { email: string }) {
  try {
    const currentUser = await User.findOne({ email: email.trim() });
    if (!currentUser) {
      return { success: true, resetLink: '' };
    }
    const resetCode = generateID(12);
    currentUser.resetCode = resetCode;
    currentUser.status = 'RESET_REQUIRED';
    await currentUser.save();
    console.log(currentUser);
    return { success: true, resetLink: `/reset?code=${resetCode}` };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default forgotPassword;
