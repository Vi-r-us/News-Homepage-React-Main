const Article = ({ article }) => {
  const { id, img, imgTitle, sNo, title, desc } = article;
  return (
    <article class="flex-article" key={id}>
      <div>
        <img src={img} alt={imgTitle} />
      </div>
      <div>
        <h4>{sNo}</h4>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Article;
