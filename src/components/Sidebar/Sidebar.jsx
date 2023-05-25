import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "assets/Logo.svg";
import dashboard from "assets/dashboard.svg";
import market from "assets/shop.svg";
import bid from "assets/bids.svg";
import portfolio from "assets/portfolio.svg";
import wallet from "assets/wallet.svg";
import favourite from "assets/favoutites.svg";
import history from "assets/history.svg";
import setting from "assets/settings.svg";
import mode from "assets/mode.svg";
import plus from "assets/plus.svg";
import eth from "assets/Ethereum (ETH).svg";
import arrow from "assets/right-arrow.svg";
import ethbg from "assets/bg eth.svg";
import { Toggle } from "components/Toggle";

const StyledSideBar = styled.div`
  background-color: white;
  height: 100vh;
  padding: 32px;
  .logo {
    max-width: 100%;
  }
`;
const AllNav = styled.div`
  margin-top: 32px;
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7a797d;
  }
`;
const TitleGroup = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  margin: 25px auto;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #27262e;
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
    padding-right: 6%;
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
const NavItem = ({ text, path, img, children }) => {
  return (
    <StyledNavItem>
      <img src={img} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
      {children}
    </StyledNavItem>
  );
};
export const Sidebar = () => {
  return (
    <StyledSideBar>
      <img className="logo" src={logo} alt="logo" />
      <AllNav>
        <NavItem img={dashboard} text="Dashboard" path="/"></NavItem>
        <NavItem img={market} text="Market" path="/about"></NavItem>
        <NavItem img={bid} text="Active Bids" path="/"></NavItem>
        <TitleGroup>profile</TitleGroup>
        <NavItem img={portfolio} text="My Portfolio" path="/"></NavItem>
        <NavItem img={wallet} text="Wallet" path="/"></NavItem>
        <NavItem img={favourite} text="Favourites" path="/"></NavItem>
        <NavItem img={history} text="History" path="/"></NavItem>
        <NavItem img={setting} text="Settings" path="/"></NavItem>
        <TitleGroup>other</TitleGroup>
        <NavItem img={mode} text="Light Mode" path="/">
          <Toggle />
        </NavItem>
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
