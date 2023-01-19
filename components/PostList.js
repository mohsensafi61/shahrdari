import Link from "next/link";
import Image from "next/image";

const PostList = ({ posts }) => {
  return (
    <div className="bg-[url('/images/black-and-white.jpg')] py-10 bg-fixed relative bg-center bg-cover bg-no-repeat">
      <h1 className="text-center text-3xl border-2 mx-20 rounded-lg bg-gray-800 py-4 font-extrabold text-[#FFD700]">اخبار و مقالات</h1>
      <div className="my-10 mx-20 grid gap-x-6 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {posts.map((post, index) => {
          return (
            <Link key={index} href={`/posts/${post.slug}`}>
              
                <div className="rounded-lg bg-gray-800/90 hover:bg-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={post.featuredImage?.node?.sourceUrl}
                      loading="lazy"
                      src={post.featuredImage?.node?.sourceUrl}
                      alt={post.title}
                      className="rounded-lg object-cover object-center"
                    />
                  </div>
                  <h1 className="my-6 text-center text-2xl line-clamp-1 font-bold text-[#FFD700]">
                    {post.title}
                  </h1>
                  <div
                    className="px-2 line-clamp-3 text-gray-100 text-center"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
                </div>
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
