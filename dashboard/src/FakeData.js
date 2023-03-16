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
    site: "",
    github: "",
  },
  {
    id: 2,
    name: "Streamline Demo",
    thumbnail_Url: streamlineDemo,
    site: "",
    github: "",
  },
  {
    id: 3,
    name: "Morris Delta Realty",
    thumbnail_Url: MDR,
    site: "",
    github: "",
  },
  {
    id: 4,
    name: "Portfolio v1",
    thumbnail_Url: portfolio,
    site: "",
    github: "",
  },
  {
    id: 5,
    name: "Movie Application",
    thumbnail_Url: movieApp,
    site: "",
    github: "",
  },
  {
    id: 6,
    name: "Youtube Clone",
    thumbnail_Url: YTC,
    site: "",
    github: "",
  },
];

const FakeTasks = [
  {
    complete: false,
    date: "9/2/2023",
    description: "Add Task 1",
    importance_level: 1,
    project_Id: 1,
    task: "Add Task",
    timestamp: "",
  },
  {
    complete: false,
    date: "9/2/2023",
    description: "Add Task 1",
    importance_level: 1,
    project_Id: 1,
    task: "Add Task",
    timestamp: "",
  },
  {
    complete: false,
    date: "9/2/2023",
    description: "Add Task 1",
    importance_level: 1,
    project_Id: 1,
    task: "Add Task",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-02-09",
    description: "Add Task 1",
    importance_level: 1,
    project_Id: 1,
    task: "Add Task",
    timestamp: "",
  },
];
const futureProjects = [
  {
    complete: false,
    date: "2023-02-011",
    description:
      "Utilize Docker to host a Youtube Clone application with Django Backend",
    importance_level: 0,
    project_Id: 1,
    task: "Use Docker to depoy past application with backend.",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-02-013",
    description:
      "Have ability to set task deadlines and sprint lengths for projects and tasks",
    importance_level: 0,
    project_Id: 1,
    task: "Design and build functionality for a planner page for Streamline application.",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-02-015",
    description:
      "Create mobile application to display informative information for a personal trainer.",
    importance_level: 0,
    project_Id: 1,
    task: "Create Personal Trainer modbile application using React Native.",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-02-16",
    description:
      "Build ability to switch bewteen light and dark mode within streamline application.",
    importance_level: 0,
    project_Id: 1,
    task: "Build Light/Dark Mode for Streamline Application",
    timestamp: "",
  },
  {
    complete: false,
    date: "2023-02-16",
    description:
      "Use Google firebase authentication service to integrate a user based system into the streamline app.",
    importance_level: 0,
    project_Id: 1,
    task: "Google firebase authentication for users for Streamline application.",
    timestamp: "",
  },
];

export default { FakeProjects, FakeTasks, futureProjects };
