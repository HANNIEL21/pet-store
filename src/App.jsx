import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";

// components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Setting from "./pages/Setting";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";


function App() {
  return (
    <div className="App min-vh-100" style={{ backgroundColor: "#E2E2E2" }}>

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/product/:productId" element={<ProductDetails />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
