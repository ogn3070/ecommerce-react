import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {

  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err))

  }, [])

  return (
    <div>
      <img src={product?.image} alt=''/>
      <h4>{product?.title}</h4>
      <h4>{product?.description}</h4>
      <h4>{product?.price}</h4>
      <h4>{product?.rating?.rate}</h4>
      <h4>{product?.rating?.count}</h4>
      
    </div>
  )
}

export default DetailPage