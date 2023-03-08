import { Carousel } from "antd";
import LoadingTile from "../DashBoardPageComponents/LoadingTile";
import NewsCard from "./NewsCard";

const NewsModule = ({ news }) => {
  if (!news) return <LoadingTile />;
  return (
    <div>
      <Carousel autoplay>
        {news.map((article, index) => {
          return <NewsCard article={article} />;
        })}
      </Carousel>
    </div>
  );
};

export default NewsModule;
