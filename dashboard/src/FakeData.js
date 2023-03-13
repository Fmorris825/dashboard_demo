import facebook from "./ProjectThumbnails/Facebook.jpeg";
import instagram from "./ProjectThumbnails/Instagram.jpeg";
import linkedin from "./ProjectThumbnails/linkedin.png";
import twitter from "./ProjectThumbnails/Twitter.jpeg";

const FakeProjects = [
  {
    id: 1,
    name: "Facebook",
    thumbnail_Url: facebook,
  },
  {
    id: 2,
    name: "Instagram",
    thumbnail_Url: instagram,
  },
  {
    id: 3,
    name: "LinkedIn",
    thumbnail_Url: linkedin,
  },
  {
    id: 4,
    name: "Twitter",
    thumbnail_Url: twitter,
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
