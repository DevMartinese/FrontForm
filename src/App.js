import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ResetPassword } from "./components/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/reset-password/:resetPasswordToken" element={<ResetPassword/>} />
        <Route exact path="/" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
