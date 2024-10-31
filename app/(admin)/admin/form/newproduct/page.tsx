import ProductForm from '@/components/forms/productform'
import { TypographyH2 } from '@/components/typography/h2'
import React from 'react'

const page =  () => {
  return (
    <section className=' flex flex-col  md:items-center p-8 md:p-12'>
      <TypographyH2 className='mb-5'>
        Create A New Product
      </TypographyH2>
      <ProductForm/>
    </section>
  )
}

export default page
