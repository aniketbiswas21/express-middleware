/**
 * interface to define config of middleware
 */
export interface Config {
  name: string;

  url: string;

  /** application configs */
  clientId: string;
  clientSecret: string;
  redirectUri: string;

  /** option method to set custom endpoints if using modified server */
  endpoint?: {
    auth: string;
    profile: string;
  };
}