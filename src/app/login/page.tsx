"use client"
import { signIn } from 'next-auth/react';
import Menu from '../components/menu';

const Login: React.FC = () => {
    return <>
        <Menu />
    <button onClick={() => signIn()}>Sign in</button>
    </>;
};

export default Login;