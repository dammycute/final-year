import Wrapper from "./wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-4 mb-3">
        <h1 className="text-xl font-bold">Projects</h1>
        <Button className="bg-[#036EFF] py-2 px-6">
          <Link to="create">Create</Link>
        </Button>
      </div>
      <div className="rounded-lg bg-white p-8 h-[calc(100%-10rem)] overflow-y-scroll">
        <Wrapper />
      </div>
    </>
  );
};

export default ProjectList;
