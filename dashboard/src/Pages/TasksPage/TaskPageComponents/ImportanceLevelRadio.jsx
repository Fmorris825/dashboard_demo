import { Radio } from "antd";

const ImportanceLevelRadio = ({ setImportanceLevel }) => {
  const onChange = (e) => {
    console.log(e.target.value);
    setImportanceLevel(parseInt(e.target.value));
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        defaultValue="critical"
        buttonStyle="solid"
      >
        <Radio.Button value="1">Critical</Radio.Button>
        <Radio.Button value="2">Moderate</Radio.Button>
        <Radio.Button value="3">Low</Radio.Button>
      </Radio.Group>
    </>
  );
};

export default ImportanceLevelRadio;
