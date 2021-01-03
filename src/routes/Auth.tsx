import React, {lazy} from "react";
import { authService, firebaseInstance } from '../FirebaseContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
const AuthForm = lazy(() => import('../components/AuthForm'));

const Auth: React.FC = () => {
    const onSocialClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name },
        } = event;
        console.log(name);
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
            await authService.signInWithPopup(provider);
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
            await authService.signInWithPopup(provider);
        }
        console.log(provider);
    };
    return (
        <div className="authContainer">
            <AuthForm />
            <div className="authBtns">
                <button onClick={onSocialClick as any} name="google" className="authBtn">
                    Continue with Google <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button onClick={onSocialClick as any} name="github" className="authBtn">
                    Continue with Github <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    );
};

export default Auth;