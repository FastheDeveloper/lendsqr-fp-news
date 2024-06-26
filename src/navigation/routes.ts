export enum CoreRoutes {
  SIGNUP = 'SIGNUP',
  ONBOARD = 'ONBOARD',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  DETAILED = 'DETAILED',
  GOOGLE = 'GOOGLE',
  NO_SERVICE = 'NO_SERVICE',
}

export enum MainRoutes {
  DASHBOARD = 'DASHBOARD',
  BOOKMARKS = 'BOOKMARKS',
  PROFILENAVIGATOR = 'PROFILENAVIGATOR',
}

export enum ProfileRoutes {
  PROFILE = 'PROFILE',
}

export type AllRoutes = CoreRoutes | MainRoutes | ProfileRoutes;
