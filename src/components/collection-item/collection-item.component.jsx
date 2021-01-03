import React from 'react';
import {connect} from 'react-redux';
import { Tooltip } from 'antd';
import {AddButton,CollectionImage,CollectionItemContainer,CollectionFooterContainer,NameContainer,YearContainer} from './collection-item.styles'

const CollectionItem = ({item})=>
{ const {Poster,Title, Year}= item;
  const noImage='../images/noImageAvailable.jpeg'
    return(
        <Tooltip title={Title}>
        <CollectionItemContainer>
             <CollectionImage className='image' imageUrl={Poster==='N/A'? noImage:Poster} />
             <CollectionFooterContainer>
                <NameContainer>{Title.length>20?Title.substring(0,20)+'...': Title}</NameContainer>
                <YearContainer>Year: {Year}</YearContainer>
            </CollectionFooterContainer>
         <AddButton inverted>Nominate</AddButton>
        </CollectionItemContainer>
        </Tooltip>
    )
}

export default connect()(CollectionItem);