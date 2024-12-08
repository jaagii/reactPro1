import React from 'react';
import { useParams, Link } from 'react-router-dom';
import inventoryData from '../data/inventory.json';
import './ProductDetail.css'; // Import the CSS file

const ProductDetail = () => {
  const { sku } = useParams();
  const product = inventoryData.find((item) => item.sku === sku);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>SKU:</strong> {product.sku}</p>
      <p><strong>Quantity:</strong> {product.qty}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ProductDetail;

