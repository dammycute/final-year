import { Button } from "@/components/ui/button";
import Dummy from './command-me';
import { Link } from 'react-router-dom'
import CommandOutput from "./command-output";


const CreateForm = () => {
  return (
    <div>
      <p className="text-gray-400 font-xl my-4">Projects / Create Project</p>
      <div className="bg-white  rounded-md">
      <div className="container input-ctn py-6">
        <div className="top flex gap-4">
          <div className="input w-2/6">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              id="title"
              name="title"
              //   value={formData.title}
              className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              //   onChange={handleInputChange}
            />
          </div>
          <div className="input w-2/6">
            <label htmlFor="title">Project Type</label>
            <input
              type="text"
              id="title"
              name="title"
              //   value={formData.title}
              className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              //   onChange={handleInputChange}
            />
          </div>
          <div className="input w-1/6">
            <label htmlFor="title">Start Date</label>
            <input
              type="date"
              id="title"
              name="title"
              //   value={formData.title}
              className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              //   onChange={handleInputChange}
            />
          </div>
          <div className="input w-1/6">
            <label htmlFor="title">End Date</label>
            <input
              type="date"
              id="title"
              name="title"
              //   value={formData.title}
              className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              //   onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="middle p-4">
          <label htmlFor="title">Project Description</label>
          <textarea
            type="textarea"
            rows={3}
            id="title"
            name="title"
            //   value={formData.title}
            className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            //   onChange={handleInputChange}
          />
        </div>
        <div className="buttom flex gap-10 py-7">
          <Dummy/>
          <CommandOutput/>
        </div>
        <div className="buttons flex justify-end gap-6">
        <Button className="bg-[#036EFF] px-4 text-md"><Link to="/create" >Create</Link></Button>
        <Button className="bg-[#EEF4FB] text-[#036EFF] px-4 text-md"><Link to="/create" >Create</Link></Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CreateForm;
