import React,{useEffect,useState} from 'react'
import { getCategories } from '../services/index';
import Link from 'next/link'

const Categories = () => {
  const [categories,setCategories] = useState([]);
  
  useEffect(() =>{
    getCategories()
       .then((newCategories)=> setCategories(newCategories))
  },[]);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
    {categories && categories.map((category)=> (
      <Link className='cursor-pointer block mb-3 pb-3' key={category.slug} href={`/post/${category.slug}`}>
        <span className='cursor-pointer block mb-3 pb-3'>{category.name}</span></Link>
    ))}
    </div>
  )
}

export default Categories