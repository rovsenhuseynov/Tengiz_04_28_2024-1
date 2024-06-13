import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    setIsLogin(true);
    setError("");
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setError("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Мокап запроса на сервер для демонстрации
      console.log("Email:", email);
      console.log("Password:", password);
      if (!isLogin) {
        console.log("Confirm Password:", confirmPassword);
      }
      // Здесь будет запрос на сервер для отправки данных и обработки

      // Здесь можно добавить логику входа или регистрации в зависимости от значения isLogin
    } catch (error) {
      console.error("Error:", error);
      setError("Ошибка при отправке данных");
    } finally {
      setLoading(false);
    }
  };
  console.log("Current state isLogin:", isLogin);
  return (
    <div className="login-wrapper">
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLogin ? "login" : ""}`}>Login Form</div>
          <div className={`title ${!isLogin ? "signup" : ""}`}>Signup Form</div>
        </div>

        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="form-slide"
              id="login"
              checked={isLogin}
              readOnly
            />
            <input
              type="radio"
              name="form-slide"
              id="signup"
              checked={!isLogin}
              readOnly
            />
            <label
              htmlFor="login"
              className="form-slide login"
              onClick={handleLoginClick}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className="form-slide signup"
              onClick={handleSignupClick}
            >
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>

          <div
            className="form-inner"
            style={{
              transform: isLogin ? "translateX(0)" : "translateX(-50%)",
            }}
          >
            <form onSubmit={handleFormSubmit} className="login">
              <div className="field">
                <input
                  type="text"
                  id="login-email"
                  name="login-email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="field">
                <input
                  type="password"
                  id="login-password"
                  name="login-password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>

              <div className="pass-link">
                <a href="#!">Forgot password?</a>
              </div>

              <div className="field btn">
                <div className="btn-layer"></div>
                <input
                  type="submit"
                  value={loading ? "Loading..." : isLogin ? "Login" : "Signup"}
                  disabled={loading}
                />
              </div>

              <div className="signup-link">
                Not a member?
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignupClick();
                  }}
                >
                  Signup now
                </a>
              </div>
            </form>

            <form onSubmit={handleFormSubmit} className="signup">
              <div className="field">
                <input
                  type="text"
                  id="signup-email"
                  name="signup-email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  id="signup-password"
                  name="signup-password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  id="signup-confirm-password"
                  name="signup-confirm-password"
                  placeholder="Confirm password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input
                  type="submit"
                  value={loading ? "Loading..." : "Signup"}
                  disabled={loading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Login;


