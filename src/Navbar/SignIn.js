import React from "react";
import SearchBar from "./SearchBar";

class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.email === "" && this.state.password === "") {
            alert("All the fields are mandetory")
            return;
        }
        this.setState({ email: "", password: "" });
        this.props.history.push("/stories");
    }
    render() {
        return (
            <>
            
                <div className="main-signin">
                {/* <SearchBar /> */}
                    <div className="signin-content">
                        <div className="signin-heading">
                            <h3>Sign in to ScoopWhoop</h3>
                        </div>
                        <div className="signin-paragraph">
                            <p>to get personalized suggestions, save articles and videos for later and, engage with ScoopWhoop community.</p>
                        </div>
                        <div className="login-content">
                            <div className="login-input">
                                <form onSubmit={this.add}>
                                    <input type="text"
                                        className="input-gap"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value })} />

                                    <input type="password"
                                        className="input-gap"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })} />
                                    {/* <input className="input-gap" type="email" placeholder="Email" /> */}
                                    {/* <input className="input-gap" type="password" placeholder="Password" /> */}
                                    <button className="input-btn">Sign In</button>
                                </form>
                                <button className="slf-btn-simple">Forgot password</button>
                                <button className="slf-btn-simple">Signup with your Email</button>
                            </div>
                            <div className="login-button">
                                <button className="login-btn">Sign in with Facebook</button>
                                <button className="login-btn">Sign in with Google</button>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default SignIn;