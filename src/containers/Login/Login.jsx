import { styled } from "styled-components";
import astronaut from "assets/login/astronaut.svg";
import eye from "assets/login/clarity_eye.svg";
import fb from "assets/login/Facebook.svg";
import github from "assets/login/Github.svg";
import google from "assets/login/Google.svg";
import vector from "assets/login/Vector.svg";
import { Link } from "react-router-dom";
import logo from "assets/Logo.svg";

const StyledLogin = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(174, 154, 255, 1) 100%
  );
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  .pic-bg {
    margin-top: 2%;
    height: 98%;
  }
  .logo {
    margin-left: 30px;
    width: 166px;
    height: 56px;
  }
  .bg-login {
    width: 30%;
    height: 60%;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
  .form-login {
    width: 100%;
  }
  .title-login {
    font-weight: 600;
    font-size: 56px;
    margin: 0;
  }
  .label-input {
    font-weight: 300;
    font-size: 16px;
  }
  .label-pass {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .forgot {
    cursor: pointer;
    font-weight: 300;
    font-size: 14px;
    color: #5429ff;
    opacity: 0.5;
    transition: 0.3s;
  }
  .forgot:hover {
    opacity: 1;
  }
  .input-username {
    height: 46px;
    width: 100%;
    background: rgba(187, 170, 255, 0.5);
    border-radius: 4px;
    border: none;
    font-size: 14px;
    padding: 0 10px;
  }
  .input-username:focus {
    outline: none;
  }
  .input-password {
    height: 46px;
    width: 100%;
    background: rgba(187, 170, 255, 0.5);
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .input-password img {
    cursor: pointer;
  }
  .pass {
    font-size: 14px;
    background: none;
    width: 90%;
    border: none;
  }
  .pass:focus {
    outline: none;
  }
  .log-button {
    cursor: pointer;
    width: 150px;
    height: 46px;
    background: #5429ff;
    border-radius: 23px;
    border: none;
    margin: 20px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.3s;
  }
  .log-button:hover {
    opacity: 0.8;
  }
  .log-button p {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
  .continue {
    font-weight: 400;
    font-size: 14px;
    color: #5429ff;
  }
  .logwith {
    display: flex;
    justify-content: space-evenly;
  }
  .logwith button {
    cursor: pointer;
    width: 30%;
    height: 50px;
    border: 1px solid #5429ff;
    border-radius: 40px;
    background-color: #fff;
    transition: 0.3s;
  }
  .logwith button:hover {
    opacity: 0.6;
  }
  .reg-form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2%;
  }
  .reg-label {
    font-weight: 400;
    font-size: 14px;
    opacity: 0.5;
    padding-right: 2%;
  }
  .reg {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    color: #5429ff;
    transition: 0.3s;
  }
  .reg:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    .pic-bg {
      display: none;
    }
    .bg-login {
      width: 70%;
      background-color: white;
      padding: 10%;
    }
    .logo {
      margin: 0;
      width: 100%;
      align-items: center;
    }
    .title-login {
      align-items: center;
      font-size: 35px;
      margin-bottom: 10px;
    }
    .label-input {
      font-size: 15px;
    }
    .forgot {
      font-size: 13px;
    }
  }
`;

const Login = () => {
  return (
    <StyledLogin>
      <div className="bg-login">
        <div className="form-login">
          <img className="logo" src={logo} alt="Logo" />
          <p className="title-login">Log In</p>
          <p className="label-input">Username</p>
          <input id="username" className="input-username" type="text" />
          <div className="label-pass">
            <p className="label-input">Password</p>
            <p className="forgot">Forgot Password ?</p>
          </div>
          <div className="input-password">
            <input id="password" className="pass" type="password" />
            <img id="showpass" src={eye} alt="Show pass" />
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="log-button">
                <p>LOGIN IN</p>
                <img src={vector} alt="Login button" />
              </button>
            </Link>
            <p className="continue">or continue with</p>
            <div className="logwith">
              <button>
                <img src={google} alt="Google" />
              </button>
              <button>
                <img src={github} alt="Github" />
              </button>
              <button>
                <img src={fb} alt="Facebook" />
              </button>
            </div>
            <div className="reg-form">
              <p className="reg-label">Don’t have an account yet?</p>
              <p className="reg">Sign up for free</p>
            </div>
          </div>
        </div>
      </div>
      <img className="pic-bg" src={astronaut} alt="Astronaut" />
    </StyledLogin>
  );
};

export default Login;
