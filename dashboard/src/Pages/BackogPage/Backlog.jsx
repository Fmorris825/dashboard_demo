import Header from "../../components/Header";
import TasksList from "../TasksPage/TaskPageComponents/TasksList";
import FakeData from "../../FakeData";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import CompleteTaskButton from "../TasksPage/TaskPageComponents/CompleteTaskButton";

const Backlog = ({ tasks, setTasks }) => {
  console.log(FakeData.futureProjects);
  return (
    <div className="Container">
      <Header headerText="Future Ideas" />
      <ErrorBoundary FallbackComponent={OurFallbackComponent}>
        <TasksList
          tasks={tasks}
          setTasks={setTasks}
          list={FakeData.futureProjects}
          multiComponent={CompleteTaskButton}
        />
      </ErrorBoundary>
    </div>
  );
};
const OurFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default Backlog;
