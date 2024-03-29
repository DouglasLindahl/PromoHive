'use client'
import { useEffect, useState } from 'react'
import supabase from '../../../../supabase'
import styled from 'styled-components'
import Card from '@/components/card/page'
import { capitalizeFirstLetter } from '@/utils/utils'

export interface IProduct {
  id: number
  product: string
  category: string
  image: string
  displayName: string
  link: string
  text: string
  price: number
}

const StyledProductPage = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`

const Category = (currentCategory: any) => {
  const [category, setCategory] = useState<string>('')
  const [products, setProducts] = useState<IProduct[]>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (loading) {
      if (products) {
        setLoading(false)
      }
    }
  }, [products])

  useEffect(() => {
    const setCurrentCategory = async () => {
      const data = currentCategory.params.category
      setCategory(data)
    }
    setCurrentCategory()
  }, [currentCategory])

  useEffect(() => {
    const getProducts = async () => {
      if (category) {
        const { data, error } = await supabase
          .from('products')
          .select()
          .eq('category', category)
        if (data) {
          setProducts(data)
        }
      }
    }
    getProducts()
  }, [category])
  if (loading) {
    return <>Loading...</>
  }
  return (
    <StyledProductPage>
      {products &&
        products.map((product, index) => (
          <Card
            color="white"
            key={index}
            text={capitalizeFirstLetter(product.displayName)}
            image={product.image}
            link={`categories/${category}/${product.id}`}
            fullImage
          />
        ))}
    </StyledProductPage>
  )
}
export default Category
