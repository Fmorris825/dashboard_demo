import { Avatar, List, Skeleton } from "antd";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import CompleteTaskButton from "./CompleteTaskButton";
import LoadingTile from "../../DashBoardPage/DashBoardPageComponents/LoadingTile";
import TaskCard from "./TaskCard";

const TasksList = ({
  tasks,
  list,
  setTasks,
  isLoading,
  multiComponent,
  filterCompleted,
  filteredToDo,
}) => {
  const sorted = list.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  console.log(sorted);

  return isLoading ? (
    <LoadingTile />
  ) : (
    <List
      className="taskList"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(task) => (
        <TaskCard
          tasks={tasks}
          task={task}
          multiComponent={multiComponent}
          setTasks={setTasks}
          filterCompleted={filterCompleted}
          filteredToDo={filteredToDo}
        />
      )}
    />
  );
};

export default TasksList;
