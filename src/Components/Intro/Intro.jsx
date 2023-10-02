import {
  Button, Container, Desc, Img, ImgContainer, Info, Left, Right, Title,
} from './style';

function Intro() {
  return (
    <Container>
      <Left>
        <ImgContainer>
          <Img src="./images/solo/SM.jpg" />
        </ImgContainer>
      </Left>
      <Right>
        <Info>
          <Title>Lorem ipsum dolor sit.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam voluptates ipsa quisquam, esse alias consectetur aliquam
            iusto iste tenetur cupiditate nam! Esse illum molestiae error doloremque
            id voluptas inventore tempora?
          </Desc>
          <Button>MORE</Button>
        </Info>
      </Right>

    </Container>
  );
}

export default Intro;
