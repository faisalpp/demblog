import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import {BsCalendar2} from 'react-icons/bs'

//accept post as prop
const PostCard = ({ post}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
       <img
          src={post.featuredimage.url} 
           alt={post.title} 
           className='object-top absolute h-80 w-full object-cover shodow-lg rounded-t-lg lg:rounded-lg'/>
      </div>
      <span className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold '>
      <Link href={`/post/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      </span>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full '>
       <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
        <Image className='align-middle roudned-full' src={post.author.photo.url} alt={post.author.name} height={30} width={30}/>
        <p className='inline align-middle text-gray-700 ml-2 text-lg' >{post.author.name} </p>
        <div className='flex items-center ml-2'><BsCalendar2 className='font-medium text-pink-800 ml-2'/>
        <span className='ml-2'>{moment(post.createdAt).format('MM DD, YYYY')}</span>
        </div>
       </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-4'>{post.excerpt}</p> 
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard