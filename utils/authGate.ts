interface Session {}

export function SessionGate(session: Session, permission: string) {
  console.log(permission);
  if (!session) {
    throw new Error('Auth Required');
  }
  if (
    true
    // session.user.teamRoles.length > 0 &&
    // session.user.teamRoles[0]?.access?.permissions.includes(permission)
  ) {
    return {
      // userID: session.user.id,
      // teamID: session.user.teamRoles[0].teamID,
    };
  }
  throw new Error('User does not have permission');
}

export function hasPermission(session: Session | null, permission: string) {
  console.log(permission);
  if (!session) {
    return false;
  }
  // if (session.user.teamRoles.length > 0) {
  // return session.user.teamRoles[0]?.access?.permissions.includes(permission);
  // }
  return false;
}
