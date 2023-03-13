import { useState } from "react";
import { Form, Input, Modal } from "antd";
// import { db } from "../../../config";
import { updateDoc, doc } from "firebase/firestore";
import ImportanceSelectDropdown from "./ImportanceSelectDropdown";

const EditTaskButton = ({
  selectedTask,
  setTasks,
  tasks,
  filterCompleted,
  filteredToDo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescriiption] = useState("");
  const [importanceLevel, setImportanceLevel] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  function updateTask(editTask) {
    editTask.task = task;
    editTask.description = description;
    editTask.importance_level = importanceLevel;
    let tempTaskList = [...tasks];
    setTasks(tempTaskList);
  }

  function handleSubmit(task) {
    updateTask(task);
    console.log("Success");
    setDescriiption("");
    setTask("");
    setImportanceLevel(0);
    setIsModalOpen(false);
  }

  function handleCancel() {
    setDescriiption("");
    setTask("");
    setImportanceLevel(0);
    console.log("Cancel");
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        type="primary"
        onClick={showModal}
        style={{ backgroundColor: "inherit" }}
      >
        edit
      </button>
      <Modal
        open={isModalOpen}
        onOk={() => handleSubmit(selectedTask)}
        onCancel={() => handleCancel()}
      >
        <h3>Edit "{selectedTask.task}" Task</h3>
        <Form
          name="basic"
          style={{
            maxWidth: 600,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Input
            placeholder="Task"
            onChange={(event) => {
              setTask(event.target.value);
            }}
            value={task}
          />
          <Input
            placeholder="Task Description"
            onChange={(event) => {
              setDescriiption(event.target.value);
            }}
            value={description}
          />
          <ImportanceSelectDropdown setImportanceLevel={setImportanceLevel} />
        </Form>
      </Modal>
    </>
  );
};

export default EditTaskButton;
