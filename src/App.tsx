import { ThemeProvider } from './styles/ThemeProvider';
import { ToggleButton } from './components/Button/Button';

function App() {
  return (
    <ThemeProvider>
      <ToggleButton />
    </ThemeProvider>
  )
}

export default App
