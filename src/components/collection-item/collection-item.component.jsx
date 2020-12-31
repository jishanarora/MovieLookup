import React from 'react';
import {connect} from 'react-redux';
import {AddButton,CollectionImage,CollectionItemContainer,CollectionFooterContainer,NameContainer,PriceContainer} from './collection-item.styles'

const CollectionItem = ({item})=>
{ const {name,price,imageUrl}= item;
    return(
        <CollectionItemContainer>
             <CollectionImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
         <AddButton inverted className="collectionButton">Add to cart</AddButton>
        </CollectionItemContainer>
    )
}

export default connect()(CollectionItem);