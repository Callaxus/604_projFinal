import { useState } from "react";

export default function IO5_Ex5(){

    function showConsole() {
        const name = prompt('Name')
        const club = prompt('Football Club')

        console.log(`Eu sou o ${name} e sou adepto do ${club}`)
    }

    return(
        <button onClick={showConsole}>Exercicio 5</button>
    )
}
     