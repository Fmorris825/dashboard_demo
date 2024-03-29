import { Progress, Space, Card, Col, Row, Statistic } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import Header from "../../../components/Header";
import StatisticCard from "./StatisticCard";
import SubHeader from "../../../components/SubHeader";
import DemoInfoAlert from "../../../components/DemoInfoAlert";

const ProgressModule = ({
  list,
  completedListLength,
  toDoListLength,
  tasksLength,
}) => {
  return (
    <div className="Container progressContainer">
      <DemoInfoAlert
        message="Progress module displays task progress."
        description={
          <div>
            The dashboard homepage shows all tasks within the application and
            the projects page displays task progress for selected projects.
          </div>
        }
      />
      <Header headerText="Task Progress" />
      <Progress
        percent={list}
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
      />
      <SubHeader text="Task Breakdown" />
      <div className="statRow">
        <StatisticCard title="Total Tasks" value={tasksLength} color="0000ff" />
      </div>

      <Row gutter={16}>
        <StatisticCard
          title="Task To Do"
          value={toDoListLength}
          color="#cf1322"
          // prefix={<CloseOutlined />}
        />
        <StatisticCard
          title="Task Completed"
          value={completedListLength}
          color="#3f8600"
          prefix={<CheckOutlined />}
        />
      </Row>
    </div>
  );
};

export default ProgressModule;
