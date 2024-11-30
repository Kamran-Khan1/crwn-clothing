import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Route, Routes } from "react-router-dom";

const MyHates = () => {
  return (
    <div>
      <h1>This is HATS Page</h1>
    </div>
  );
};

const MyJackets = () => {
  return (
    <div>
      <h1>This is JACKETS Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/hats" element={<MyHates />} />
        <Route path="/shop/jackets" element={<MyJackets />} />
      </Routes>
    </div>
  );
}

export default App;
