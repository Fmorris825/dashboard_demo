// General Imports //
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Data Imports //
import FakeData from "./FakeData";
import ApiService from "./ApiService";
import keys from "./keys";

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
import { Layout, Menu, theme, Switch, ConfigProvider, Space } from "antd";

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
  getItem("Streamline", "sub1", <MailOutlined />, [
    getItem("Dashboard", "/", <DesktopOutlined />),
    getItem("Projects", "/projects", <FireOutlined />),
    // getItem("Tasks", "/tasks", <RobotOutlined />),
    // getItem("Planning", "/planning", <CalendarOutlined />),
    getItem("Backlog", "/backlog", <FolderOpenOutlined />),
  ]),
  getItem("Resources", "/resources", <DatabaseOutlined />),
  getItem("Contact Fred", "/links", <UserOutlined />),
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
  const [location, setLocation] = useState("Dallas");

  useEffect(() => {
    //News API GET Request//
    ApiService.getRequest(
      "https://yahoo-weather5.p.rapidapi.com/weather",
      { location: location, format: "json", u: "f" },
      {
        "X-RapidAPI-Key": keys.weatherApiKey,
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
      setYahooWeather
    );
    //Yahoo Weather API GET Request//
    getNewDate();
    ApiService.getRequest(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${keys.newsApiKey}`,
      null,
      null,
      // {
      //   "x-api-key": keys.newsApiKey,
      // },

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

  // Toggle Dark Mode //
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
            <h1 className="brand">STREAMLINE</h1>
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
                  <DemoInfoAlert
                    message="This is Demo verson of Fred's Personal Workspace application. Please feel free to interact and check out some of its feature's."
                    description={
                      <div>
                        <span>You can reach Fred at the following: </span>
                        <a
                          href="https://www.linkedin.com/in/fredmorrisdeveloper/"
                          target="_blank"
                        >
                          LinkedIn
                        </a>
                        <span>, </span>
                        <a
                          href="    https://github.com/Fmorris825"
                          target="_blank"
                        >
                          Github
                        </a>

                        <span>, and see his </span>
                        <a
                          href="https://portfolio-v1-mocha.vercel.app/"
                          target="_blank"
                        >
                          portfolio
                        </a>
                        <span>, and also view his </span>
                        <a
                          href="https://drive.google.com/file/d/1gL8skql4yXF-OOviznoia--6UlTfQGtC/view"
                          target="_blank"
                        >
                          Resumé
                        </a>
                        <span>.😁</span>
                        <p>
                          The application can be navigated using the left side
                          navigation panel to view{" "}
                          <b>
                            <i>Projects</i>
                          </b>{" "}
                          within the application, a{" "}
                          <b>
                            <i>Backlog</i>
                          </b>{" "}
                          of ideas that a user is saving for a later date,{" "}
                          <b>
                            <i>Contact Fred</i>
                          </b>{" "}
                          has a list of links that you can use to get in contact
                          with Fred, &{" "}
                          <b>
                            <i>Resources</i>
                          </b>{" "}
                          is a directory of technologies that Fred uses
                          frequently when building applications.{" "}
                        </p>
                        <div className="space-evenly">
                          <div>
                            <p>This application was created to:</p>
                            <ul>
                              <li>
                                Improve efficiency in build times for
                                applications.
                              </li>
                              <li>
                                Organize and streamline projects and tasks for
                                sprints and applications.
                              </li>
                              <li>
                                Act as a directory for all needed links and
                                resources when building applications.
                              </li>
                            </ul>
                          </div>
                          <div>
                            {" "}
                            <div>
                              <p>
                                This applciation focuses on scalability and
                                resuability within components.
                              </p>
                              <ul>
                                <li>
                                  List and alert components are built to improve
                                  reusability within the applicaiton.
                                </li>
                                <li>
                                  List and objects and mapped over to support
                                  new data being added.
                                </li>
                                <li>
                                  Application is simple and responsive, provides
                                  a welcoming user experience.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  />
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
            <h1 className="brand">STREAMLINE</h1>
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
