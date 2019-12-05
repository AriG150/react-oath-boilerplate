/// <reference types="react-scripts" />

export interface IUser {
  _id: string;
  githubId: number;
  accessToken?: string;
}

export interface IRepoOwner {
  login: string;
  avatar_url: string;
}

export interface IRepo {
  name: string;
  owner: IRepoOwner;
  description: string;
  is_template: boolean;
}

export interface RepoDetailProps {
  repo: IRepo;
}