export interface FeatAConfigOptions {
  featAOption1?: string;
}

declare module "../config-options" {
  interface ConfigOptions {
    featA: FeatAConfigOptions;
  }
}
