import { useState } from "react"

export default function IO4_Ex4(){


    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [result, setResult] = useState("");

    const message = () => {
        setResult(`O Formando ${name} tem ${age} anos`);
    };
    
    return(
        <div>
            <h2> Exercicio 4</h2>
            <input 
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <br/>
            <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
            />
            <br/>
            <button onClick={message}>
                Mostrar mensagem
            </button>
            <p>{result}</p>
        </div>
    );
}