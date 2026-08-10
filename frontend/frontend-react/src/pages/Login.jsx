import { useState } from "react";
import { loginUser } from "../services/api";

function Login({ setLoggedIn }) {

    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {

        try {

            setLoading(true);

            const response = await loginUser();

            localStorage.setItem(
                "token",
                response.data.token
            );

            setLoggedIn(true);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="login">

            <h1>Mini Amazon</h1>

            <h2>Login</h2>

            <button onClick={handleLogin}>
                {loading ? "Logging in..." : "Login"}
            </button>

        </div>
    );
}

export default Login;



