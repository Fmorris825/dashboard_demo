import { Alert, Space } from "antd";

const DemoInfoAlert = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert
        message="This is Demo verson of Fred's Personal Workspace application. Please feel free to interact and check out some of its feature's."
        description={
          <div>
            <span>You can reach Fred at the following: </span>
            <a
              href="https://www.linkedin.com/in/fredmorrisdeveloper/"
              target="_blank"
            >
              LinkedIn
            </a>
            <span>, </span>
            <a href="    https://github.com/Fmorris825" target="_blank">
              Github
            </a>

            <span>, and see his portfolio </span>
            <a href="https://portfolio-v1-mocha.vercel.app/" target="_blank">
              here
            </a>
            <span>, and also view his </span>
            <a
              href="https://drive.google.com/file/d/1gL8skql4yXF-OOviznoia--6UlTfQGtC/view"
              target="_blank"
            >
              Resumé
            </a>
            <span>.</span>
          </div>
        }
        type="info"
        showIcon
        closable
      />{" "}
    </Space>
  );
};

export default DemoInfoAlert;
