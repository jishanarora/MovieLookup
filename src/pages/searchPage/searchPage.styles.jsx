import styled from 'styled-components'
import { Form} from 'antd';

export const SearchFormContainer= styled(Form)`
margin: auto;
width: 50%;
padding: 10px;
margin-top: 40px; 
`

export const SearchPageContainer= styled.div`
margin: 20px;
`

export const NominationsHeader= styled.div`
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgray;
`

export const NominationsHeaderBlock= styled.div`
text-transform: capitalize;
width: 40%;
font-weight: bold;

&:last-child{
    width: 20%;
}
`