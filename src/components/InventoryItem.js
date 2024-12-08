import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({ sku, name, qty, price }) => {
  return (
    <Link to={`/product/${sku}`} className="inventory-item">
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
    </Link>
  );
};

export default InventoryItem;
