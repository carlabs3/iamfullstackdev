import { useState } from "react";

function InputCreate() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!title.trim()) return;

    await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setMessage(`Tarea "${title}" añadida!`);
    setTitle("");
  };

  return (
    <div>
      <h2>Crear nueva tarea</h2>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Enviar</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default InputCreate;
