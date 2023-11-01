import bcrypt from 'bcrypt';

class Auth {
  constructor() {}

  static async hashPassword(pwd: string) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(pwd, salt);
  }

  static validPassword(pwd: string) {
    //TODO Create Password validation
    if (pwd) {
      return true;
    }
    return true;
  }

  static async matchPasswords(requestPwd: string, userPwd: string) {
    return bcrypt.compare(requestPwd, userPwd);
  }
}

export default Auth;
