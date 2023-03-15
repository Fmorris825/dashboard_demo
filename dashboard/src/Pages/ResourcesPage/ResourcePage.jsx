import ResourceList from "./ResourceList";
import ResourcData from "../../ResourcData";
import "./ResourcePage.css";
import DemoInfoAlert from "../../components/DemoInfoAlert";

const ResourcePage = () => {
  return (
    <div className="ResourceListContainer">
      <DemoInfoAlert message="Fred uses this page as his resource workshop, all the resources he uses are stored here in an easy to navigate library to make coding and designing much more efficient and streamlined." />
      <ResourceList
        listArray={ResourcData.generalResources}
        listTitle="General Resources"
      />
      <ResourceList
        listArray={ResourcData.librariesAndFrameworks}
        listTitle="Libraries & Frameworks"
      />
      <ResourceList
        listArray={ResourcData.stylingResources}
        listTitle="Styling Resources"
      />
      <ResourceList
        listArray={ResourcData.learningResources}
        listTitle="Learning Resources"
      />
    </div>
  );
};

export default ResourcePage;
