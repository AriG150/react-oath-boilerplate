export interface IUser {
  _id: string;
  githubId: number;
  accessToken?: string;
}

export interface IRepo {
  name: string;
}

export type passportCallback = (err: string, user: IUser) => any

export {}
