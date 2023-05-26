import { CardNFT } from "components/CardNFT";
import { styled } from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 700;
    font-size: 24px;
    color: #27262e;
  }
  .title-list {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .art {
    background: rgba(84, 41, 255, 0.1);
    width: 45px;
    height: 28px;
    color: #5429ff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-radius: 30px;
  }
  .other {
    font-size: 14px;
    color: #7a797d;
    font-weight: 500;
  }
`;

const AllTrend = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
`;

const Trending = () => {
  return (
    <>
      <Title>
        <p>Trending Auctions</p>
        <div className="title-list">
          <div className="art">Art</div>
          <div className="other">Music</div>
          <div className="other">Collectibles</div>
          <div className="other">Utility</div>
        </div>
      </Title>
      <AllTrend>
        <CardNFT />
      </AllTrend>
    </>
  );
};

export default Trending;
