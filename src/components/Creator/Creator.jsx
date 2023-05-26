import { styled } from "styled-components";
import top1 from "assets/top/top1.svg";
import top2 from "assets/top/top2.svg";
import top3 from "assets/top/top3.svg";
import top4 from "assets/top/top4.svg";
import top5 from "assets/top/top5.svg";
import top6 from "assets/top/top6.svg";
import { Button } from "components/Button";

const fakeData = [
  {
    pic: top1,
    name: "Michael Jordan",
    ninkname: "@jordan_",
    button: (
      <Button
        width={77}
        height={32}
        textColor={"#5429FF"}
        bgColor={"background: rgba(84, 41, 255, 0.1)"}
        fontSize={12}
        radius={20}
      >
        Follow
      </Button>
    ),
  },
  {
    pic: top2,
    name: "John Tibao",
    ninkname: "@johnti60",
    button: (
      <Button
        width={77}
        height={32}
        textColor={"#fff"}
        bgColor={"#5429FF"}
        fontSize={12}
        radius={20}
      >
        Following
      </Button>
    ),
  },
  {
    pic: top3,
    name: "Teressa",
    ninkname: "@teressa",
    button: (
      <Button
        width={77}
        height={32}
        textColor={"#5429FF"}
        bgColor={"background: rgba(84, 41, 255, 0.1)"}
        fontSize={12}
        radius={20}
      >
        Follow
      </Button>
    ),
  },
  {
    pic: top4,
    name: "Johan Hawn",
    ninkname: "@j_hawn",
    button: (
      <Button
        width={77}
        height={32}
        textColor={"#5429FF"}
        bgColor={"background: rgba(84, 41, 255, 0.1)"}
        fontSize={12}
        radius={20}
      >
        Follow
      </Button>
    ),
  },
  {
    pic: top5,
    name: "Maria Alisson",
    ninkname: "@m_alisson",
    button: (
      <Button
        width={77}
        height={32}
        textColor={"#5429FF"}
        bgColor={"background: rgba(84, 41, 255, 0.1)"}
        fontSize={12}
        radius={20}
      >
        Follow
      </Button>
    ),
  },
  {
    pic: top6,
    name: "Sam Erricson",
    ninkname: "@erricsonsam",
    button: (
      <Button
        width={77}
        height={32}
        textColor={"#5429FF"}
        bgColor={"background: rgba(84, 41, 255, 0.1)"}
        fontSize={12}
        radius={20}
      >
        Follow
      </Button>
    ),
  },
];

const Top = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  span {
    font-weight: 700;
    font-size: 16px;
    color: #27262e;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #27262e;
  }
  .all {
    cursor: pointer;
    color: #747475;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }
`;
const TopCre = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 30%;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    color: #27262e;
    line-height: 0;
  }
  .nick {
    font-weight: 400;
    font-size: 12px;
    line-height: 0;
    color: #747475;
  }
`;

const Creator = () => {
  return (
    <Top>
      <div className="title">
        <p className="top">Top Creator</p>
        <p className="all">See All</p>
      </div>
      {fakeData.map((item, index) => (
        <TopCre>
          <span>{index + 1}.</span>
          <img src={item.pic} alt="Avatar" />
          <div>
            <p className="name">{item.name}</p>
            <p className="nick">{item.ninkname}</p>
          </div>
          {item.button}
        </TopCre>
      ))}
    </Top>
  );
};

export default Creator;
