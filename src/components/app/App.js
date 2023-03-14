import PageCalls from "../../pages/pageCalls/PageCalls";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./app.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__sidebar">
          <Sidebar />
        </div>
        <div className="app__main">
          <Header />
          <Routes>
            <Route path="calls" element={<PageCalls />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
