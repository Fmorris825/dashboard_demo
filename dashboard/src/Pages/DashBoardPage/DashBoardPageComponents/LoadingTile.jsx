import { Alert, Space, Spin } from "antd";

const LoadingTile = ({}) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: " 40%",
      }}
    >
      <Spin tip="Loading...">
        <Alert
          message="Dashboard Components"
          description="Loading Dashboard with user Data."
          type="info"
        />
      </Spin>
    </Space>
  );
};

export default LoadingTile;
