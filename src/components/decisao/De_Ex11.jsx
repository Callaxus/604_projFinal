export default function De_Ex11(){
    function checkNumber() {
        const num = Number(prompt('Insira nº Inteiro'))

        if (num >= 0)
        {
            alert('Positivo')
        }
        else
        {
            alert('Negativo')
        }
    }

    return <button onClick={checkNumber}>Exercicio 11</button>
}