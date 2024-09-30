import Button from "./button/Button";
import {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
} from "react";

interface FormState {
  name: string;
  hasError: boolean;
  reason: string;
}

function StateVsRef(): ReactElement {
  const input = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setShow(false);
      setTimeout(() => setShow(true), 0);
    }
  }

  return (
    <div>
      <h3>input value: {show && input.current?.value}</h3>
      <input
        ref={input}
        className="control"
        type="text"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedBackSection(): ReactElement {
  const [form, setForm] = useState<FormState>({
    name: "",
    hasError: true,
    reason: "",
  });

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  return (
    <section>
      <h3>Feedback</h3>
      <form>
        <label htmlFor="name">Type your name</label>
        <input
          className="control"
          type="text"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : undefined,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason"></label>
        <select
          className="control"
          id="reason"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value=""></option>
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggestion</option>
        </select>
        <Button
          disabled={form.hasError}
          isActive={!form.hasError}
          className="control"
          style={{ marginBottom: "1rem" }}
        >
          Send
        </Button>
        <pre style={{ marginBottom: "1rem" }}>
          {JSON.stringify(form, null, 2)}
        </pre>

        <hr style={{ marginBottom: "1rem" }} />

        <StateVsRef />
      </form>
    </section>
  );
}
