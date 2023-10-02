import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./images/6.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
`;

export const Right = styled.div`
  flex: 1;
`;

export const Info = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size:  60px;
  color: #F39200;
`;

export const Desc = styled.p`
  font-size: 30px;
  font-weight: 300;
  color: silver;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 25%;
  height: 50px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #F39200;
  color: white;
  font-weight: bolder;
  font-size: 25px;
  transition: all ease 0.5s;

  &:hover{
    cursor: pointer;
    filter: brightness(0.5);
  }

`;
