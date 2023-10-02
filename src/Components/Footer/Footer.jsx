import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import {
  Container, IconContainer, Img, ImgContainer, Info, InfoRight, Left, Links, Right, Title,
} from './style';

function Footer() {
  return (
    <Container>
      <Left>
        <Info>
          <Title>Social midia</Title>
          <IconContainer>
            <FaFacebook className="icon" />
            <FaXTwitter className="icon" />
            <AiOutlineInstagram className="icon" />
            <BsPinterest className="icon" />
          </IconContainer>
        </Info>
      </Left>

      <Right>
        <InfoRight>
          <Title>Buy my a coffe</Title>
          <Links>Donate</Links>
          <ImgContainer>
            <Img src="./images/solo/footer.png" />
          </ImgContainer>
        </InfoRight>
      </Right>
    </Container>
  );
}

export default Footer;
