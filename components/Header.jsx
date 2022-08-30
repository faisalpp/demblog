import React, {useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  
  const [category,setCategory] = useState([]);
  const [isOpen,setIsOpen] = useState(false);
  
  useEffect(() => {
    getCategories().then((categories)=> setCategory(categories))
  }, []);
  return (
     <div className='container mx-auto px-10 mb-4'>
     <div className=' grid grid-cols-8 w-full  border-blue-400 py-8'>
       <div className='md:float-left block'>
        <Link href={'/'}>
          <h3 className='cursor-pointer font-bold text-4xl text-white'>
            DemBlog
          </h3>
        </Link>
       </div>
        <div className='flex text-sm col-start-6 col-end-8 mt-2 items-center space-x-5 text-white font-bold cursor-pointer'>
        <Link href={'/'}><h3>Home</h3></Link>
        <h3 onMouseOver={()=> setIsOpen(!isOpen)} >Categories</h3>
        <Link href={'/About'}><h3>About</h3></Link>
        <Link href={'/Contact'}><h3>Contact</h3></Link>
        </div>  
     </div>
     <div className='flex flex-row-reverse mr-40 -mt-5 z-10'>
     {isOpen && <div onMouseLeave={()=> setIsOpen(!isOpen)} className='flex absolute z-10 container flex-col bg-white w-44 h-auto p-2 text-sm items-center rounded-md'>
        {category.map((category) => <a src={category.slug}><h3 className='hover:text-blue-100 mt-2 cursor-pointer'>{category.name}</h3></a>)}
     </div>}
     </div>
    </div>
  )
}

export default Header