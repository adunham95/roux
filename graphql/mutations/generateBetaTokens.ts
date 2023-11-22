import betaTokens from '@/db/models/betaTokens';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function generateBetaTokens(_: unknown, { count }: { count: number }) {
  const array = [];
  for (let index = 0; index < count; index++) {
    const randomString = Math.random().toString(36).substring(2, 10);
    const first = randomString.slice(0, 4);
    const second = randomString.slice(4, 8);
    const token = `${first}-${second}`;
    array.push({ token });
  }

  const data = await betaTokens.create(array);
  console.log(data);
  return data;
}

export default generateBetaTokens;
