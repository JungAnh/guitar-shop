import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <div className="main">
            <Router/>
          </div>

      </BrowserRouter>
    </div>
  );
}

export default App;