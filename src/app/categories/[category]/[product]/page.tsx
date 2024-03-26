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

  if (loading) {
    return <>Loading...</>
  }
  if (product) {
    return (
      <StyledProductPage>
        <Card
          color="orange"
          image={product?.image}
          link="/"
          text="Buy Product (Amazon)"
        />
      </StyledProductPage>
    )
  }
}

export default Product
