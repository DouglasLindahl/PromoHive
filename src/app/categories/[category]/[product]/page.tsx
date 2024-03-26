'use client'
import { useEffect, useState } from 'react'
import { IProduct } from '@/app/categories/[category]/page'
import supabase from '../../../../../supabase'
import styled from 'styled-components'
import Card from '@/components/card/page'

const StyledProductPage = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`

const Product = (currentProductId: any) => {
  const [product, setProduct] = useState<IProduct>()
  const [productId, setProductId] = useState<number>()
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

  return (
    <StyledProductPage>
      <Card color="white" image="gym.png" link="/" text="Computer" />
    </StyledProductPage>
  )
}

export default Product
