import React from 'react'
import Image from 'next/image'
import { BsCalendar2 } from 'react-icons/bs'
import moment from 'moment'

const PostDetails = ({post}) => {
 
const getContentFragment = (index, text, obj, type) => {
 
  let modifiedText = text
  if(obj){
    if (obj.bold){
    modifiedText = (<b key={index}>{text}</b>);
  }
  if (obj.italic) {
    modifiedText = (<em key={index}>{text}</em>)
  }
  if (obj.underline) {
    modifiedText = (<u key={index}>{text}</u>)
  }
}

switch (type) {
  case 'heading-three':
    return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
  case 'paragraph':
    return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
  case 'heading-four':
    return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
  case 'image':
    return (
      <img
        key={index}
        alt={obj.title}
        height={obj.height}
        width={obj.width}
        src={obj.src}
      />
    );
  default:
    return modifiedText;
}
}; 


  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
     <div className='relative overflow-hidden shadow-md mb-6'>
      <img
         src={post.featuredimage.url}
         alt={post.title}
         className='object-top h-full w-full rounded-t-lg'
      />
     </div>
     <div className='px-4 lg:px-0'>
       <div className='flex items-center mb-8 w-full'>
       <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
        <Image className='align-middle roudned-full' src={post.author.photo.url} height={30} width={30}/>
        <p className='inline align-middle text-gray-700 ml-2 text-lg' >{post.author.name}</p>
        <div className='flex items-center ml-2'><BsCalendar2 className='font-medium text-pink-800 ml-2'/>
        <span className='ml-2'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
       </div>
     </div>
     <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
     {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
    </div>
    </div>
  );
}

export default PostDetails