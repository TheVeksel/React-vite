import { useEffect, useState, useCallback } from "react";
import Button from "./button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const respons = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await respons.json();
    setUsers(users);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>

      <Button
        style={{ marginBottom: "20px" }}
        onClick={() => setIsModalOpen(true)}
      >
        Open info
      </Button>

      <Modal open={isModalOpen}>
        <h3>Hello, my name is Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          quia eius veniam quaerat assumenda modi quod ex minus dolorum
          necessitatibus eaque laborum quae aliquam non illo ab, iure
          laboriosam. Expedita.
        </p>
        <Button onClick={() => setIsModalOpen(false)}>Close modal</Button>
      </Modal>
      {loading && <p>loading...</p>}

      {!loading && (
        <>
          <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
            <input className="control" type="text" {...input} />
            Our users
          </h1>
          <ul>
            {users
              .filter((user) =>
                user.name
                  .toLowerCase()
                  .includes(input.value.toLocaleLowerCase())
              )
              .map((user) => (
                <li key={user.id}>Name: {user.name} <br /> Email: {user.email} <br /> {user.company.name} <br /> {user.phone}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
