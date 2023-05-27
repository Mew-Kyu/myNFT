import styled from "styled-components";
import { Card } from "components/Card";
import { PrimaryLayout } from "components/Layout";
import Banner from "components/Banner";
import { Creator } from "components/Creator";
import { Trending } from "components/Trending";

const Cover = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCenter = styled.div`
  width: 63%;
`;

const StyledRight = styled.div`
  max-width: 30%;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
`;

const Home = () => {
  return (
    <>
      <PrimaryLayout>
        <Cover>
          <StyledCenter>
            <Banner />
            <Trending />
          </StyledCenter>
          <StyledRight>
            <StyledCard>
              <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
              <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
              <Card title={"ROI"} content={"+14.02"} percent={-5.1}></Card>
              <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
            </StyledCard>
            <Creator />
          </StyledRight>
        </Cover>
      </PrimaryLayout>
    </>
  );
};

export default Home;
