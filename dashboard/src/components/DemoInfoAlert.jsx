import { Alert, Space } from "antd";

const DemoInfoAlert = ({ message, description }) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert
        message={message}
        description={description}
        type="info"
        showIcon
        closable
      />{" "}
    </Space>
  );
};

export default DemoInfoAlert;
