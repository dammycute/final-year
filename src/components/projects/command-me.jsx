import avatar from "../../assets/images/avatar.png";
import line from "../../assets/images/line.svg";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Dummy = () => {
  return (
    <div className="dummy-full">
      <Command>
        <CommandInput placeholder="....@gmail.com" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem className="flex w-full mb-2  bg-white justify-between">
              <div className="command-left flex gap-4">
                <img src={avatar} className="w-10" alt="" />
                <div className="name">
                  <p className="font-bold">Yash Kai</p>
                  <span className="text-gray-400">oyekunle@gmail.com</span>
                </div>
              </div>
              <div className="command-right">
                <p>Civil Engineer</p>
              </div>
            </CommandItem>
            <div className="command-line">
              <img src={line} alt="" />
            </div>
            <CommandItem className="flex mb-2 justify-between">
              <div className="command-left flex gap-4">
                <img src={avatar} className="w-10" alt="" />
                <div className="name">
                  <p className="font-bold">Yash Kai</p>
                  <span className="text-gray-400">oyekunle@gmail.com</span>
                </div>
              </div>
              <div className="command-right">
                <p>Civil Engineer</p>
              </div>
            </CommandItem>
            <div className="command-line">
              <img src={line} alt="" />
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Dummy;
