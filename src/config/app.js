import env from "../utils/env";

const appConfig = Object.freeze({
  APP_ENV: env('APP_ENV', 'LOCAL'),
  APP_NAME: env('APP_NAME', 'My Site'),
  APP_URL: env(`APP_URL_${env('APP_ENV')}`, 'http://localhost'),
});

export const app = (key, defaultValue = null) => appConfig[key] ?? defaultValue;
export default appConfig;