/* eslint-disable consistent-return */
import { ReactNode, useMemo, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { string } from 'yup';
import AuthContext, { Context } from './context';
import { CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '../../utils/keys';

interface Props {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}

interface AuthorizationResponse {
  type: 'cancel' | 'dismmis' | 'error' | 'locked' | 'success';
  params?: {
    access_token: string;
  };
}

interface GoogleUserInfo {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState({} as User);

  const signInWithGoogle = async () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    try {
      const { params, type } = (await AuthSession.startAsync({ authUrl })) as AuthorizationResponse;
      if (params && type === 'success') {
        // eslint-disable-next-line no-undef
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo: GoogleUserInfo = await response.json();
        setUser({
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture
        });
        return userInfo;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const value = useMemo(() => {
    return { user, signInWithGoogle } as Context;
  }, [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
