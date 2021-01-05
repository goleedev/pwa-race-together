import React, {lazy, Suspense} from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
const Home = lazy(() => import("../routes/Home"));
const About = lazy(() => import("../routes/About"));
const Auth = lazy(() => import("../routes/Auth"));
const Profile = lazy(() => import("../routes/Profile"));
const Navigation = lazy(() => import("./Navigation"));


const AppRouter: React.FC = ({refreshUser, isLoggedIn, userObj}: any) => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                    <div
                        style={{
                        maxWidth: 890,
                        width: "100%",
                        margin: "0 auto",
                        marginTop: 80,
                        display: "flex",
                        justifyContent: "center",
                        }}
                    >
                        <Route exact path="/">
                            <Home userObj={userObj} />   
                        </Route>
                        <Route exact path="/profile">
                            <Profile refreshUser={refreshUser} userObj={userObj} />   
                        </Route>
                    </div>
                    ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </>)
                }
                </Switch>
            </Suspense>
        </Router>
    );
};

export default AppRouter;