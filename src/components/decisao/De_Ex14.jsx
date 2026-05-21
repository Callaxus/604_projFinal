export default function De_Ex14(){
    function sortNumbers() {
        const arr = [
            Number(prompt('1')),
            Number(prompt('2')),
            Number(prompt('3'))
        ]

        arr.sort((a, b) => a - b)

        alert(arr.join(', '))
    }

    return <button onClick={sortNumbers}>Exercicio 14</button>
}