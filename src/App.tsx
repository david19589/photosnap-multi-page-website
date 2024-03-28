import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  return (
    <div>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
