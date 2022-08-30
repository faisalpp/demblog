import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Link from 'next/link'

const CategoryCard = ({post}) => {
  return (
        <div className='container bg-white w-72 h-min rounded-lg mb-10'>
          <img className='h-56 w-72 rounded-t-lg' src={post.featuredimage.url} />
          <div className='mt-5 ml-5'>               
            <h3 className='text-gray-600 text-sm'>{post.categories.name}</h3>
            <h3 className='text-black font-bold mt-2'>{post.title}</h3>
            <p className=' text-black font-sans w-60 h-20 mt-2'>{post.excerpt}</p>
          </div>
          <div className='flex items-center space-x-1 ml-5 text-blue-500 mb-5 hover:text-pink-600 cursor-pointer'>
            <Link href={`/post/${post.slug}`}>Learn More</Link><AiOutlineArrowRight/>
          </div>
        </div>
  )
}

export default CategoryCard