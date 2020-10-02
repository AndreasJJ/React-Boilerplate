import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
    }

    #root {
        width: inherit;
        height: inherit;
    }
`;

export { GlobalStyle };
