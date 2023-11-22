import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserSelect from "./create-combox";
// import { ComboboxDemo } from "./create-combox";

const CreateSub = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '',
    owner: '',
    startDate: '',
    endDate: '',
    projectId: '',
    type: '',
    labor: 0,
    materials: 0,
    otherExpenses: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have a backend API endpoint for creating a task
      const response = await axios.post('/task/create', formData);
      console.log('Task created successfully:', response.data);
      // You can handle success, e.g., redirect to another page or display a success message
    } catch (error) {
      console.error('Error creating task:', error.response.data);
      // You can handle errors, e.g., display an error message to the user
    }
  };
  return (
    <div>
      <p className="text-gray-400 font-xl my-4">Tasks / Create Task</p>
      <div className="bg-white  rounded-md">
        <div className="container input-ctn py-6">
          <div className="top flex gap-4">
            <div className="input w-2/6">
              <label htmlFor="title">Task Title</label>
              <input
                type="text"
                id="title"
                name="title"
                  value={formData.title}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
              />
            </div>
            <div className="input w-2/6">
              <label htmlFor="title">Task Type</label>
              <input
                type="text"
                id="type"
                name="type"
                  value={formData.type}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
              />
            </div>
            <div className="input w-1/6">
              <label htmlFor="title">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                  value={formData.startDate}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
              />
            </div>
            <div className="input w-1/6">
              <label htmlFor="title">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                  value={formData.endDate}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="middle p-4">
            <label htmlFor="title">Task Description</label>
            <textarea
              type="textarea"
              rows={3}
              id="description"
              name="description"
                value={formData.description}
              className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputChange}
            />
          </div>

          <div className="high flex gap-6">
            <div className="select">
              <Label>Set Priority</Label>
              <Select className="mt-2">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="High" value="High" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  {/* <SelectItem value="system">System</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
            <div className="input">
              <label htmlFor="title">Cost</label>
              <input
                type="number"
                id="cost"
                name="cost"
                  value={formData.cost}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="buttom">
            <div className="select">
              <UserSelect backendUrl="https://jsonplaceholder.typicode.com/users" />
            </div>
          </div>

          <div className="buttom flex gap-10 py-7">.</div>
          <div className="buttons flex justify-end gap-6">
            <Button className="bg-[#036EFF] px-4 text-md">
              <Link to="/create">Create</Link>
            </Button>
            <Button className="bg-[#EEF4FB] text-[#036EFF] px-4 text-md">
              <Link to="/create">Delete</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSub;
