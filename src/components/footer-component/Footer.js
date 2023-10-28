import Article from "./Article";
import { articles } from "./data";

const Footer = () => {
  return (
    <footer class="container flex">
      {articles.map((article) => {
        return <Article article={article} key={article.id} />;
      })}
    </footer>
  );
};

export default Footer;
