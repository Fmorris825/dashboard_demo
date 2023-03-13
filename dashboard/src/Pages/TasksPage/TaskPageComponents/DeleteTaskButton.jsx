// import { db } from "../../../config";
import { message } from "antd";
import { doc, deleteDoc } from "firebase/firestore";

import { CloseCircleTwoTone } from "@ant-design/icons";

const DeleteTaskButton = ({
  task,
  tasks,
  setTasks,
  filterCompleted,
  filteredToDo,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const deletion = () => {
    messageApi.open({
      type: "error",
      content: "Task Deleted",
    });
  };

  const deleteTask = (selectedTask) => {
    let tempTaskList = tasks.filter((task) => selectedTask !== task);
    setTasks(tempTaskList);
    console.log("delete");
    deletion();
  };

  return (
    <>
      {contextHolder}
      <button
        key="list-loadmore-edit"
        style={{ backgroundColor: "inherit" }}
        onClick={() => {
          deleteTask(task);
        }}
      >
        <CloseCircleTwoTone
          style={{
            color: "#FF8A8A",
            fontSize: "15px",
            filter: "drop-shadow(0 0 0.1rem black)",
          }}
          twoToneColor="#FF0000"
        />
      </button>{" "}
    </>
  );
};

export default DeleteTaskButton;
