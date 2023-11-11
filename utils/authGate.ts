import { Session } from 'next-auth';

export function SessionGate(session: Session, permission: string) {
  if (!session) {
    throw new Error('Auth Required');
  }
  if (
    session.user.teamRoles.length > 0 &&
    session.user.teamRoles[0]?.access?.permissions.includes(permission)
  ) {
    return {
      userID: session.user.id,
      teamID: session.user.teamRoles[0].teamID,
    };
  }
  throw new Error('User does not have permission');
}
