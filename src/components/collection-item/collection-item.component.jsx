import React from 'react';
import {connect} from 'react-redux';
import { Tooltip, Modal } from 'antd';
import {AddButton,CollectionImage,CollectionItemContainer,CollectionFooterContainer,NameContainer,YearContainer} from './collection-item.styles'
import {addNomination} from '../../redux/movies/movies.actions'
import {selectNominationsCount,selectIfNominated} from '../../redux/movies/movies.selectors'
import {createStructuredSelector} from 'reselect';

const CollectionItem = ({item,addNomination, getNominationsCount})=>
{ const {Poster,Title, Year}= item;
  const noImage='../images/noImageAvailable.jpeg'

  const countDown=()=> {
    if(getNominationsCount>3)
    {
    let secondsToGo = 3;
    const modal = Modal.success({
      title: 'You have selected the maximum nominations',
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
}
  }

    return(
        <Tooltip title={Title}>
        <CollectionItemContainer>
             <CollectionImage className='image' imageUrl={Poster==='N/A'? noImage:Poster} />
             <CollectionFooterContainer>
                <NameContainer>{Title.length>20?Title.substring(0,20)+'...': Title}</NameContainer>
                <YearContainer>Year: {Year}</YearContainer>
            </CollectionFooterContainer>
         <AddButton inverted onClick={()=>{addNomination(item); countDown();}} disabled={getNominationsCount>4}>{getNominationsCount>4?'Limit Reached':'Nominate'}</AddButton>
        </CollectionItemContainer>
        </Tooltip>
    )
}

const dispatchStateToProps= dispatch=>({
 addNomination:(movie)=> dispatch(addNomination(movie))
})

const mapStateToProps= createStructuredSelector({
    getNominationsCount: selectNominationsCount
})

export default connect(mapStateToProps, dispatchStateToProps)(CollectionItem);