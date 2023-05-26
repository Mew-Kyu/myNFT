import { styled } from "styled-components";
import cactus from "assets/login/cactus.svg";
import girl from "assets/login/Character-working-laptop-sitting-chair.svg";
import eye from "assets/login/clarity_eye-hide-line.svg";
import fb from "assets/login/Facebook.svg";
import github from "assets/login/Github.svg";
import google from "assets/login/Google.svg";
import vector from "assets/login/Vector.svg";
import { Link } from "react-router-dom";
import logo from "assets/Logo.svg";

const StyledLogin = styled.div`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .logo {
    width: 166px;
    height: 56px;
  }
  .bg-login {
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 20px;
  }
  .bg-right {
    border-radius: 20px;
    background-color: lightblue;
    width: 30%;
    height: 100%;
    float: right;
  }
  .content {
    height: 70%;
    width: 70%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5%;
  }
  .form-login {
    width: 60%;
  }
  .images {
    margin-top: 20%;
  }
  .girl {
    width: 70%;
  }
  .tree {
    width: 25%;
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
    font-weight: 300;
    font-size: 14px;
    color: #000;
    opacity: 0.5;
  }
  .input-username {
    height: 46px;
    width: 100%;
    background: #c0dbea;
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
    background: #c0dbea;
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
    background: #c0dbea;
    width: 90%;
    border: none;
  }
  .pass:focus {
    outline: none;
  }
  .log-button {
    width: 150px;
    height: 46px;
    background: #d885a3;
    border-radius: 23px;
    border: none;
    margin: 20px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }
  .log-button p {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
  .continue {
    font-weight: 400;
    font-size: 14px;
    color: #6096b4;
  }
  .logwith button {
    width: 30%;
    height: 50px;
    border: 1px solid #6096b4;
    border-radius: 40px;
    background-color: #fff;
    cursor: pointer;
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
    font-weight: 400;
    font-size: 14px;
    color: #d885a3;
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }
    .bg-right {
      display: none;
    }
    .logo {
      display: none;
    }
    .title-login {
      font-size: 35px;
      margin-bottom: 10px;
    }
    .label-input {
      font-size: 15px;
    }
    .forgot {
      font-size: 13px;
    }
    .images {
      display: none;
    }
  }
`;

const Login = () => {
  return (
    <StyledLogin>
      <div className="bg-login">
        <div className="bg-right"></div>
        <div className="content">
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
          <div className="images">
            <img className="girl" src={girl} alt="Girl" />
            <img className="tree" src={cactus} alt="Tree" />
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
