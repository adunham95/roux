import betaTokens from '@/db/models/betaTokens';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getAllBetaTokens() {
  const tokens = betaTokens.find();

  return tokens;
}

export default getAllBetaTokens;
