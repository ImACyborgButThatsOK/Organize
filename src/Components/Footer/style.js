import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid silver;
  width: 100%;
  height: 70vh;
  background-color: black;
  display: flex;
  color: white;
`;

export const Title = styled.h3`
  font-size: 60px;
  text-align: center;
  font-weight: 300;
`;
export const Links = styled.a`
  border: 1px solid #F39200;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  transition: all ease 0.5s;
  &:hover{
    cursor: pointer;
    filter: brightness(0.5);
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const Info = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 40px;

  .icon{
    transition: all ease 0.5s;
  &:hover{
    cursor: pointer;
    filter: brightness(0.5);
  }
  }
`;

export const Right = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
`;
export const InfoRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const ImgContainer = styled.div``;

export const Img = styled.img``;
