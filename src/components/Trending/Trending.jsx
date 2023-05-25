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
  }
`;
const TrendCart = styled.div`
  width: 348px;
  height: 364px;
  background: #ffffff;
  border-radius: 16px;
`;

const Trending = () => {
  return (
    <>
      <Title>
        <p>Trending Auctions</p>
        <div className="title-list">
          <div>Art</div>
          <div>Music</div>
          <div>Collectibles</div>
          <div>Utility</div>
        </div>
      </Title>
    </>
  );
};

export default Trending;
