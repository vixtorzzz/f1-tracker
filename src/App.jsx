import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center bg-blue-100 h-full gap-4">
      <h1>Olá, meus amigos!</h1>
      <button
        type="button"
        className="cursor-pointer bg-amber-200 hover:bg-amber-300 active:scale-110 transition-transform duration-15 p-6 rounded-2xl"
        onClick={() => setCount((count) => count + 1)}
      >
        Você clicou aqui {count} vezes!
      </button>
    </div>
  );
}

export default App;
