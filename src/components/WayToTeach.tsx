import { Way } from "../data";

export default function WayToTeach({ title, description }: Way): JSX.Element {
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
