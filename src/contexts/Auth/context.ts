import { createContext } from 'react';

export interface Context {
  user: Record<string, any>;
}

const AuthContext = createContext({} as Context);

export default AuthContext;
