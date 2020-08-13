const Layout = frontMatter => ({ children: content }) => (
  <div className="prose">
    <h1>{frontMatter.title}</h1>
    {content}
  </div>
);

export default Layout;
