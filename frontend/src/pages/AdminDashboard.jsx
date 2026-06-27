import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {

    const navigate = useNavigate();

    const [dashboard, setDashboard] = useState({
        products: 0,
        users: 0,
        orders: 0
    });

    useEffect(() => {

        const getDashboard = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:3006/admin/dashboard"
                );

                setDashboard({
    products: res.data.totalProducts,
    users: res.data.totalUsers,
    orders: res.data.totalOrders
});

            } catch (err) {
                console.log(err);
            }

        };

        getDashboard();

    }, []);

    const logout = () => {

        localStorage.clear();

        navigate("/");

    };

    return (
        <div className="admin-container">

            {/* Sidebar */}

            <div className="sidebar">

                <h2>Admin Panel</h2>

                <Link to="/admindashboard">🏠 Dashboard</Link>

                <Link to="/manageproducts">📦 Manage Products</Link>

                <Link to="/addproduct">➕ Add Product</Link>

                <Link to="/order">🛒 Orders</Link>

                <Link to="/user">👤 Users</Link>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

            {/* Main Content */}

            <div className="main-content">

                {/* Navbar */}

                <div className="top-navbar">

                    <h3>Online_Chalai Admin</h3>

                </div>

                <h1 className="dashboard-title">
                    Dashboard
                </h1>

                <div className="card-container">

                    <div className="dashboard-card">

                        <h2>Total Products</h2>

                        <h1>{dashboard.products}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h2>Total Users</h2>

                        <h1>{dashboard.users}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h2>Total Orders</h2>

                        <h1>{dashboard.orders}</h1>

                    </div>

                </div>

            </div>

        </div>
    );

}

export default AdminDashboard;