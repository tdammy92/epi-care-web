import React, { useEffect, useState } from 'react';

import SignUp from './sign-up/page';
import SignIn from './sign-in/page';
import { useAppSelector } from '@/store';
import { useRouter } from 'next/navigation';

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isAuthenticated, login, signup } = useAuth();
const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();


  useEffect(() => {
    // Update the URL based on the current state
    if (!isLoggedIn) {
      router.replace(isSignup ? '/sign-up' : '/sign-in');
    }
  }, [isSignup, isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
     
       <>
          {isSignup ? (
            <SignUp
            
              onSwitchToLogin={() => setIsSignup(false)}
            />
          ) : (
            <SignIn
              onSwitchToSignup={() => setIsSignup(true)}
            />
          )}
     </>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;