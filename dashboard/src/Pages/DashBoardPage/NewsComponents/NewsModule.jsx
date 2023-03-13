import { Carousel } from "antd";
import Header from "../../../components/Header";
import LoadingTile from "../DashBoardPageComponents/LoadingTile";
import NewsCard from "./NewsCard";

const NewsModule = ({ news }) => {
  if (!news) return <LoadingTile />;
  return (
    <div className="Container">
      <Header headerText="Daily News" />
      <Carousel autoplay>
        {news.map((article, index) => {
          return <NewsCard article={article} />;
        })}
      </Carousel>
    </div>
  );
};

export default NewsModule;
