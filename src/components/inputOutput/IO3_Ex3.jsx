import { useState } from "react"; 

export default function IO3_Ex3(){

    const [message, setMessage] = useState("");

    const handlePrompt = () => {
        const name =  prompt(" Introduza o seu nome: ");
        if (name !== null ){
            setMessage(`O formando ${name} está aprovado!`);
        }
    };

    return(
        <div>
            <h2>Exercicio 3</h2>

            <button onClick={handlePrompt}>
                Mostrar Ex3
            </button>

            <p>{message}</p>

        </div>
    );

};