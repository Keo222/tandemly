import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      textLight: string;
      textDark: string;
      highlight1: string;
      highlight1dark: string;

      successGreen: string;
      warningYellow: string;
      failureRed: string;
      brightBlue: string;
      darkGrey: string;
    };
  }
}
