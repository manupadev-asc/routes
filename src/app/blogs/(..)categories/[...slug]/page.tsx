import Link from "next/link";

function BlogPageCategories({ params }: { params: any }) {
  return (
    <div>
      <span className="block">
        Intercepted Categories With {JSON.stringify(params)}
      </span>
    </div>
  );
}
export default BlogPageCategories;
