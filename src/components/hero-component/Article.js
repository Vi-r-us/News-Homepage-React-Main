const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <h3>{article.title}</h3>
      <p>{article.desc}</p>
    </article>
  );
};

export default Article;
