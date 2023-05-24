import Header from "components/Header";
import styled from "styled-components";
import { Sidebar } from "components/Sidebar";

const LayoutStyled = styled.div`
  width: 100%;
  background-color: #1c233d;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  background-color: #caeae6;
  margin-top: 64px;
  height: 100vh;
`;
const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <Sidebar />
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
