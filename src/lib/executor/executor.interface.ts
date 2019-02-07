export interface ExecuteSyncOptions {
  cwd?: string;
  input?: string | Buffer | ArrayBuffer | DataView;
  stdio?: string | Array<string>;
  env?: object;
  encoding?: string;
  shell?: string;
  timeout?: number;
  maxBuffer?: number;
  killSignal?: number | string;
  uid?: number;
  gid?: number;
  windowsHide?: boolean;
}
