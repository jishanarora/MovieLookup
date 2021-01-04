import React from 'react';
import {connect} from 'react-redux';
import { Tooltip, Modal } from 'antd';
import {AddButton,CollectionImage,CollectionItemContainer,CollectionFooterContainer,NameContainer,YearContainer, Message} from './collection-item.styles'
import {addNomination} from '../../redux/movies/movies.actions'
import {selectNominationsCount} from '../../redux/movies/movies.selectors'
import {openNominations} from '../../redux/sidebar/sidebar.actions'
import {createStructuredSelector} from 'reselect';
const CollectionItem = ({item,addNomination, getNominationsCount, openModal})=>
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

  const handleOnclick=()=>{
    if(getNominationsCount>4)
    {
     openModal();
    }
    else{
      addNomination(item); countDown();
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
            {getNominationsCount>4?<Message>Can't choose more than 5!</Message>: null}
         <AddButton inverted onClick={handleOnclick}>{getNominationsCount>4?'Go to Nominations':'Nominate'}</AddButton>
        </CollectionItemContainer>
        </Tooltip>
    )
}

const dispatchStateToProps= dispatch=>({
 addNomination:(movie)=> dispatch(addNomination(movie)),
 openModal: ()=> dispatch(openNominations())
})

const mapStateToProps= createStructuredSelector({
    getNominationsCount: selectNominationsCount,
})

export default connect(mapStateToProps, dispatchStateToProps)(CollectionItem);