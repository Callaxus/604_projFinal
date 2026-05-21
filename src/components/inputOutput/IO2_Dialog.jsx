export default function IO2_Dialog(){
    const handleConfirm = () =>{
        const result = confirm(" Deseja continuar a realizar os exercicios? ");
        if (result){
            alert("Bem escolhido!");}
        else{
            alert("ja chega por hoje");
        }
    };
    
    return(
        <div>
            <h2>Exercicio 2</h2>
            <button onClick={handleConfirm}>
                Mostrar
            </button>
        </div>
    );

}

