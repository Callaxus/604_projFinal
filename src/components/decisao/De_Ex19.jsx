export default function De_Ex19() {
  function reverse() {
    const phrase = prompt('Frase:')

    alert(phrase.split('').reverse().join(''))
  }

  return <button onClick={reverse}>Exercise 19</button>
}
