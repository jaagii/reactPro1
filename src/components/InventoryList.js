import React from 'react';
import InventoryItem from './InventoryItem';
import inventoryData from '../data/inventory.json';

const InventoryList = () => {
  return (
    <div className="inventory-list">
      {inventoryData.map((item) => (
        <InventoryItem
          key={item.sku}
          sku={item.sku}
          name={item.name}
          qty={item.qty}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default InventoryList;
