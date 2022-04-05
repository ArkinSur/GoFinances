import { ThemeProvider } from 'styled-components/native';
import { Dashboard } from './screens/Dashboard';
import theme from './global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
