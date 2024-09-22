import { Topbar } from './components/topbar';
import { ThemeProvider } from "@/components/theme-provider";
import { User } from './pages/app/user/user';
import './index.css';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App">
        <Topbar />
      </div>
      <div>
        <User />
      </div>
    </ThemeProvider>
  );
}
