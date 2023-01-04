// # 3rd Party Library
// If the library doesn't have typings available at `@types/`,
// you can still use it by manually adding typings for it
export type Environment = {
  production: boolean;
  useHash?: boolean;
  api: {
    baseUrl: string;
    refreshTokenEnabled: boolean;
    refreshTokenType: 're-request' | 'auth-refresh';
    signInpath?: string;
  };
};
