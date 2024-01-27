import Teams from '@/db/models/teams';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getTeam(_: unknown, { teamID }: { teamID: string }) {
  try {
    const team = await Teams.findById(teamID);
    console.log(team);
    return team;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getTeam;
