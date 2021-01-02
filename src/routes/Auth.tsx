import React, {lazy} from "react";
const AuthForm = lazy(() => import('../components/AuthForm'));

const Auth: React.FC = () => (
    <>
        <h1>Login!</h1>
        <AuthForm />
    </>
);

export default Auth;