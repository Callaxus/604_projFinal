export default function De_Ex18(){
  function countNumbers() {
    const phrase = prompt('Insira frase')

    let count = 0

    for (let char of phrase) {
      if (!isNaN(char) && char !== ' ') {
        count++
      }
    }

    alert(count)
  }

  return <button onClick={countNumbers}>Exercicio 18</button>
}