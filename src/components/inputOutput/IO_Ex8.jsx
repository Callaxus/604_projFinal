export default function IO_Ex8(){
    const hour = new Date().getHours()

    let message = ''

    if (hour < 12) {
        message = 'Bom dia'
    }
    else if (hour < 18) {
        message = 'Boa tarde'
    }
    else {
        message = 'Boa noite'
    }

    return(
        <h2>{message}</h2>
    )
}