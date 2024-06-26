import { Link } from "react-router-dom";

function Routine() {
  return (
    <>
      {/* Map over the user routines */}
      {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => (
        <EachRoutine key={num} />
      ))}
    </>
  );
}

function EachRoutine() {
  return (
    <section className="col-span-12 p-2 bg-orange-500 rounded-sm lg:col-span-4 sm:col-span-6 h-[170px]  relative">
      <h3>Title of routine</h3>
      <button className="absolute px-2 py-1 rounded-sm right-3 bottom-3 bg-slate-500">
        <Link to={`/start-workout/chest`}>Workout</Link>
      </button>
    </section>
  );
}

export default Routine;
