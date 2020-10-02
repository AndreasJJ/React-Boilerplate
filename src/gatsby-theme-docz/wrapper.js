import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/theme';

// eslint-disable-next-line react/display-name
export default ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
