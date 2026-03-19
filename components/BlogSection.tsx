import BlogCard from "./BlogCard";
import { blogPosts } from "lib/lib/data";

export default function BlogSection() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Blog
      </h2>
      <div className="flex flex-col gap-6 items-center">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}