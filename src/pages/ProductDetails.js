import React from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

const ProductDetails = () => {
  // get product from url
  const {id} = useParams();
  const {AddToCart} = useContext(CartContext);
  // the item
  const {products} = useContext(ProductContext);
  // change id to integer
  const idNumber = parseInt(id)
  // get the single product based on id
  const product = products.find(item => {
    return item.id === idNumber;
  })
  console.log(products);

  // if product not found
  if (!product) {
    <section className='h-screen flex justify-center items-center'>Loading...</section>
  }

  // destructuring product
const {title, image, description, price} = product;
  return <section className='h-auto pt-32 pb-12 lg:py-40'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
      {/* image */}
      <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
        <img src={image} alt="image product" className='max-w-[200px] lg:max-w-sm' />
      </div>
      {/* text */}
      <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
        <p className="text-xl font-medium mb-6">$ {price}</p>
        <p className='mb-8'>{description}</p>
        <button className='bg-primary py-4 px-8 text-white' onClick={()=>AddToCart(id, product)}>Add to Cart</button>
      </div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
