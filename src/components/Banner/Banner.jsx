import { Button } from "components/Button";
import { styled } from "styled-components";
import banner from "assets/banner.svg";

const BgBanner = styled.div`
  background: url(${banner});
  min-height: 354px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  padding: 60px;
  p {
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  div {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
`;

const Banner = () => {
  return (
    <BgBanner>
      <p>Discover, Create and Sell Your Own NFT.</p>
      <div>
        <Button
          radius={40}
          width={128}
          height={46}
          textColor="#5429FF;"
          bgColor="#FFF"
          fontSize={16}
          fontWeight={700}
        >
          Discover
        </Button>
        <Button
          radius={40}
          borderColor={"white"}
          width={113}
          height={46}
          textColor="white"
          bgColor="none"
          fontSize={16}
          fontWeight={700}
        >
          Create
        </Button>
      </div>
    </BgBanner>
  );
};

export default Banner;
