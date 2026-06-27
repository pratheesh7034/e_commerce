import axios from "axios"
import { useState } from "react"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const register = async () => {
        console.log(user,"uuser");
        
        try {
            const res = await axios.post("http://localhost:3006/user/register", user);
            alert(res.data.msg)
            navigate("/");
        } catch (error) {
            console.log(error)
            alert(
                error.response?.data?.msg ||
                "Login failed. Please try again."
            )
        }
    }

    return (
        <div className="register-container">
            <div className="form-box">
            <h1 className="register-title">Register</h1>
            <table align="center" cellPadding={8} cellSpacing={8} >
                <tr>
                    <td><input name="name" placeholder="Name" type="text" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><input name="email" placeholder="Email" type="email" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><input name="password" placeholder="Password" type="password" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><input name="confirmPassword" placeholder="Confirm Password" type="password" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td align="center"><button onClick={register} >Register</button></td>
                </tr>
                <tr>
                    <td align="center">Already have an account?<Link to="/"> Login</Link></td>
                </tr>
            
            </table>
            </div>
        </div>
    )
}

export default Register


