import React from 'react'
import {createStructuredSelector} from 'reselect'
import {selectCollectionItemsData} from '../../redux/collection-items/collection-items.selectors'
import {connect} from 'react-redux'
import CollectionsPreview from '../collections-preview/collections-preview.component'
import './collections-overview.styles.scss'

const CollectionOverview =({collections})=>(
    <div className="collections-overview">
    {
    collections.map(({id, ...otherProps})=>(
        <CollectionsPreview key={id} {...otherProps} />
    ))
    }
</div>  
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionItemsData
})

export default connect(mapStateToProps,null)(CollectionOverview);