import { CssBaseline } from '@mui/material';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import './App.css';
import AppNavigation from './ui/navigation';
import DefaultTheme from './ui/themes/DefaultTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <AppNavigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
