import { useNavigate } from "react-router-dom";

function Forgot() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Forgot Password</h1>
      <h2>Enter your email to reset your password</h2>
      <h2>this is a simple forgot password page</h2>
      <p>In a real application, this would be a form to submit the email address</p>
      <p>So back where you come from.</p>
        <button onClick={() => navigate("/")}>Go Back to Login</button>
    </div>
  )
}

export default Forgot
