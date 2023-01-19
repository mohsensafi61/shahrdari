import Image from "next/image";
import axios from "axios";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading ...</div>;
  }
  return (
    <div className="container mx-auto">
      <main
        className="prose-h2:text:xl md:prose-p:text-ls prose prose-xl prose-slate
          mx-auto mb-8 max-w-screen-md prose-h1:text-xl
          prose-h1:font-black prose-h2:font-extrabold prose-p:text-base prose-p:leading-8
          prose-a:text-blue-500 prose-a:no-underline prose-img:mx-auto prose-img:rounded-md prose-img:w-full md:prose-h1:text-3xl md:prose-h2:text-2xl md:prose-p:leading-10"
      >
        <div className="aspect-w-16 aspect-h-9 mt-0 md:mt-4 w-full object-cover object-center ">
          <Image
            placeholder="blur"
            blurDataURL={post.featuredImage?.node?.sourceUrl}
            src={post.featuredImage?.node?.sourceUrl}
            alt={post.title}
            className="h-full w-full"
            loading="lazy"
            layout="fill"
          />
        </div>
        <h1 className="mt-10 rounded-lg bg-gray-200 p-10 text-center">
          {post.title}
        </h1>

        <article
          className="mt-10 px-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_SLUG = gql`
    query GetPostByUri($id: ID!, $idType: PostIdType) {
      post(id: $id, idType: $idType) {
        title
        content
        date
        slug
        author {
          node {
            firstName
            lastName
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POST_BY_SLUG,
    variables: {
      id: params.slug,
      idType: "SLUG",
    },
  });
  console.log(response?.data?.post);
  const post = response?.data?.post;

  return {
    props: {
      post,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
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
  });

  const paths = response.data.posts.nodes.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}
