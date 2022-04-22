import { ReactNode, useMemo } from 'react';
import AuthContext, { Context } from './context';

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const value = useMemo(() => {
    return { user: {} } as Context;
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
