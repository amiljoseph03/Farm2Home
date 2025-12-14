import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Auth.css';

const Auth = ({ register }) => {
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-user-icon">
          {/* <CiUser size={30} /> */}
          {/* <div className="auth-user-icon"> */}
          <img
            src="https://i.pinimg.com/736x/38/a7/4f/38a74f2e8e0f485141338b285c2c6d6a.jpg"
            alt="User"
            className="user-image"
          />
          {/* </div> */}
        </div>

        <h1 className="auth-title">{register ? 'Register' : 'Login'}</h1>

        <form>
          {register && (
            <input placeholder="Username" type="text" className="auth-input" />
          )}

          <input placeholder="Email ID" type="email" className="auth-input" />

          <div className="password-container">
            <input
              placeholder="Password"
              type={viewPasswordStatus ? 'text' : 'password'}
              className="auth-input"
            />
            {viewPasswordStatus ? (
              <FaEyeSlash
                onClick={() => setViewPasswordStatus(!viewPasswordStatus)}
                className="eye-icon"
              />
            ) : (
              <FaEye
                onClick={() => setViewPasswordStatus(!viewPasswordStatus)}
                className="eye-icon"
              />
            )}
          </div>

          <p className="password-note">Never share password with others</p>
          <button type="button" className="forgot-btn">
            Forgot password
          </button>

          <button type="submit" className="auth-submit-btn">
            {register ? 'Register' : 'Login'}
          </button>

          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            {register ? (
              <p>
                Already have an account?
                <Link to="/login" className="auth-link">
                  Login
                </Link>
              </p>
            ) : (
              <p>
                New user?
                <Link to="/register" className="auth-link">
                  Register
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
