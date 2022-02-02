import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Loading } from "./components/loading/loading";
import { Header } from "./containers/header/header";
import { Search } from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Loading />
        <Routes>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
