// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Error from "./Screens/Error";
import NewLogin from "./Screens/NewLogin";
import NewSignUp from "./Screens/NewSignUp";
import store from "./Config/Redux/Store";
import {BUG_ADDED} from './Config/Redux/ActionTypes'

function App() {
  // store.dispatch(BUG_ADDED("Bug 1"));

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<NewLogin />} />
          <Route path="/signup" element={<NewSignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
