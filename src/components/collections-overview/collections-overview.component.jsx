import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collections-preview/collections-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionsProps }) => {
				return <CollectionPreview key={id} {...otherCollectionsProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
