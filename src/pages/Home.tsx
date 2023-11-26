import { Minus, Plus } from "lucide-react";
import { useCount } from "../store/count";

const Home = () => {
  const { count, incrementCount, decrementCount } = useCount();

  return (
    <div className="grid grid-cols-3 place-items-center gap-5">
      <button
        aria-label="Minus 1"
        className="btn btn-secondary"
        onClick={decrementCount}
      >
        <Minus />
      </button>
      <h1 className="text-4xl">{count}</h1>
      <button
        aria-label="Plus 1"
        className="btn btn-secondary"
        onClick={incrementCount}
      >
        <Plus />
      </button>
    </div>
  );
};

export default Home;
