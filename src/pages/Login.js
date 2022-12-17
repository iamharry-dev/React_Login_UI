import React from "react";

class Login extends React.Component {

    
    render() {
        
        return (
            <div>
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">Fraction Login</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input className="btn solid" type="submit" value="Login" />
                            </form>  
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3> Fraction Analytics</h3>
                                <p>
                                We offers a wide range of video-related solutions for your Exterprise areas and Home.
                                </p>
                            </div>
                            <img src="./assets/img/logo.svg" className="image" alt="" />
                        </div>
                        </div>
                    </div>
                </div>
        

        )
    }
}

export default Login;