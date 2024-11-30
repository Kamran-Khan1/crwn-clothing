import React, { Component } from "react";
import { Shop_Data } from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collection: Shop_Data,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="shop-preview">
        {collection.map(({ id, ...Others }) => (
          <CollectionPreview key={id} {...Others} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
