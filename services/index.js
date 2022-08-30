import {request, gql} from 'graphql-request';

const graphAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPostDetails = async(slug) => {
  const query  = gql `
    query getPostDetails($slug: String!) {
      post(where: {slug: $slug}) {
        author {
          name
          bio
          id
          photo {
            url
          }
        }
        createdAt
        title
        slug
        excerpt
        featuredimage {
          url
        }
        categories {
          slug
          name
        }
        content {
          raw
        }
      }
    }`
  const result = await request(graphAPI,query,{slug});
  return result.post;
}

export const getCategoryPost = async (slug) => {
  const query = gql`
  query MyQuery($slug: String!) {
    posts(where: {categories_some: {slug: $slug}}) {
      createdAt
      excerpt
      slug
      title
      featuredimage {
        url
      }
      categories{
        name
      }
    }
  }
  `;

  const result = await request(graphAPI, query, { slug });
  return result.posts;
};


export const getPosts = async() =>{
  const query = gql `
    query posts {
      posts {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredimage {
          url
        }
        categories {
          slug
          name
        }
      }
    }`
    const result = await request(graphAPI,query)
    return result.posts;
  }

export const getRecentPosts = async () => {
    const query =  gql `
      query recentPosts{
        posts (
            orderBy: createdAt_ASC
              last: 3
            ){
              title
              featuredimage{
                url
              }
            createdAt
            slug
          }
      }`
    const result = await request(graphAPI,query);
    return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql `
      query similarPosts($slug: String!, $categories: [String!]) {
        posts(
          where: { slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3
        ) {
          title
          createdAt
          slug
          featuredimage {
            url
          }
        }
      } `   
  const result = await request(graphAPI,query,{categories, slug});
  return result.posts;
}

export const getCategories = async () => {
  const query = gql `
    query MyQuery {
      categories {
        name
        slug
      }
    }` 
 const result = await request(graphAPI,query);
  return result.categories;
}



export const submitComment = async (values) => {
  const result = await fetch('/api/comments',{
    method: 'POST',
    headers: {'Content-type':'application/json'},
    body: JSON.stringify(values),
  });
  return result;
}

export const submitMessage = async (values) => {
  const result = await fetch('/api/messages',{
    method: 'POST',
    headers: {'Content-type':'application/json'},
    body: JSON.stringify(values),
  });
  return result;
}

export const getComments = async (slug) => {
  const query = gql `
    query GetComments($slug: String!){
       comments(where: {post: {slug: $slug}}){
        name
        createdAt
        comment
       }
    }`
  
  const result = await request(graphAPI,query,{slug});
  return result.comments;
}

export const getFeaturedPosts = async () => {
  const query = gql`
  query MyQuery {
    posts(where: {featured: true}) {
      author {
        name
        photo {
          url
        }
      }
      featuredimage {
        url
      }
      title
      slug
      createdAt
    }
  }   
  `;

  const result = await request(graphAPI, query);

  return result.posts;
};