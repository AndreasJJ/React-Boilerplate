import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Helmet } from 'react-helmet';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const Logo = styled(ReactLogo)`
    margin-bottom: 20px;
    animation-name: ${spin};
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

const Errors = styled.div<{ visible: boolean }>`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    border: 1px solid ${(props) => props.theme.colors.NeonRed};
    margin-bottom: 5px;
    padding: 10px;
`;

const Name = styled.span`
    text-decoration: underline;
`;

const Button = styled.button`
    margin-left: 10px;
`;

/*
 * Splash component for greetings useer
 */
export const Splash: React.FC = () => {
    const validationSchema = React.useMemo(
        () =>
            yup.object({
                username: yup.string().min(2).max(50).required('Username is required'),
            }),
        [],
    );

    const { handleSubmit, register, errors } = useForm({ resolver: yupResolver(validationSchema) });

    const [name, setName] = React.useState('');

    const onSubmit = handleSubmit((data) => {
        setName(data.username);
    });

    return (
        <>
            <Helmet>
                <title>Splash</title>
            </Helmet>
            <Wrapper>
                <Logo size="4em" />
                <h1>
                    Hello <Name>{name ? name.slice(0, 1).toUpperCase() + name.slice(1) : 'World'}</Name>
                </h1>
                <Errors visible={Object.keys(errors).length !== 0 && errors.constructor === Object}>
                    {errors.username && errors.username.message}
                </Errors>
                <form onSubmit={onSubmit}>
                    <input name="username" ref={register} />
                    <Button type="submit">Submit</Button>
                </form>
            </Wrapper>
        </>
    );
};
