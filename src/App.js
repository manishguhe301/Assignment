import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
