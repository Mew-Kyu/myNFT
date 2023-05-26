import { Button } from "components/Button";
import { styled } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "assets/banner.svg";

const TextBanner = styled.p`
  font-weight: 700;
  font-size: 54px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: start;
`;
const ButtonBanner = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
const BgBanner1 = styled.div`
  background: url(${banner});
  min-height: 354px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  padding: 60px;
`;
const BgBanner2 = styled.div`
  background: rgb(174, 154, 255);
  background: linear-gradient(
    100deg,
    rgba(174, 154, 255, 1) 16%,
    rgba(84, 41, 255, 1) 98%
  );
  min-height: 354px;
  background-size: cover;
  border-radius: 12px;
  padding: 60px;
`;
const BgBanner3 = styled.div`
  background: rgb(174, 154, 255);
  background: radial-gradient(
    circle,
    rgba(174, 154, 255, 1) 48%,
    rgba(84, 41, 255, 1) 100%
  );
  min-height: 354px;
  background-size: cover;
  border-radius: 12px;
  padding: 60px;
`;

const Banner = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} interval={3000}>
      <BgBanner1>
        <TextBanner>Discover, Create and Sell Your Own NFT.</TextBanner>
        <ButtonBanner>
          <Button
            radius={40}
            width={128}
            height={46}
            textColor="#5429FF"
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
            bgColor="transparent"
            fontSize={16}
            fontWeight={700}
          >
            Create
          </Button>
        </ButtonBanner>
      </BgBanner1>
      <BgBanner2>
        <TextBanner>Discover, Create and Sell Your Own NFT.</TextBanner>
        <ButtonBanner>
          <Button
            radius={40}
            width={128}
            height={46}
            textColor="#AE9AFF"
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
            bgColor="transparent"
            fontSize={16}
            fontWeight={700}
          >
            Create
          </Button>
        </ButtonBanner>
      </BgBanner2>
      <BgBanner3>
        <TextBanner>Discover, Create and Sell Your Own NFT.</TextBanner>
        <ButtonBanner>
          <Button
            radius={40}
            width={128}
            height={46}
            textColor="#5429FF"
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
            bgColor="transparent"
            fontSize={16}
            fontWeight={700}
          >
            Create
          </Button>
        </ButtonBanner>
      </BgBanner3>
    </Carousel>
  );
};

export default Banner;
