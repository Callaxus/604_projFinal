import { useState } from 'react'

export default function De_Ex13() {
        const [correct, setCorrect] = useState(0)
        const [wrong, setWrong] = useState(0)

        function play() {
        const random = Math.floor(Math.random() * 6) + 1

        const guess = Number(prompt('Adivinhe um nº entre 1 e 6'))

        if (guess === random) {
            setCorrect(correct + 1)
        } else {
            setWrong(wrong + 1)
        }
    }

    return (
        <div>
            <button onClick={play}>Play</button>
            <p>Correct: {correct}</p>
            <p>Wrong: {wrong}</p>
        </div>
    )
}