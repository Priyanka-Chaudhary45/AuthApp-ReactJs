// Components
import { Login, Register } from "./modules/auth";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Routes
import { appRoutes } from "./constants/appRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={appRoutes.login} element={<Login />} />
          <Route path={appRoutes.register} element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
