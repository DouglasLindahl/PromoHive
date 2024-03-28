'use client'
import { useEffect, useState } from 'react'
import { IProduct } from '@/app/categories/[category]/page'
import supabase from '../../../../../supabase'
import styled from 'styled-components'

const StyledProductPage = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`

const ProductImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
`
//

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const ProductTitle = styled.h2`
  font-size: 24px;
`

const ProductCategory = styled.p`
  font-size: 18px;
  color: #666;
`

const ProductLink = styled.a`
  font-size: 24px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
`
const ProductText = styled.p`
  width: 50%;
`

const Product = (currentProductId: any) => {
  const [product, setProduct] = useState<IProduct>()
  const [productId, setProductId] = useState<number>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (loading) {
      if (product) {
        setLoading(false)
      }
    }
  }, [product])

  useEffect(() => {
    const setCurrentProductId = async () => {
      const data = currentProductId.params.product
      console.log(data)
      setProductId(data)
    }
    setCurrentProductId()
  }, [currentProductId])

  useEffect(() => {
    const getProduct = async () => {
      if (productId) {
        const { data, error } = await supabase
          .from('products')
          .select()
          .eq('id', productId)
          .single()
        if (data) {
          setProduct(data)
        }
      }
    }
    getProduct()
  }, [productId])

  console.log(product)
  if (loading) {
    return <>Loading...</>
  }
  if (product) {
    return (
      <StyledProductPage>
        <ProductDetails>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductImage src={product.image} alt={product.displayName} />
          <ProductTitle>{product.displayName}</ProductTitle>
          <ProductLink href={product.link}>Buy Now (Amazon)</ProductLink>
          <ProductText>{product.text}</ProductText>
        </ProductDetails>
      </StyledProductPage>
    )
  }
}

export default Product
