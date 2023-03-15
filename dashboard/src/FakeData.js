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
    date: "9/2/2023",
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
    date: "9/2/2023",
    description: "Create Super Cool Project",
    importance_level: 0,
    project_Id: 1,
    task: "Build Awesome Project",
    timestamp: "",
  },
];

export default { FakeProjects, FakeTasks, futureProjects };
