import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RoutineInput() {
  return (
    <div className="flex flex-col gap-3 ">
      <RoutineTitle />
      <MuscleGroupToTrain />
      {/* <AddWorkout/> */}
      <Button className="fixed bottom-5 right-4">
        <Link to="/start-workout">Create</Link>
      </Button>
    </div>
  );
}

function RoutineTitle() {
  return (
    <div>
      <Label htmlFor="name" className="font-bold">
        Routine Title
      </Label>
      <Input id="name" placeholder="Push day, Back, Arms  " />
    </div>
  );
}

function MuscleGroupToTrain() {
  const muscleGroup = [
    "Back",
    "Chest",
    "Lower arms",
    "Lower legs",
    "Neck",
    "Shoulders",
    "Upper arms",
    "Upper legs",
    "Waist",
  ];

  return <WoroutPopover title="Muscles to train" data={muscleGroup} />;
}

function AddWorkoutBlock() {
  // return <WoroutPopover title="Add Workout" />;
}

function WoroutPopover({ title, data }) {
  const [selected, setSelected] = useState([]);
  console.log(data);

  return (
    <div>
      <Label htmlFor="add-workout" className="font-bold">
        {title}
      </Label>
      <Card id="add-workout" className="p-2">
        <CardContent className="inline-block">
          {selected && selected.length
            ? selected.map((ea) => (
                <span className="p-2 mx-1 rounded-sm bg-slate-300">{ea}</span>
              ))
            : null}
        </CardContent>
        <Popover>
          <PopoverTrigger className="p-2 font-bold text-white rounded-full bg-slate-950">
            +
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command>
              <CommandInput placeholder="Search workout ..." />
              <CommandList>
                <ScrollArea className="w-full h-72">
                  <CommandEmpty>No results found.</CommandEmpty>
                  {data.map((each: string, i) => {
                    return (
                      <CommandGroup>
                        <li
                          key={i}
                          className="p-1 pl-2 text-sm capitalize list-none rounded-sm cursor-pointer hover:bg-slate-100 "
                          onClick={() => setSelected((pre) => [...pre, each])}
                        >
                          {each}
                        </li>
                      </CommandGroup>
                    );
                  })}
                  <CommandSeparator />
                </ScrollArea>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </Card>
    </div>
  );
}
export default RoutineInput;
