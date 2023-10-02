import {
  Bg,
  Button, Container, Desc, Img, ImgContainer, Info, Left, Right, Title,
} from './style';

function IntroMusic() {
  return (
    <Container>
      <Left>
        <ImgContainer>
          <Bg>
            <Img src="./images/solo/disc.png" />
          </Bg>
        </ImgContainer>
      </Left>
      <Right>
        <Info>
          <Title>Lorem ipsum dolor sit.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere obcaecati repellat a quam. Recusandae eius placeat
            perferendis voluptates suscipit minima rem iusto cumque!
            Repudiandae assumenda molestias fuga tenetur, id aliquam?

          </Desc>
          <Button>MORE</Button>
        </Info>
      </Right>
    </Container>
  );
}

export default IntroMusic;
