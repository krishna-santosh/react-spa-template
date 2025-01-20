import { useCount } from "../store/count";

const About = () => {
  const count = useCount((state) => state.count);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-thin md:text-6xl">React SPA Template</h1>
        <p className="text-sm md:text-base">
          ~ by{" "}
          <a className="link" href="https://krish.fyi" target="_blank">
            krish.fyi
          </a>
        </p>
      </div>
      <p className="text-2xl font-light">Comes with...</p>
      <ul className="list-disc pl-8 text-lg">
        <li>React (TS + SWC) </li>
        <li>React Router </li>
        <li>Zustand </li>
        <li>Tailwind CSS </li>
        <li>DaisyUI </li>
        <li>React Icons</li>
        <li>PWA</li>
        <li>Vite, ESLint, Prettier </li>
      </ul>
      <p className="text-2xl font-light">and count's {count} btw</p>
    </div>
  );
};

export default About;
