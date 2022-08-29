import React,{useState,useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { getCategories } from '../services';
import {IoIosArrowBack} from 'react-icons/io'

const MHeader = () => {
 const [category,setCategory] = useState([]);
 const [isOpen,setIsOpen] = useState(false);

 useEffect(() => {
    getCategories().then((categories)=> setCategory(categories))
}, []);

 return (
    <div>
    <div className='grid grid-cols-16 mb-5 mt-5'>
      <div className='flex bg-white justify-center items-center col-end-1 w-12 rounded-md ml-2 '>
      <IoIosArrowBack className='text-3xl text-pink-500'/>
      </div>
      <div className='grid col-start-2 col-end-16 grid-cols-4 p-5 items-center bg-white border rounded-lg w-80'>
      <h3 className='text-xl font-bold'>DemBlog</h3>
      <AiOutlineMenu onClick={()=> setIsOpen(!isOpen)} className='col-start-8 col-end-8 text-3xl text-pink-500'/>
      </div>
    </div>
    {isOpen && <div className='flex flex-row-reverse mr-5 '>
    <div className='flex flex-col items-center -mt-5 p-5 bg-white w-64 h-auto absolute rounded-b-md z-10'>
    <h3 className='text-xl mb-2 mt-2'>Home</h3>
    {category.map((category)=> <h3 className='text-xl mb-2 mt-2'>{category.name}</h3>)}
    <h3 className='text-xl mb-2 mt-2' >Contact</h3>
    </div>
    </div>}
    </div>
  )
}

export default MHeader