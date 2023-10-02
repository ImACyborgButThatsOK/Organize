import {
  Bg,
  Button, Container, Content, Desc, Img, ImgContainer, Info, Left, Right, Title,
} from './style';

function IntroTask() {
  return (
    <Container>
      <Left>
        <ImgContainer>
          <Bg>
            <Content />
            <Img src="./images/solo/SLP.jpg" />
          </Bg>
        </ImgContainer>
      </Left>
      <Right>
        <Info>
          <Title>Lorem ipsum dolor sit.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quam, assumenda ab laborum est atque eligendi dolorum
            autem ipsa debitis laudantium maiores? Eligendi
            id magnam obcaecati iure quaerat minus explicabo soluta!
          </Desc>
          <Button>MORE</Button>
        </Info>
      </Right>
    </Container>
  );
}

export default IntroTask;
