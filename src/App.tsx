import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./containers/header/header";
import { Search } from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
