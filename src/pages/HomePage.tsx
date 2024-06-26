import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main className="py-3 text-6xl font-bold text-blue-500 px-7 h-dvh">
      <section className="max-w-[720px] max-h-[720px]  my-8 sm:my-16 mx-auto flex flex-col justify-center">
        <h1 className="tracking-wide text-left sm:text-center">
          Track your daily workouts here and customising your own workout
          routine.
        </h1>
        <div className="flex items-center justify-center gap-4 pt-5">
          <NavLink to="/create-routine">
            <Button>Create routine</Button>
          </NavLink>
          <NavLink to="/start-workout">
            <Button>Start workout</Button>
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
