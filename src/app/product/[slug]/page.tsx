'use client'
import { useEffect, useState } from 'react'
import supabase from '../../../../supabase'
import { IProduct } from '@/app/categories/[category]/page'

const Slug = (currentProductId: any) => {
  const [product, setProduct] = useState<IProduct>()
  const [productId, setProductId] = useState<number>()
  useEffect(() => {
    const setCurrentProductId = async () => {
      const data = currentProductId.params.slug
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
}

export default Slug
