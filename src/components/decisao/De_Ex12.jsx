export default function De_Ex12(){
    function compare() {
        const n1 = Number(prompt('1º Numero'))
        const n2 = Number(prompt('2º Numero'))

        if (n1 > n2) {
            alert(n1)
        }
        else {
            alert(n2)
        }
    }

    return <button onClick={compare}>Exercicio 12</button>
}