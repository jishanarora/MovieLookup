import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { CustomButtonContainer } from "../../components/custom-button/custom-button.styles";

export const HomePageContainer = styled.div`
  backgorund: #0c0c0c;
  margin-top: -70px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;

export const VideoContainer = styled.video`
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;
export const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px; 
}

@media screen and (max-width: 480px){
    font-size: 32px; 
}

@media screen and (max-width: 360px){
    font-size: 28px; 
`;
export const P = styled.p`
color: #fff;
font-size: 24px;
text-align: center;
margin-top: 24px;
max-width: 600px;


@media screen and (max-width: 768px){
    font-size: 24px; 
}

@media screen and (max-width: 480px){
    font-size: 18px; 
}

}
`;

export const ButtonWrap = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
  margin-top: 15px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
  margin-top: 15px;
`;
export const Button = styled(CustomButtonContainer)`
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
`;
