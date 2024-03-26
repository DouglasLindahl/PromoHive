'use client'
import { useEffect, useState } from 'react'
import supabase from '../../../supabase'
import { styled } from 'styled-components'
import Card from '@/components/card/page'
import { capitalizeFirstLetter } from '@/utils/utils'

interface ICategory {
  category: string
  color: string
  icon: string
}

const StyledCategoriesPage = styled.section`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[]>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (loading) {
      if (categories) {
        setLoading(false)
      }
    }
  }, [categories])

  useEffect(() => {
    async function getCategories() {
      const { data, error } = await supabase.from('categories').select()
      if (data) {
        setCategories(data)
      }
    }
    getCategories()
  }, [])

  if (loading) {
    return <>Loading...</>
  }
  return (
    <StyledCategoriesPage>
      {categories &&
        categories.map((category, index) => (
          <Card
            link={`categories/${category.category}`}
            key={index}
            color={category.color}
            text={capitalizeFirstLetter(category.category)}
            image={category.icon}
          />
        ))}
    </StyledCategoriesPage>
  )
}
