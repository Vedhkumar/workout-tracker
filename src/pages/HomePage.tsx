import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <main className="px-7 py-3 text-6xl text-blue-500 font-bold ">
      Track your daily workouts here by customising your own workout routine
      <div className="flex justify-center gap-4 pt-5">
        <Button>Create routine</Button>
        <Button>Start workout</Button>
      </div>
    </main>
  );
}

export default HomePage;
