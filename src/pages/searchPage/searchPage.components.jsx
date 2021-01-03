import React from 'react'
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';
import {SearchFormContainer, SearchPageContainer} from './searchPage.styles'
import {connect} from 'react-redux'
import {addMovies,updateSearch} from '../../redux/movies/movies.actions'
import {selectMoviesList,selectSearchField,selectNominationsCount} from '../../redux/movies/movies.selectors'
import {createStructuredSelector} from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component'
import 'antd/dist/antd.css';
import { Row, Col, Alert, Button} from 'antd';

    
  const SearchPage=({setMovies,movies,setSearchField, serachField, getNominationsCount})=>{

    const handleChange=async (e)=>{
      setSearchField(e.target.value);
      const url= `http://www.omdbapi.com/?i=tt3896198&apikey=e388dd12&s=${e.target.value}&type=movie`;
      const response= await fetch(url);
      const responseJson= await response.json();
      if(responseJson.Search){
      setMovies(responseJson.Search);
      }

    }

      return (
          <SearchPageContainer>
          {getNominationsCount>4?<Alert action={
        <Button size="small" warn>
          Open Nominations
        </Button>
      } message="You have selected the maximum allowed nominations, If you want to change your selections" banner />:null}
        <SearchFormContainer>
          <Form.Item
            name={'Search'}
            label="Search" >
            <Input onKeyDown={handleChange} onKeyUp={handleChange} defaultValue={serachField}/>
          </Form.Item>
        </SearchFormContainer>
        <Row gutter={[20, 60]}>
      {movies?movies.map(movie=><Col lg={6} md={6} sm={8} xs={22}><CollectionItem Key={movie.imdbID} item={movie}/></Col>):null}
     </Row>   
        </SearchPageContainer>
      );

}



const mapStateToProps = createStructuredSelector({
  movies: selectMoviesList,
  serachField: selectSearchField,
  getNominationsCount: selectNominationsCount
  })

const dispatchStateToProps=dispatch=>({
 setMovies:(movies)=> dispatch(addMovies(movies)),
 setSearchField:(serachString)=> dispatch(updateSearch(serachString))
})
   
export default connect(mapStateToProps, dispatchStateToProps)(SearchPage);