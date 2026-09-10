

import React, { use } from 'react'
import CategoryComponent from './CategoryComponent'
import { CategoryInter } from './CategoryComponent'

export default function CategoryListcomponent({
    category }: {
        category : Promise<CategoryInter[]>
    }

) {
    const categories = use(category);
  return (
    <div>
      {
        categories.map(({name,image,id}) => (
            <CategoryComponent
            key={id}
            image={image}
            name={name}
            id={id}
            />
        ))
      }
    </div>
  )
}
