import { Button } from "components/Button";
import styled from "styled-components";
import ethIcon from "assets/Ethereum-blue.svg";

const StyledCard = styled.div`
  padding: 11px 22px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  width: 164px;
  height: 167px;
  color: #747475;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .info-card {
    width: 100%;
    text-align: center;
  }
  .title {
    width: 100%;
    color: #747475;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #27262e;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
  }
  .eth {
    margin-right: 4px;
  }
  .roi {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #27262e;
  }
`;
export const Card = ({ title, amount, content, percent }) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      <div className="info-card">
        {amount ? (
          <div className="ammount-wrapper">
            <img className="eth" src={ethIcon} alt="eth-icon"></img>
            <span className="amount">{amount}</span> ETH
          </div>
        ) : (
          <div className="ammount-wrapper">
            <span className="roi">{content}</span> %
          </div>
        )}
        <Button
          percent={percent}
          borderColor="#E9E9E9"
          radius={12}
          width={115}
          height={46}
        >
          {Math.abs(percent)}%
        </Button>
      </div>
    </StyledCard>
  );
};
