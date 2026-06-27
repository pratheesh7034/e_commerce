import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const login = async () => {
        try {

            const res = await axios.post(
                "http://localhost:3006/user/login",
                loginData
            );

            alert(res.data.msg);

            if (res.data.token) {

                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.user._id);
                localStorage.setItem("role", res.data.role);

                if (res.data.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/main");
                }

            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.msg ||
                "Login failed. Please try again."
            );

        }
    };

    return (
        <div className="register-container2">
            <div className="form-box2">

                <h2 className="register-title">Login</h2>

                <table align="center" cellPadding={8} cellSpacing={8}>
                    <tbody>

                        <tr>
                            <td align="center">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td align="center">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td align="center">
                                <button onClick={login}>
                                    Login
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td align="center">
                                Don't have an account?{" "}
                                <Link to="/register">
                                    Register
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td align="center">
                                Forgot your password?{" "}
                                <Link to="/forgot">
                                    Reset Password
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Login;