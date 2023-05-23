// import logo from './logo.svg';
import { Card } from 'components/Card';
import './App.css';
import { Button } from './components/Button';
import plusIcon from "assets/plus.svg"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
      <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
      <Card title={"ROI"} content={"+14.02"} percent={-5.1}></Card>
      <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
      {/* <Button percent={10} onClick={()=>console.log("Clickkkk")}><span>Click</span>Me</Button>
      <Button textColor="white" bgColor="transparent" borderColor="white">0%</Button>
      <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
      <Button width={77} height={32} textColor="#5429FF" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button> */}
    </div>
  );
}

export default App;
