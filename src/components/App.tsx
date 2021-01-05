import React, { useState, useEffect } from 'react';
import AppRouter from './Router';
import { authService } from '../FirebaseContext';

const App: React.FC = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState<any | null>(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj ({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args: any) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser: any = () => {
    const user: any = authService.currentUser;
    setUserObj ({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args: any) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? <AppRouter /> : "Initializing..."}
    </>
  )
}

export default App;