import React from 'react';
import { RouterComponent } from './router/router';
import { GlobalStyle } from './global-styles';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Helmet } from 'react-helmet';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <SWRConfig
                value={{
                    refreshInterval: 0,
                    revalidateOnFocus: true,
                    revalidateOnReconnect: true,
                }}
            >
                <Helmet titleTemplate="React Boilerplate | %s">
                    <html lang="no" />
                    <meta name="description" content="A Boilerplate" />
                </Helmet>
                <RouterComponent />
                <GlobalStyle />
            </SWRConfig>
        </ThemeProvider>
    );
};

export default App;
