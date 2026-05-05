export default function IO1_Alert() {
  const handleClick = () => {
    alert("É preciso fazer todos os exercícios para aprender");
  };

  return (
    <button onClick={handleClick}>
      Exercício 1
    </button>
  );
}