import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Forgot from "./pages/Forgot";
import Addproduct from "./pages/Addproduct";
import User from "./pages/User";
import Wishlist from "./pages/Wishlist";
import Detail from "./pages/Detail";
import Buy from "./pages/Buy";
import Order from "./pages/Order";
import ManageProducts from "./pages/ManageProducts";

// New Imports
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* Authentication */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />

          {/* User Pages */}
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/buy/:id" element={<Buy />} />
          <Route path="/order" element={<Order />} />

          {/* Admin Pages */}
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>}
          />

          <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/manageproducts" element={<AdminRoute><ManageProducts /></AdminRoute>}/>
          {/* 404 */}
          <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;