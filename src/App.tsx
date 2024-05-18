import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import FormLayout from "./components/FormLayout";
import Table from "./components/Table";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form-layout" element={<FormLayout />} />
        <Route path="/tables" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
