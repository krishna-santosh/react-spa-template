import { LuMinus, LuPlus } from "react-icons/lu";
import { useCount } from "../store/count";

const Home = () => {
  const { count, incrementCount, decrementCount } = useCount();

  return (
    <div className="grid grid-cols-3 place-items-center gap-5">
      <button
        aria-label="Minus 1"
        className="btn btn-circle btn-secondary"
        onClick={decrementCount}
      >
        <LuMinus className="text-2xl" />
      </button>
      <h1 className="text-4xl">{count}</h1>
      <button
        aria-label="Plus 1"
        className="btn btn-circle btn-secondary"
        onClick={incrementCount}
      >
        <LuPlus className="text-2xl" />
      </button>
    </div>
  );
};

export default Home;
