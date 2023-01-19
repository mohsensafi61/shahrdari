import PostList from "../components/PostList";
import Shahrdar from "../components/Shahrdar";
import Shora from "../components/Shora";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="mx-auto">
      
      <PostList posts={posts} />
      <Shahrdar />
      <Shora />
    </div>
  );
}

// Graphql API
export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          content
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
    fetchPolicy: "network-only",
  });

  const posts = response?.data?.posts?.nodes;

  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
}

// REST API
// export async function getStaticProps(){
//   const {data : posts} = await axios.get('http://shop.local/wp-json/wp/v2/posts')

//   console.log({posts});
//   return {
//     props: {
//       posts
//     },
//     revalidate: 5
//   }
// }
