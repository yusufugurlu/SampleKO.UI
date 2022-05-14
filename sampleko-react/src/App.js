import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './Companent/Login';
import Products from "./Companent/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route ex path="/" exact  element={<Login />} />
        <Route path="/Products" element={<Products />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
