import { ThemeContextProvider } from './context/ThemeProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import { ToggleButton } from './components/Button/Button';

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <ToggleButton />
    </ThemeContextProvider>
  )
}

export default App;
