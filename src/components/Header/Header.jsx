import styled from "styled-components";
import search from "assets/search.svg";
import noti from "assets/noti.svg";
import avatar from "assets/avatar.svg";

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 80%;
  box-sizing: border-box;
  height: 80px;
  padding-left: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #caeae6;
`;
const SearchForm = styled.div`
  width: 50%;
  padding: 0 26px;
  height: 39px;
  border-radius: 35px;
  background: #ffffff;
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
  input {
    width: 100%;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    outline: none;
    text-indent: 15px;
  }
  input::placeholder {
    color: #b9b8bc;
  }
`;
const RightHeader = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 32px;
  div {
    width: 56px;
    height: 56px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
  }
  div img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <SearchForm>
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search Item, Collection and Account.."
        />
      </SearchForm>
      <RightHeader>
        <div>
          <img src={noti} alt="Notification icon" />
        </div>
        <img src={avatar} alt="Avatar" />
      </RightHeader>
    </HeaderStyled>
  );
};

export default Header;
