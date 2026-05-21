export default function IO_Ex10(){
    function showURL() {
        alert(window.location.href)
    }

    return (
        <button onClick={showURL}>
            URL
        </button>
    )
}