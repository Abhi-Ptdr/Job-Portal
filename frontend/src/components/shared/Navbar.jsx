import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "../ui/button.jsx";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const {user} = useSelector(store => store.auth);

  return (
    <div>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <h1 className="text-2xl font-bold">
              {/* Job<span className="text-[#F83002]">Portal</span> */}
              <img className="mt-1 w-35 h-16" src="/HireHive.png" alt="HireHive Logo" />
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/browse">Browse</Link></li>
            </ul>

            {
              !user ? (
                <div className="flex item-center gap-2">
                  <Link to="/login"><Button variant="outline" className="">Login</Button></Link>
                  <Link to="/signup"><Button className="text-white bg-[#6A38C2] hover:bg-[#5B30A6]">Sign Up</Button></Link>
                </div>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">

                    <div className="flex gap-2 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Patel MERN Stack</h4>
                        <p className="text-sm text-muted-forground">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>

                    <div className="flex flex-col my-4 text-gray-600">
                      <div className="flex w-fit item-center gap-2 cursor-pointer">
                        <User2 className="my-2" />
                        <Button variant="link">View Profile</Button>
                      </div>
                      <div className="flex w-fit item-center gap-2 cursor-pointer">
                        <LogOut className="my-2" />
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>

                  </PopoverContent>
                </Popover>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
