export interface FeatBConfigOptions {
  featBOption1?: string;
}

declare module "../config-options" {
  interface ConfigOptions {
    featB: FeatBConfigOptions;
  }
}
