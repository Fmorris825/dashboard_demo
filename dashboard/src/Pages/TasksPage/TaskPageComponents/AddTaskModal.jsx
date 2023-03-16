import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { addDoc, getDocs } from "firebase/firestore";
import { message } from "antd";
import ImportanceSelectDropdown from "./ImportanceSelectDropdown";
import ImportanceLevelRadio from "./ImportanceLevelRadio";

const AddTaskModal = ({ tasks, setTasks, filteredToDo, selectedProject }) => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [timestamp, setTimestamp] = useState(0);
  const [description, setDescriiption] = useState("");
  const [importanceLevel, setImportanceLevel] = useState(0);

  function addNewTask(task) {
    let tempTaskList = [task, ...tasks];
    setTasks(tempTaskList);
  }
  const createTask = () => {
    let newTask = {
      task: task,
      description: description,
      timestamp: Date.now(),
      date: date,
      complete: false,
      project_Id: selectedProject.id,
      importance_level: importanceLevel,
    };
    addNewTask(newTask);
    added();
  };

  useEffect(() => {
    getNewDate();
  }, []);

  function getNewDate() {
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    setDate(date);
  }

  function handleSubmit() {
    createTask();
    console.log("Success");
    setDescriiption("");
    setTask("");
    setImportanceLevel(0);
    setModal(false);
  }
  function handleCancel() {
    setDescriiption("");
    setTask("");
    setImportanceLevel(0);
    console.log("Cancel");
    setModal(false);
  }

  const [messageApi, contextHolder] = message.useMessage();
  const added = () => {
    messageApi.open({
      type: "success",
      content: "Task Created",
    });
  };

  return (
    <>
      {contextHolder}
      <button onClick={() => setModal(true)}>Add New Task</button>
      <Modal
        title="New Task"
        style={{
          top: 200,
          left: 400,
        }}
        open={modal}
        onOk={() => handleSubmit()}
        onCancel={() => handleCancel()}
      >
        <AddTaskForm
          handleSubmit={handleSubmit}
          setTask={setTask}
          setDate={setDate}
          setDescriiption={setDescriiption}
          setTimestamp={setTimestamp}
          date={date}
          task={task}
          description={description}
          timestamp={timestamp}
          setImportanceLevel={setImportanceLevel}
        />
      </Modal>
    </>
  );
};

function AddTaskForm({
  setDescriiption,
  setTask,
  task,
  description,
  setImportanceLevel,
}) {
  return (
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
      {/* <ImportanceSelectDropdown setImportanceLevel={setImportanceLevel} /> */}
      <ImportanceLevelRadio setImportanceLevel={setImportanceLevel} />
    </Form>
  );
}
export default AddTaskModal;
