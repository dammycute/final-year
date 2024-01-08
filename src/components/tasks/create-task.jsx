// import Dummy from './command-me';

import CreateSub from "./create-sub";
import { Link, useParams } from "react-router-dom";

const CreateTask = () => {
  const { projectId } = useParams();
  return (
    <div className="container">
      <CreateSub projectId={projectId}/>
    </div>
  );
};

export default CreateTask;
