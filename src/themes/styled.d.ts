import '@emotion/react';
import { ITheme } from './lightTheme';

declare module '@emotion/react' {
  // Use ITheme as Theme directly
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends ITheme {}
}