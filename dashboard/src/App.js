// General Imports //
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Data Imports //
import FakeData from "./FakeData";
import keys from "./keys";
import ApiService from "./ApiService";

// CSS Imports //
import "antd/dist/reset.css";
import "./App.css";

// Icon Imports //
import {
  MailOutlined,
  UserOutlined,
  DatabaseOutlined,
  FolderOpenOutlined,
  FireOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

// antd Imports //
import { Layout, Menu, theme, Switch, ConfigProvider } from "antd";

// Component Imports //
import TasksPage from "./Pages/TasksPage/TasksPage";
import PlanningPage from "./Pages/PlanningPage/PlanningPage";
import DashBoardPage from "./Pages/DashBoardPage/DashBoardPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ResourcePage from "./Pages/ResourcesPage/ResourcePage";
import DemoInfoAlert from "./components/DemoInfoAlert";
import Backlog from "./Pages/BackogPage/Backlog";
import DemoModal from "./components/DemoModal";

//Import Simplifier//

// antd Component Layout //
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const navItems = [
  getItem("HomeBase", "sub1", <MailOutlined />, [
    getItem("Dashboard", "/", <DesktopOutlined />),
    getItem("Projects", "/projects", <FireOutlined />),
    // getItem("Tasks", "/tasks", <RobotOutlined />),
    // getItem("Planning", "/planning", <CalendarOutlined />),
    getItem("Backlog", "/backlog", <FolderOpenOutlined />),
  ]),
  getItem("Contact Fred", "/links", <UserOutlined />),
  getItem("Resources", "/resources", <DatabaseOutlined />),
];

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  //Application State Variables//
  const [tasks, setTasks] = useState(FakeData.FakeTasks);
  const [projects, setProjects] = useState(FakeData.FakeProjects);
  const [completedList, setCompletedList] = useState({});
  const [toDoList, setDoList] = useState({});
  const [yahooWeather, setYahooWeather] = useState(false);
  const [ToggleDisplayMode, setToggleDisplayMode] = useState(false);
  const [darkMode, setDarkMode] = useState("inactive");
  const [appDisplay, setAppDisplay] = useState("inactive");
  const [date, setDate] = useState("");
  const [news, setNews] = useState({});

  // User/Location state variables for Demo //
  const [user, setUser] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(() => {
    console.log(FakeData.FakeTasks);
    //News API GET Request//
    ApiService.getRequest(
      "https://yahoo-weather5.p.rapidapi.com/weather",
      { location: location, format: "json", u: "f" },
      {
        "X-RapidAPI-Key": "e79d90cae2msh5521f68907c95b5p178094jsncb7add5f2fc5",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
      setYahooWeather
    );
    //Yahoo Weather API GET Request//
    getNewDate();
    ApiService.getRequest(
      "https://newsapi.org/v2/top-headlines?country=us&category=business",
      null,
      {
        "x-api-key": keys.newsApiKey,
      },

      setNews
    );
  }, [location]);

  useEffect(() => {
    filterCompleted();
    filteredToDo();
  }, [tasks]);

  // Get Current Date Function //
  function getNewDate() {
    let today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    setDate(date);
  }

  // Filter Tasks List for Completed Tasks //
  function filterCompleted() {
    const completedTasks = tasks.filter((task) => {
      return task.complete === true;
    });
    return setCompletedList(completedTasks);
  }

  // Filter Tasks List for ToDo Tasks //
  function filteredToDo() {
    const toDoTasks = tasks.filter((task) => {
      return task.complete === false;
    });
    return setDoList(toDoTasks);
  }

  //??Toggle Dark Mode //
  const onChange = (checked) => {
    setToggleDisplayMode(!ToggleDisplayMode);
    if (ToggleDisplayMode === false) {
      setDarkMode("rgba(128, 128, 128, 0.39)");
      setAppDisplay("active");
    } else if (ToggleDisplayMode === true) {
      setDarkMode("rgb(255, 255, 255)");
      setAppDisplay("inactive");
    }
  };

  console.log(user, location);
  return user ? (
    <div className={appDisplay}>
      <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: `#00b96b`,
      //     colorBgLayout: `rgba(128, 128, 128, 0.39)`,
      //     colorBgBase: `rgba(128, 128, 128, 0.39)`,
      //     colorBgContainer: `rgba(128, 128, 128, 0.39)`,
      //   },
      // }}
      >
        <Layout>
          <Header className="header">
            <h1 className="brand">HOMEBASE</h1>
            {/* <Switch defaultChecked onChange={onChange} /> */}
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{
                background: colorBgContainer,
              }}
            >
              <Menu
                onClick={({ key }) => {
                  navigate(key);
                }}
                mode="inline"
                defaultSelectedKeys={["/"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0,
                  backgroundColor: darkMode,
                }}
                items={navItems}
              />
            </Sider>
            <Layout
              style={{
                padding: "24px 24px 24px",
              }}
            >
              {/* <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  backgroundColor: darkMode,
                }}
              >
                <div>
                  <DemoInfoAlert />
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <DashBoardPage
                          tasks={tasks}
                          toDoList={toDoList}
                          completedList={completedList}
                          yahooWeather={yahooWeather}
                          news={news.articles}
                          isLoading={isLoading}
                          user={user}
                        />
                      }
                    ></Route>
                    <Route
                      path="/projects"
                      element={
                        <ErrorBoundary FallbackComponent={OurFallbackComponent}>
                          <ProjectsPage
                            projects={projects}
                            setProjects={setProjects}
                            tasks={tasks}
                            setTasks={setTasks}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            filterCompleted={filterCompleted}
                            filteredToDo={filteredToDo}
                          />
                        </ErrorBoundary>
                      }
                    ></Route>
                    <Route
                      path="/tasks"
                      element={
                        <TasksPage
                          tasks={tasks}
                          setTasks={setTasks}
                          // tasksCollectionRef={tasksCollectionRef}
                          // getTasks={getTasks}
                          completedList={completedList}
                          toDoList={toDoList}
                          filteredToDo={filteredToDo}
                          projects={projects}
                          isLoading={isLoading}
                        />
                      }
                    ></Route>
                    <Route path="/planning" element={<PlanningPage />}></Route>
                    <Route
                      path="/backlog"
                      element={<Backlog tasks={tasks} setTasks={setTasks} />}
                    ></Route>
                    <Route path="/resources" element={<ResourcePage />}></Route>
                    <Route path="/links" element={<ContactPage />}></Route>
                  </Routes>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>{" "}
      </ConfigProvider>
    </div>
  ) : (
    <div className={appDisplay}>
      <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: `#00b96b`,
      //     colorBgLayout: `rgba(128, 128, 128, 0.39)`,
      //     colorBgBase: `rgba(128, 128, 128, 0.39)`,
      //     colorBgContainer: `rgba(128, 128, 128, 0.39)`,
      //   },
      // }}
      >
        <Layout>
          <Header className="header">
            <h1 className="brand">HOMEBASE</h1>
            <Switch defaultChecked onChange={onChange} />
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{
                background: colorBgContainer,
              }}
            >
              <Menu
                onClick={({ key }) => {
                  navigate(key);
                }}
                mode="inline"
                defaultSelectedKeys={["/"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0,
                  backgroundColor: darkMode,
                }}
                items={navItems}
              />
            </Sider>
            <Layout
              style={{
                padding: "24px 24px 24px",
              }}
            >
              {/* <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  backgroundColor: darkMode,
                }}
              >
                {" "}
                <DemoModal setUser={setUser} setLocation={setLocation} />
              </Content>
            </Layout>
          </Layout>
        </Layout>{" "}
      </ConfigProvider>
    </div>
  );
}
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

export default App;
