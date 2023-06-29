/* 
import "./App.css";
import { Application } from "./components/application/application";

function App() {
  return (
    <div className="App">
      <Application />
    </div>
  );
}

export default App;
 */

import "./App.css";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
