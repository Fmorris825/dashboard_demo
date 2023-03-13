import { CheckCircleTwoTone } from "@ant-design/icons";
// import { db } from "../../../config";
import { updateDoc, doc } from "firebase/firestore";
import { message } from "antd";

const CompleteTaskButton = ({
  selectedTask,
  setTasks,
  filterCompleted,
  filteredToDo,
  tasks,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Task Completed",
    });
  };

  const CompleteTask = async (completeTask) => {
    completeTask.complete = true;
    let tempTaskList = [...tasks];
    setTasks(tempTaskList);
    success();
  };
  return (
    <>
      {contextHolder}
      <button
        key="list-loadmore-edit"
        style={{ backgroundColor: "inherit" }}
        onClick={() => {
          CompleteTask(selectedTask);
        }}
      >
        <CheckCircleTwoTone
          style={{
            color: "#FF8A8A",
            fontSize: "16px",
            filter: "drop-shadow(0 0 0.1rem black)",
          }}
          twoToneColor="#00FF00"
        />
      </button>{" "}
    </>
  );
};

export default CompleteTaskButton;
