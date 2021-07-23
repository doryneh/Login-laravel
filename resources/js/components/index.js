import React from "react";
import ReactDOM from "react-dom";

function Index() {
    return (
        <div className="back">
            <div className="green">
                <div className="logo">
                    <img src="images/Group 22.png" alt="logo" />
                </div>
                <div className="text">
                    <div className="textTop">
                        <img
                            src="images/Quality, proximity& responsibility..png"
                            alt="text"
                        />
                    </div>
                    <div className="textBottom">
                        <img
                            src="images/These are the core values of our journey.We believe in delivering on our promises..png"
                            alt="text"
                        />
                    </div>
                </div>
                <div className="white">
                    <Link to="/">
                        <div className="exit">
                            <img src="images/Icon.png" alt="" />
                        </div>
                    </Link>

                    <div className="SignButtons">
                        <div
                            className="btn-group btn-group-toggle"
                            data-toggle="buttons"
                        >
                            <Link
                                to="/"
                                className="btn btn-secondary firstBtn active"
                            >
                                <input
                                    type="radio"
                                    name="options"
                                    id="option1"
                                    autoComplete="off"
                                    defaultChecked
                                />
                                Sign in
                            </Link>
                            <Link
                                to="/SignUp"
                                className="btn btn-secondary secondBtn"
                            >
                                <input
                                    type="radio"
                                    name="options"
                                    id="option2"
                                    autoComplete="off"
                                />
                                Sign up
                            </Link>
                        </div>
                    </div>
                    <div className="home">
                        <div className="input-group input-group-lg mb-3 mt-5">
                            <input
                                type="email"
                                className="form-control"
                                aria-label="Large"
                                placeholder="Email adress"
                                required
                            />
                        </div>
                        <div className="input-group input-group-lg pass">
                            <input
                                type="password"
                                className="form-control"
                                aria-label="Large"
                                placeholder="Password"
                                id="myInput"
                                required
                            />
                            <span className="ShowPass" onClick={ShowPass}>
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                        <div className="Forgot my-3">
                            <a href="">I forgot my password</a>
                        </div>
                        <div className="inBtn ">
                            <a href="/">
                                <button
                                    className="btn btn-primary"
                                    role="Submit"
                                >
                                    Sign-in
                                    <span className="arrow">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </button>
                            </a>
                            <div className="AnotherWays mt-4">
                                <h6>Or sign in using</h6>
                                <div className="facebook my-3">
                                    <button
                                        className="btn btn-primary"
                                        role="button"
                                    >
                                        <span className="logos">
                                            <i className="fab fa-facebook-f"></i>
                                        </span>
                                        Facebook
                                    </button>
                                    <div className="google mt-3">
                                        <button
                                            className="btn btn-primary"
                                            role="button"
                                        >
                                            <span className="logos">
                                                <i className="fab fa-google"></i>
                                            </span>
                                            Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Index;
