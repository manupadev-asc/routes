function BlogsLayout({ children, interception }: any) {
  return (
    <div className="grid grid-cols-2">
      {children}
      {interception}
    </div>
  );
}

export default BlogsLayout;
