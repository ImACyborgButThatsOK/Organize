import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./images/9.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Bg = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 20px;

  transition: all ease 0.5s ;
  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  color: white;

  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Info = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const Title = styled.div`
  font-size: 60px;
  color: #FBBE28;
  font-weight: bold;
`;
export const Desc = styled.div`

  font-size: 30px;
  color: silver;
  font-weight: 300;
`;
export const Button = styled.button`

  margin: 0 auto;

  width:  40%;
  height: 45px;
  font-size: 25px;
  font-weight: bold;
  color: #FBBE28;
  background-color: transparent;
  border: 1px solid #FBBE28;
  transition: all ease 0.5s ;
  &:hover{
    cursor: pointer;
    filter: brightness(0.5);
  }
`;
