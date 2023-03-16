import { Col, Row } from "antd";
import DemoInfoAlert from "../../../components/DemoInfoAlert";

const SelectedProjectLinks = ({ selectedProject }) => {
  return selectedProject.site ? (
    <div className="Container">
      <DemoInfoAlert message="Links displayed here help with navigation and to the selected projects github and live site." />
      <Row className=" space-evenly ">
        {" "}
        <a href={selectedProject.site} target="_blank">
          Live Site
        </a>
        <a href={selectedProject.github} target="_blank">
          Github
        </a>
      </Row>
    </div>
  ) : (
    <div className="Container">
      <DemoInfoAlert message="Links displayed here help with navigation and to the selected projects github and live site." />
      <Row className="center">
        {" "}
        <a href={selectedProject.github} target="_blank">
          Github
        </a>
      </Row>
    </div>
  );
};

export default SelectedProjectLinks;
