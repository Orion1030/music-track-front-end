/* eslint-disable @typescript-eslint/no-empty-interface */

export interface Track {
  isrc: string;
  name: string;
  artistName: string;
  albumName: string;
  isExplicit: boolean;
  playbackSeconds: number;
}

export interface CoverImage {
  isrc: string;
  url: string;
}

export type NavigationProps = {
  links: NavLinkProps[]
}

export type NavLinkProps = {
  to: string
  label: string
}
export type ResponseType = {
  status: ResponseStatus
  data: any
}

export enum ResponseStatus {
  SUCCESS = "SUCCESS",
  ALREADY = "ALREADY",
  NOT_FOUND = "NOT_FOUND",
  FAILED = "FAILED"
}
export type Credentials = {
  name: string,
  pwd: string
}