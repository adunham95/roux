// app.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('./auth/lucia').Auth;
  type DatabaseUserAttributes = {
    email: string;
    firstName: string;
    lastName: string;
    status?: string;
  };
  //   type DatabaseSessionAttributes = {};
}
