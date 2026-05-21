export default function De_Ex17(){
    function removeNao() {
          const phrase = prompt('Insira frase')

        const result = phrase
        .split(' ')
        .filter(word => word !== 'não')
        .join(' ')

        alert(result)
    }

    return <button onClick={removeNao}>Exercicio 17</button>
}