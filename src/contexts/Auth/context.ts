import { createContext } from 'react';
import { AuthorizationResponse } from './provider';

export interface Context {
  user: Record<string, any>;
  signInWithGoogle: () => Promise<AuthorizationResponse>;
}

const AuthContext = createContext({} as Context);

export default AuthContext;
