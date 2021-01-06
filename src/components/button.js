import { useState, useEffect } from "react";

export default function Button(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = "yellow";
  });

  return (
    <>
      <p>Voce clicou {count} vezes</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clique Me, {props.name}
      </button>
    </>
  );
}
