export default function De_Ex16(){
    function grade() {
    const value = Number(prompt('Nota'))

    let result = ''

        if (value <= 5) {
            result = 'Muito insuficiente'
        } else if (value <= 9.5) {
            result = 'Insuficiente'
        } else if (value <= 14) {
            result = 'Suficiente'
        } else if (value <= 16) {
            result = 'Bom'
        } else {
            result = 'Muito bom'
        }

        alert(result)
    }

    return <button onClick={grade}>Exercicio 16</button>
}