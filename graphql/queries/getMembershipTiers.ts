import MembershipTier from '@/db/models/membershipTier';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getMembershipTiers(
  _: unknown,
  { onlyVisible }: { onlyVisible: boolean },
) {
  console.log('getMembershipTiers');
  try {
    if (onlyVisible) {
      return MembershipTier.find({ visible: true });
    } else {
      const data = MembershipTier.find({});
      console.log('data', data);
      return data;
    }
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default getMembershipTiers;
