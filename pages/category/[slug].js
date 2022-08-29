import React from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost, getPostCategories } from '../../services';
import {Loader, CategoryCard } from '../../components';

const CategoryPost = ({ posts}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:ml-20 ml-10'>
      {posts.map((post,index) => <CategoryCard key={index} post={post}/>)}
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}