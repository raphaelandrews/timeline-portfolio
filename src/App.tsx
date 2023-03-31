import { ThemeContextProvider } from './context/ThemeProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import RoutesApp from './routes/Routes';
import "./assets/fonts.css";

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <RoutesApp />
    </ThemeContextProvider>
  )
}

export default App;
