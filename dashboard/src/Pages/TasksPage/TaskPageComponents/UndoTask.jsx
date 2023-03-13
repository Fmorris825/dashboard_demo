import { UndoOutlined } from "@ant-design/icons";
// import { db } from "../../../config";
import { updateDoc, doc } from "firebase/firestore";
import { message } from "antd";

const UndoTask = ({
  selectedTask,
  tasks,
  setTasks,
  filterCompleted,
  filteredToDo,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const undo = () => {
    message.info("Task is in 'To do' List");
  };

  const Undo = async (undoTask) => {
    undoTask.complete = false;
    let tempTaskList = [...tasks];
    setTasks(tempTaskList);
    undo();
  };
  return (
    <>
      {contextHolder}
      <button
        key="list-loadmore-edit"
        style={{ backgroundColor: "inherit" }}
        onClick={() => {
          Undo(selectedTask);
        }}
      >
        <UndoOutlined
          style={{
            color: "#0000FF",
            fontSize: "16px",
            filter: "drop-shadow(0 0 0.1rem black)",
          }}
        />
      </button>{" "}
    </>
  );
};

export default UndoTask;
