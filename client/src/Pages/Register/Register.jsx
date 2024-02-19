import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../../../APPLink";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        URL: auth.register,
        data,
      });
      if (response.status === 200) return navigate("/");
    } catch (error) {
      console.log("Error in Register", error);
      setData({ email: "", password: "", username: "" });
    }
  };
  return (
    <>
      {" "}
      <section className="vh-100 " style={{ marginTop: "10%" }}>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <Link to="/">
                <div className="btn btn-primary">Home</div>
              </Link>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control form-control-lg"
                    placeholder="Enter a Username"
                    value={data.username}
                    required={true}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={data.email}
                    required={true}
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e) => handleChange(e)}
                    value={data.password}
                    required={true}
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/login" className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
