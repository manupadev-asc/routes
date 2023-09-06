function BlogCategories({params}:{params:any}) {
  return (
    <div>
      <h1>Categories</h1>
      <span className="block">{JSON.stringify(params)}</span>
    </div>
  );
}

export default BlogCategories;
