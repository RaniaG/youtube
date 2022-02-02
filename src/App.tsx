import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorFallback } from "./components/error-fallback/error-fallback";
import { ErrorNotification } from "./components/error-notification/error-notification";
import { Loading } from "./components/loading/loading";
import { Header } from "./containers/header/header";
import { Search } from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Header />
          <Loading />
          <Routes>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </Router>
        <ErrorNotification />
      </ErrorBoundary>
    </div>
  );
}

export default App;
