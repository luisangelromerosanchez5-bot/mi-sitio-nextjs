import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogCardProps { post: BlogPost; }

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
        <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <p className="text-gray-600">{post.excerpt}</p>
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
          Leer más →
        </Link>
      </div>
    </div>
  );
}