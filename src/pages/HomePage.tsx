import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main className="py-3 text-6xl font-bold text-blue-500 px-7 ">
      Track your daily workouts here by customising your own workout routine
      <div className="flex justify-center gap-4 pt-5">
        <NavLink to="/create-routine">
          <Button>Create routine</Button>
        </NavLink>
        <Button>Start workout</Button>
      </div>
    </main>
  );
}

export default HomePage;
