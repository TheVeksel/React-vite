import WayToTeach from "./WayToTeach";
import { ways, Way } from "../data";

export default function TeachingSection():JSX.Element {
  return(
    <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way:Way) => {
              return <WayToTeach key={way.title} {...way} />;
            })}
          </ul>
        </section>
  )
}