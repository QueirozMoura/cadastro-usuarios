import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard.jsx";

function App() {
  const [name, setName] = useState("Gustavo");
  const [email, setEmail] = useState("gustavo@email.com");
  const [telefone, setTelefone] = useState("11999999999");
  const [users, setUsers] = useState([]);

  let valorInput = "Gustavo";
  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name,
      email,
      telefone,
      id: Date.now(),
    };

    setUsers([...users, newUser]);

    console.log(event);
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Nome"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setTelefone(e.target.value)}
          value={telefone}
          type="number"
          placeholder="Telefone"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            telefone={user.telefone}
          />
        ))}

        <p></p>
      </div>
    </div>
  );
}

export default App;
