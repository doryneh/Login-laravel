import React from "react";
import { Link } from "react-router-dom";
import ShowPass from "../Pages/ShowPass";
import ShowPassConfi from "../Pages/ShowPassConfi"
import PasswordConfirmation from "../Pages/PasswordConfirmation"
import UserType from "../Pages/UserType";

function SignUp() {
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
        <div className="white longWhite">
          <Link to="/">
            <div className="exit">
              <img src="images/Icon.png" alt="" />
            </div>
          </Link>
          <div className="SignButtons">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <Link to="/" className="btn btn-secondary firstBtn">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                />
                Sign in
              </Link>
              <Link to="/SignUp" className="btn btn-secondary secondBtn active">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                  defaultChecked
                />
                Sign up
              </Link>
            </div>
          </div>
          <div className="UserType mt-3 mb-2">
            <h6>What type of user are you?</h6>
            <form action="" id="form-checkout">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  defaultChecked
                  onClick={UserType}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Public
                  <br />
                  <span className="PublicDetails shown">
                    <i className="fas fa-question-circle"></i> More details
                    <div className="info">
                      <img
                        src="images/Info.png"
                        alt="information"
                        className="info shown d-none"
                      />
                    </div>
                  </span>
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                  onClick={UserType}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Service provider
                  <br />
                  <span className="Details">
                    <i className="fas fa-question-circle"></i> More details
                  </span>
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                  onClick={UserType}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  Funder
                  <br />
                  <span className="Details">
                    <i className="fas fa-question-circle"></i> More details
                  </span>
                </label>
              </div>

              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Large"
                  placeholder="Name"
                  required
                />
              </div>
              <div
                className="input-group input-group-lg my-3"
                id="companyName"
              >
                <input
                  type="text"
                  className="form-control "
                  aria-label="Large"
                  placeholder="Company name"
                  required
                />
              </div>
              <div className="input-group input-group-lg my-3 ">
                <input
                  type="email"
                  className="form-control"
                  aria-label="Large"
                  placeholder="Email adress"
                  required
                />
              </div>
              <div className="input-group input-group-lg mb-3 ">
                <input
                  type="number"
                  className="form-control"
                  aria-label="Large"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className="input-group input-group-lg pass mb-3">
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
              <div className="input-group input-group-lg pass mb-3">
                <input
                  type="password"
                  className="form-control"
                  aria-label="Large"
                  placeholder="Confirm password"
                  id="myInputConfirmation"
                  required
                />
                <span className="ShowPass" onClick={ShowPassConfi}>
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </form>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input TermAndPolice"
                type="checkbox"
                name="privacyAndPolice"
                id="privacy"
                required
              />
              <label
                className="form-check-label mb-2 ReadAndAccept"
                htmlFor="privacy"
              >
                I have read and accept the terms & police
              </label>
            </div>
            <div className="inBtn">
              <button className="btn btn-primary" role="Submit" onClick={PasswordConfirmation} id="btnSubmit">
               
                Create my account
                <span className="arrow">
                  <i className="fas fa-arrow-right"></i>
                </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
