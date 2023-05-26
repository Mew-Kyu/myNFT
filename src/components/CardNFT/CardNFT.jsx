import { Button } from "components/Button";
import { styled } from "styled-components";
import clock from "assets/trending/clock.svg";
import eth from "assets/trending/miniEth.svg";
import nft1 from "assets/trending/nft1.svg";
import human1 from "assets/trending/human1.svg";
import nft2 from "assets/trending/nft2.svg";
import human2 from "assets/trending/human2.svg";

const fakeData = [
  {
    nft: nft1,
    time: "12:03:45",
    name: "Ape In Love",
    like: "21,5K",
    avatar: human1,
    nickname: "@johnti60",
    bid: "9.10",
  },
  {
    nft: nft2,
    time: "08 : 21 : 23",
    name: "Smilling Ape",
    like: "21,5K",
    avatar: human2,
    nickname: "@m_alisson",
    bid: "6.12",
  },
  {
    nft: nft1,
    time: "12:03:45",
    name: "Ape In Love",
    like: "21,5K",
    avatar: human1,
    nickname: "@johnti60",
    bid: "9.10",
  },
  {
    nft: nft2,
    time: "08 : 21 : 23",
    name: "Smilling Ape",
    like: "21,5K",
    avatar: human2,
    nickname: "@m_alisson",
    bid: "6.12",
  },
  {
    nft: nft1,
    time: "12:03:45",
    name: "Ape In Love",
    like: "21,5K",
    avatar: human1,
    nickname: "@johnti60",
    bid: "9.10",
  },
  {
    nft: nft2,
    time: "08 : 21 : 23",
    name: "Smilling Ape",
    like: "21,5K",
    avatar: human2,
    nickname: "@m_alisson",
    bid: "6.12",
  },
  {
    nft: nft1,
    time: "12:03:45",
    name: "Ape In Love",
    like: "21,5K",
    avatar: human1,
    nickname: "@johnti60",
    bid: "9.10",
  },
  {
    nft: nft2,
    time: "08 : 21 : 23",
    name: "Smilling Ape",
    like: "21,5K",
    avatar: human2,
    nickname: "@m_alisson",
    bid: "6.12",
  },
  {
    nft: nft1,
    time: "12:03:45",
    name: "Ape In Love",
    like: "21,5K",
    avatar: human1,
    nickname: "@johnti60",
    bid: "9.10",
  },
  {
    nft: nft2,
    time: "08 : 21 : 23",
    name: "Smilling Ape",
    like: "21,5K",
    avatar: human2,
    nickname: "@m_alisson",
    bid: "6.12",
  },
];

const StyledCardNFT = styled.div`
  width: 348px;
  height: 364px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  .m-img {
    width: 324px;
    height: 196px;
    border-radius: 12px;
    line-height: 0;
    position: relative;
    .nft-img {
      width: 100%;
    }
    .timeout {
      position: absolute;
      top: 90%;
      left: 5%;
      transform: translate(-5%, -90%);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 6px 10px 6px 6px;
      width: 100px;
      height: 28px;
      background: rgba(22, 22, 22, 0.16);
      backdrop-filter: blur(17px);
      border-radius: 20px;
      .clock {
        width: 16px;
        height: 16px;
      }
      .time {
        font-weight: 700;
        font-size: 12px;
        color: #ffffff;
        letter-spacing: 0.6px;
      }
    }
    .place {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .m-img:hover {
    .place {
      visibility: visible;
      opacity: 1;
    }
  }
  .line1 {
    width: 86%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0;
    .name {
      font-weight: 700;
      font-size: 24px;
      color: #27262e;
    }
    .like {
      font-weight: 400;
      font-size: 16px;
      color: #747475;
    }
  }
  .line2 {
    width: 86%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 0;
    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    p {
      padding-left: 8px;
      font-weight: 400;
      font-size: 16px;
      color: #747475;
    }
  }
  .line3 {
    width: 86%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0;
    .title-bid {
      color: #747475;
      font-weight: 700;
      font-size: 16px;
    }
  }
  .price {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    img {
      width: 20px;
      height: 20px;
    }
    .bid {
      font-weight: 700;
      color: #27262e;
    }
    .currency {
      color: #747475;
    }
  }
`;

const CardNFT = () => {
  return (
    <>
      {fakeData.map((item) => (
        <StyledCardNFT>
          <div className="m-img">
            <img className="nft-img" src={item.nft} alt="NFT" />
            <Button
              className="place"
              fontWeight={700}
              fontSize={16}
              textColor={"#5429FF"}
              bgColor={"#fff"}
              width={144}
              height={46}
              radius={40}
            >
              Place a Bid
            </Button>
            <div className="timeout">
              <img className="clock" src={clock} alt="clock" />
              <p className="time">{item.time}</p>
            </div>
          </div>
          <div className="line1">
            <p className="name">{item.name}</p>
            <p className="like">{item.like} Likes</p>
          </div>
          <div className="line2">
            <img src={item.avatar} alt="Avatar" />
            <p>{item.nickname}</p>
          </div>
          <div className="line3">
            <p className="title-bid">Current Bid</p>
            <div className="price">
              <img src={eth} alt="ETH icon" />
              <p className="bid">{item.bid}</p>
              <p className="currency">ETH</p>
            </div>
          </div>
        </StyledCardNFT>
      ))}
    </>
  );
};

export { CardNFT };
