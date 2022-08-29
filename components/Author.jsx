import React from 'react'

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg' style={{'backgroundColor':'rgba(0,0,0,0.5)'}}>
      <div className='flex justify-center -top-14'> 
       <img
         alt={author.name}
         height='100px'
         width='100px'
         className="rounded-full"
         src={author.photo.url}
       />
       </div>
       <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
       <p className='text-white text-lg' >{author.bio}</p>
    </div>
  )
}

export default Author