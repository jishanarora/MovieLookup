import React, { useState } from 'react'
import { Form, Input, Result} from 'antd';
import 'antd/dist/antd.css';
import {SearchFormContainer, SearchPageContainer, NominationsHeader, NominationsHeaderBlock} from './searchPage.styles'
import {connect} from 'react-redux'
import {addMovies,updateSearch, emptyMovies} from '../../redux/movies/movies.actions'
import {selectMoviesList,selectSearchField,selectNominationsCount, selectNominationsList} from '../../redux/movies/movies.selectors'
import {createStructuredSelector} from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component'
import 'antd/dist/antd.css';
import { Row, Col, Alert, Button, Modal} from 'antd';
import NominationItems from '../../components/nomination-items/nomination-items.component'
import {openNominations, closeNominations} from '../../redux/sidebar/sidebar.actions'
import {selectShowNominations} from '../../redux/sidebar/sidebar.selectors'
import {LoadingOutlined,SmileOutlined} from '@ant-design/icons';
    
  const SearchPage=({setMovies,movies,setSearchField, serachField, getNominationsCount, nominations,emptyMovies, openModal,closeModal,showModal})=>{
    
    const [loading,setLoading]=useState(false);

    const handleChange=async (e)=>{
      setLoading(true);
      setSearchField(e.target.value);
      const url= `http://www.omdbapi.com/?i=tt3896198&apikey=e388dd12&s=${(e.target.value).trim()}&type=movie`;
      fetch(url).then(response=>response.json()).then((responseJson)=>{ setLoading(false);
        if(responseJson.Search){
        setMovies(responseJson.Search);
        }
        else{
        emptyMovies();
        }
  })

    }

      return (
      <SearchPageContainer>
        <Modal title="Nominations" visible={showModal} onOk={closeModal}>
        <NominationsHeader>
      <NominationsHeaderBlock>
        <span>Movie</span>
      </NominationsHeaderBlock>
      <NominationsHeaderBlock>
        <span>Title</span>
      </NominationsHeaderBlock>
      <NominationsHeaderBlock>
        <span>Remove</span>
      </NominationsHeaderBlock>
    </NominationsHeader>
    {nominations.length>0?(nominations.map(nomination => (
      <NominationItems key={nomination.id} movie={nomination} />
    ))):<div> Search for awesome movies!</div>}
      </Modal>
          {getNominationsCount>4?<Alert action={
        <Button size="small" onClick={openModal}>
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
      {loading?<LoadingOutlined style={{fontSize:"100px", position:'absolute', top:'50%', left:'50%', margin: '-25px 0 0 -25px'}}/>:
      <Row gutter={[20, 60]}>
      {movies?movies.map(movie=><Col lg={6} md={6} sm={8} xs={22}><CollectionItem Key={movie.imdbID} item={movie}/></Col>):null}
     </Row>   
      }
      {
       movies.length===0?<Result
       icon={<SmileOutlined />}
       title="Try refining search"
       style={{marginTop:'10%'}}
     />: null 
      }
        </SearchPageContainer>
      );

}



const mapStateToProps = createStructuredSelector({
  movies: selectMoviesList,
  serachField: selectSearchField,
  getNominationsCount: selectNominationsCount,
  nominations: selectNominationsList,
  showModal: selectShowNominations
  })

const dispatchStateToProps=dispatch=>({
 setMovies:(movies)=> dispatch(addMovies(movies)),
 setSearchField:(serachString)=> dispatch(updateSearch(serachString)),
 emptyMovies:()=> dispatch(emptyMovies()),
 openModal: ()=> dispatch(openNominations()),
 closeModal: ()=> dispatch(closeNominations())

})
   
export default connect(mapStateToProps, dispatchStateToProps)(SearchPage);