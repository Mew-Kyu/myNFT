// import logo from './logo.svg';
import { Card } from 'components/Card';
import './App.css';
import { Button } from './components/Button';
import plusIcon from "assets/plus.svg"
import styled from "styled-components";

const StyledCardCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 50px;
`;

function App() {
  return (
    <div className="App">
      <StyledCardCon>
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
        <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
        <Card title={"ROI"} content={"+14.02"} percent={-5.1}></Card>
        <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
      </StyledCardCon>
      {/* <Button percent={10} onClick={()=>console.log("Clickkkk")}><span>Click</span>Me</Button>
      <Button textColor="white" bgColor="transparent" borderColor="white">0%</Button>
      <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
      <Button width={77} height={32} textColor="#5429FF" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button> */}
    </div>
  );
}

export default App;
