import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

/*
 * Splash component for greetings useer
 */
export const Splash: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Splash</title>
            </Helmet>
            <Wrapper>
                Hello world
            </Wrapper>
        </>
    );
};
