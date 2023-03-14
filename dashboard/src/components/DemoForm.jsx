import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";

const DemoForm = ({ setTempUser, setTempLocation, handleOk }) => {
  const [form] = Form.useForm();
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Form
      onFinish={handleOk}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
    >
      <p>Enter your name and location below</p>
      <Form.Item
        label="First Name"
        name="first name"
        rules={[{ required: true, message: "Please input name!" }]}
      >
        <Input
          placeholder="Ex: Elon"
          onChange={(event) => setTempUser(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please input your city!" }]}
      >
        <Input
          placeholder="Ex: Austin"
          onChange={(event) => setTempLocation(event.target.value)}
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        loading={loadings[2]}
        onClick={() => enterLoading(2)}
      >
        Submit
      </Button>
    </Form>
  );
};

export default DemoForm;
