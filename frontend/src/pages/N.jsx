import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

function N() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");

        navigate("/");

    };

    return (
        <div>

            <Navbar style={{ backgroundColor: '#FE7F2D' }} expand="lg">

                <Container>

                    <Navbar.Brand>

                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"
                        />

                        {" "}Online_Chalai

                    </Navbar.Brand>

                    <Nav className="ms-auto">

                        {/* User Menu */}

                        {role !== "admin" && (
                            <>
                                <Link to="/main" className="nav-link me-3">
                                    Home
                                </Link>

                                <Link to="/contact" className="nav-link me-3">
                                    Contact
                                </Link>

                                <Link to="/about" className="nav-link me-3">
                                    About
                                </Link>

                                <Link to="/order" className="nav-link me-3">
                                    Orders
                                </Link>

                                <Link to="/user" className="nav-link">
                                    <img
                                        src={profile}
                                        width="30"
                                        height="30"
                                        alt="profile"
                                    />
                                </Link>
                            </>
                        )}

                        {/* Admin Menu */}

                        {role === "admin" && (
                            <>
                                <Link to="/admin" className="nav-link me-3">
                                    Dashboard
                                </Link>

                                <Link to="/addproduct" className="nav-link me-3">
                                    Add Product
                                </Link>

                                <Link to="/order" className="nav-link me-3">
                                    Orders
                                </Link>

                                <Link to="/user" className="nav-link me-3">
                                    Users
                                </Link>
                            </>
                        )}

                        <button
                            className="btn btn-dark ms-3"
                            onClick={logout}
                        >
                            Logout
                        </button>

                    </Nav>

                </Container>

            </Navbar>

        </div>
    );
}

export default N;