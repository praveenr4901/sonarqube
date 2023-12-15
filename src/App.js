import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import TermsAndConditions from "./termsandconditions";
import PrivacyPolicy from "./privacypolicy";
import Support from "./support";
import Help from "./help";
import { Navigate } from "react-router-dom";
import QrLanding from "./QrLanding";
function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route element={<Home />} path="/" />
          <Route element={<TermsAndConditions />} path="/termsandconditions" />
          <Route element={<PrivacyPolicy />} path="/privacypolicy" />
          <Route element={<Support />} path="/support" />
          <Route element={<Help />} path="/help" />
          <Route element={<QrLanding />} path="/qrlanding/:id" />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
