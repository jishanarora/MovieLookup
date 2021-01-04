import styled from 'styled-components'

export const NominationItem=styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
align-items: center;
`

export const ImageContainer=styled.div`
width: 40%;
      padding-right: 15px;
  
      img {
        width: 100%;
        height: 100%;
      }
`

export const TitleContainer=styled.span`
width: 40%;
`


export const RemoveButton=styled.div`
padding-left: 25px;
cursor: pointer;
`