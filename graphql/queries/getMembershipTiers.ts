import MembershipTier from '@/db/models/membershipTier';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getMembershipTiers(
  _: unknown,
  { onlyVisible }: { onlyVisible: boolean },
) {
  try {
    if (onlyVisible) {
      return MembershipTier.find({ visible: true });
    } else {
      const data = MembershipTier.find({}, null, { sort: { monthlyCost: 1 } });
      return data;
    }
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default getMembershipTiers;
