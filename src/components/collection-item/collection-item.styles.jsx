import styled from 'styled-components'
import {CustomButtonContainer} from '../custom-button/custom-button.styles'

export const CollectionItemContainer=styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 238px;
align-items: center;
position: relative;

&:hover{
    .image{
        opacity: 0.8 ;
    }

    button{
        opacity: 0.85 !important;
        display: flex;
    }
}

@media screen and (max-width: 768px){
  width: 30vw;
}

@media screen and (max-width: 570px){
  width: 80vw;
}

`

export const AddButton=styled(CustomButtonContainer)`
width: 70%;
opacity: 0.7;
position: absolute;
top: 150px;
display: none;
`
export const CollectionImage = styled.div`
width: 100%;
height: 95%;
background-size: cover;
background-position: center;
margin-bottom: 5px;
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

export const NameContainer = styled.span`
  width: 60%;
  margin-bottom: 15px;
  font-size: 15px;
`;

export const YearContainer = styled.span`
  width: 40%;
  text-align: right;
  font-size: 15px;
`;