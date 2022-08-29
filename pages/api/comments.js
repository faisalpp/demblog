// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request"

const graphAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function handler(req, res) {
  const GRAPHCMS_TOKEN=process.env.GRAPHCMS_TOKEN
  
  const GraphCMS = new GraphQLClient(graphAPI, {
    headers: {
      authorization: `Bearer ${GRAPHCMS_TOKEN}`
    }
  })

 const query = gql `
 mutation ($name: String!, $email: String!, $comment: String!, $slug: String!) {
  createComment(
    data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}
  ) {
    name
    email
    comment
  }
}
 `
 const result = await GraphCMS.request(query,req.body)
 return res.status(200).send(result);
}
