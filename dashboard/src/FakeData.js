import streamline from "./Thumbnails/Streamline.png";
import streamlineDemo from "./Thumbnails/StreamlineDemo.png";
import MDR from "./Thumbnails/MorrisDeltaRealty.png";
import portfolio from "./Thumbnails/Portfolio.png";
import movieApp from "./Thumbnails/MovieApp.png";
import YTC from "./Thumbnails/YoutubeClone.png";
const FakeProjects = [
  {
    id: 1,
    name: "Streamline",
    thumbnail_Url: streamline,
    site: null,
    github: "https://github.com/Fmorris825/dashboard",
  },
  {
    id: 2,
    name: "Streamline Demo",
    thumbnail_Url: streamlineDemo,
    site: null,
    github: "https://github.com/Fmorris825/dashboard_demo",
  },
  {
    id: 3,
    name: "Morris Delta Realty",
    thumbnail_Url: MDR,
    site: null,
    github: "https://github.com/Fmorris825/real_estate_capstone",
  },
  {
    id: 4,
    name: "Portfolio v1",
    thumbnail_Url: portfolio,
    site: "https://portfolio-v1-mocha.vercel.app/",
    github: "https://github.com/Fmorris825/portfolio_v1",
  },
  {
    id: 5,
    name: "Movie Application",
    thumbnail_Url: movieApp,
    site: null,
    github: "https://github.com/Fmorris825/movies_application",
  },
  {
    id: 6,
    name: "Youtube Clone",
    thumbnail_Url: YTC,
    site: null,
    github: "https://github.com/Fmorris825/ytc",
  },
];

const FakeTasks = [
  {
    complete: true,
    date: "2023-02-09",
    description: "Add Completed Task Column.",
    importance_level: 1,
    project_Id: 1,
    task: "Completed Task",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-01-03",
    description: "Plan out components for contact Page.",
    importance_level: 1,
    project_Id: 1,
    task: "Plan Contact Page",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-14",
    description: "Use Yahoo Weather API to display weekly forecasts.",
    importance_level: 2,
    project_Id: 1,
    task: "Create Weekly Forecast Module.",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-13",
    description: "Plan which API's i will use for Dashboard page.",
    importance_level: 2,
    project_Id: 1,
    task: "Plan out Dashboard API's",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-03-03",
    description: "Plan which API's i will use for Dashboard page.",
    importance_level: 1,
    project_Id: 1,
    task: "Plan out Dashboard API's",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-13",
    description: "Deploy application using vercecl.",
    importance_level: 1,
    project_Id: 1,
    task: "Deploy live application",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Improve better ad task and edit task desgin for modals.",
    importance_level: 3,
    project_Id: 2,
    task: "Improve Add and edit Task Design for modals.",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-09",
    description: "Plan format and design of component and what it will entail.",
    importance_level: 1,
    project_Id: 1,
    task: "Plan Projects Component",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-09",
    description: "Create Edit Task Functionality through the task list.",
    importance_level: 1,
    project_Id: 1,
    task: "Edit Task Functionality",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-14",
    description:
      "Add Responsive styling to weather card module, to reflect weather forecast.",
    importance_level: 2,
    project_Id: 1,
    task: "Responsive Styling for Weather Card",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-28",
    description: "Give headings to progress displays.",
    importance_level: 2,
    project_Id: 1,
    task: "Label progress module components",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-28",
    description:
      "Design other metrics to display in projects module component.",
    importance_level: 2,
    project_Id: 1,
    task: "Design Progress Module",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-13",
    description: "Add Feature to show completed date for tasks.",
    importance_level: 2,
    project_Id: 1,
    task: "Show Completed Date",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-09",
    description:
      "Create Collections on Firebase console to hold date for Fred's Links, Resources, Planning, Projects & Backlog.",
    importance_level: 1,
    project_Id: 1,
    task: "Create Collections on Google Firebase ",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-14",
    description: "Add Weather pngs for weather display on dashboard.",
    importance_level: 2,
    project_Id: 1,
    task: "Add Weather Icons",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-09",
    description: "Order Task by timestamp creation.",
    importance_level: 3,
    project_Id: 1,
    task: "Oder Tasks",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-03-03",
    description: "Set up local storage functionality.",
    importance_level: 1,
    project_Id: 2,
    task: "Refactor Streamline applicaiton to run with local storage.",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-14",
    description: "Find Weather API to request data from.",
    importance_level: 3,
    project_Id: 1,
    task: "Implement Weather API",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-14",
    description: "Use YahooWeather API to display data.",
    importance_level: 3,
    project_Id: 1,
    task: "Use Yahoo Weather API",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-14",
    description:
      "Refactor add task, edit task, delete task, and undo task functionality to work with demo storage.",
    importance_level: 1,
    project_Id: 2,
    task: "Refactor CRUD functionality",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-03-03",
    description: "Add Importance level to edit task form.",
    importance_level: 2,
    project_Id: 1,
    task: "Edit task form.",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-28",
    description: "Add Importance level to edit task form.",
    importance_level: 1,
    project_Id: 1,
    task: "Edit task form.",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-01-03",
    description: "Add Portfolio, LinkedIn, Github, & Resume Links.",
    importance_level: 2,
    project_Id: 1,
    task: "Add Contact info on Contact Page",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-09",
    description:
      "Plan format and design of Planner Component and what it will entail.",
    importance_level: 3,
    project_Id: 1,
    task: "Plan out Planning Component.",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-02-09",
    description: "Create Delete Task Functionality through the edit list.",
    importance_level: 1,
    project_Id: 1,
    task: "Delete Task Functionality",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-03-15",
    description:
      "Add Demo Info Alerts to components to explain to users, component purposes.",
    importance_level: 1,
    project_Id: 1,
    task: "Create Demo Info Alert",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-03-16",
    description: "Create links component for easy access to project links.",
    importance_level: 1,
    project_Id: 1,
    task: "Create links component on projects page.",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description:
      "Refactor CRUD functionality for properties to utilize local storage and not the django backend.",
    importance_level: 1,
    project_Id: 3,
    task: "Refactor CRUD Functionality",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Deploy Application using Vercel",
    importance_level: 1,
    project_Id: 3,
    task: "Deploy Application",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description:
      "Rethink Style and Design, Think how to design components in a more modern design",
    importance_level: 1,
    project_Id: 4,
    task: "Create new Wireframe",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Deploy application using vercel.",
    importance_level: 1,
    project_Id: 5,
    task: "Deploy Application",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Refactor application to use local storage",
    importance_level: 1,
    project_Id: 6,
    task: "Refactor application away from Django Backend",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Refactor application CRUD functionality",
    importance_level: 1,
    project_Id: 6,
    task: "Refactor CRUD",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Deploy application using vercel.",
    importance_level: 1,
    project_Id: 6,
    task: "Deploy Application",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Deploy application using vercel.",
    importance_level: 1,
    project_Id: 2,
    task: "Deploy Application",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-03-15",
    description:
      "Build Info Alert component to display information about different pages and components.",
    importance_level: 1,
    project_Id: 1,
    task: "Build Demo Info Alert",
    timestamp: "",
  },
  {
    complete: true,
    date: "2023-03-14",
    description:
      "Build links component to display links specific to each project in the projects page.",
    importance_level: 2,
    project_Id: 1,
    task: "Links Component",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description: "Add learning resources to resources page",
    importance_level: 3,
    project_Id: 1,
    task: "Learning Resources",
    timestamp: "",
  },

  {
    complete: true,
    date: "2023-03-15",
    description: "Use Canva to create project Thumbnails",
    importance_level: 1,
    project_Id: 1,
    task: "Project Thumbnails",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-15",
    description:
      "Update Loading Tile Design to show tiles for all components on dashboard page",
    importance_level: 1,
    project_Id: 2,
    task: "Loading Tile Refactor",
    timestamp: "",
  },
];

const futureProjects = [
  {
    complete: false,
    date: "2023-03-011",
    description:
      "Utilize Docker to host a Youtube Clone application with Django Backend",
    importance_level: 0,
    project_Id: 1,
    task: "Use Docker to depoy past application with backend.",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-013",
    description:
      "Have ability to set task deadlines and sprint lengths for projects and tasks",
    importance_level: 0,
    project_Id: 1,
    task: "Design and build functionality for a planner page for Streamline application.",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-015",
    description:
      "Create mobile application to display informative information for a personal trainer.",
    importance_level: 0,
    project_Id: 1,
    task: "Create Personal Trainer modbile application using React Native.",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description:
      "Build ability to switch bewteen light and dark mode within streamline application.",
    importance_level: 0,
    project_Id: 1,
    task: "Build Light/Dark Mode for Streamline Application",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-03-16",
    description:
      "Use Google firebase authentication service to integrate a user based system into the streamline app.",
    importance_level: 0,
    project_Id: 1,
    task: "Google firebase authentication for users for Streamline application.",
    timestamp: "",
  },
];

export default { FakeProjects, FakeTasks, futureProjects };
