import styled from "styled-components";
import search from "assets/search.svg";

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  box-sizing: border-box;
  height: 64px;
  padding: 12px 32px;
  display: flex;
  justify-content: space-between;
  background-color: #caeae6;
`;
const SearchForm = styled.div`
  width: 50%;
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
    border: none;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <SearchForm>
        <img src={search} alt="" />
        <input type="text" />
      </SearchForm>
      <div>
        <span>noti</span>
        <span>avatar</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
