import {
  Button, Container, Desc, Img, ImgContainer, Info, Left, Right, Title,
} from './style';

function IntroBook() {
  return (
    <Container>

      <Left>
        <Info>
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nobis natus inventore
            reiciendis cupiditate? Corrupti recusandae
            eaque perferendis ducimus eligendi. Beatae dicta itaque similique minus, sit eos
            repellat suscipit esse.
          </Desc>
          <Button>MORE</Button>

        </Info>
      </Left>

      <Right>
        <ImgContainer>
          <Img src="./images/solo/book.png" />
        </ImgContainer>
      </Right>

    </Container>
  );
}

export default IntroBook;
