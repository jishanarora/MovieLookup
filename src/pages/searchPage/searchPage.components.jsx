import React from 'react'
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';
import {SearchFormContainer, SearchPageContainer} from './searchPage.styles'


const SearchPage=()=>{
    
      return (
          <SearchPageContainer>
        <SearchFormContainer>
          <Form.Item
            name={'Search'}
            label="Search" >
            <Input />
          </Form.Item>
        </SearchFormContainer>
        </SearchPageContainer>
      );

}
   
export default SearchPage;