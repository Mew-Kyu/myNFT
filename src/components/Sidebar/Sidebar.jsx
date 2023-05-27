import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "assets/Logo.svg";
import { ReactComponent as Dashboard } from "assets/dashboard.svg";
import { ReactComponent as Market } from "assets/shop.svg";
import { ReactComponent as Bid } from "assets/bids.svg";
import { ReactComponent as Portfolio } from "assets/portfolio.svg";
import { ReactComponent as Wallet } from "assets/wallet.svg";
import { ReactComponent as Favourite } from "assets/favoutites.svg";
import { ReactComponent as History } from "assets/history.svg";
import { ReactComponent as Setting } from "assets/settings.svg";
import mode from "assets/mode.svg";
import plus from "assets/plus.svg";
import eth from "assets/Ethereum (ETH).svg";
import arrow from "assets/right-arrow.svg";
import ethbg from "assets/bg eth.svg";
import { Toggle } from "components/Toggle";

const StyledSideBar = styled.div`
  .logo {
    max-width: 100%;
  }
  background-color: #fff;
  height: 100vh;
  padding: 32px;
  .sidebar-menu {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    margin: 25px auto;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #27262e;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: unset;
    color: #7a797d;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 24px;
    transition: 0.3s;
    svg {
      path {
        stroke: #7a797d;
        transition: 0.3s;
      }
    }
  }
  a:hover {
    svg {
      path {
        stroke: #5429ff;
      }
    }
    color: #5429ff;
    font-weight: 700;
  }
  .active {
    svg {
      path {
        stroke: #5429ff;
      }
    }
    color: #5429ff;
    font-weight: 700;
  }
  .item-text {
    margin-left: 12px;
  }
`;
const StyledMode = styled.div`
  display: flex;
  align-items: center;
  text-decoration: unset;
  color: #7a797d;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 24px;
`;
const AllNav = styled.div`
  margin-top: 32px;
`;
const Balance = styled.div`
  max-width: 228px;
  height: 220px;
  background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  .eth {
    position: absolute;
    padding-right: 30%;
  }
  .title-balance {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #e0dee6;
  }
  .amount-balance {
    font-weight: 700;
    font-size: 30px;
    line-height: 0;
  }
  .currency {
    color: #fff;
    text-transform: uppercase;
    padding-left: 8px;
  }
`;
const Icon = styled.button`
  display: flex;
  background: none;
  border: none;
  align-items: center;
`;
const TopUp = styled.button`
  cursor: pointer;
  width: 90%;
  padding: 14px 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  border: none;
  span {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const Sidebar = () => {
  return (
    <StyledSideBar>
      <img className="logo" src={logo} alt="logo" />
      <AllNav>
        <div className="nav">
          <NavLink to="/">
            <Dashboard />
            <span className="item-text">Dashboard</span>
          </NavLink>
          <NavLink to="/market">
            <Market />
            <span className="item-text">Market</span>
          </NavLink>
          <NavLink to="/active-bids">
            <Bid />
            <span className="item-text">Active Bids</span>
          </NavLink>
          <div className="sidebar-menu">PROFILE</div>
          <NavLink to="/portfolio">
            <Portfolio />
            <span className="item-text">My Portfolio</span>
          </NavLink>
          <NavLink to="/wallet">
            <Wallet />
            <span className="item-text">Wallet</span>
          </NavLink>
          <NavLink to="/favourite">
            <Favourite />
            <span className="item-text">Favourite</span>
          </NavLink>
          <NavLink to="/history">
            <History />
            <span className="item-text">History</span>
          </NavLink>
          <NavLink to="/setting">
            <Setting />
            <span className="item-text">Setting</span>
          </NavLink>
          <div className="sidebar-menu">Other</div>
          <StyledMode>
            <img src={mode} alt="Dark/Light mode" />
            <span className="item-text">Light Mode</span>
            <Toggle />
          </StyledMode>
        </div>
      </AllNav>
      <Balance>
        <img className="eth" src={ethbg} alt="ETH background" />
        <p className="title-balance">Your Balance</p>
        <p className="amount-balance">1,034.02</p>
        <Icon>
          <img src={eth} alt="Icon ETH" />
          <p className="currency">eth</p>
        </Icon>
        <TopUp>
          <img src={plus} alt="Plus icon" />
          <span>Top Up Balance</span>
          <img src={arrow} alt="Right arrow" />
        </TopUp>
      </Balance>
    </StyledSideBar>
  );
};
