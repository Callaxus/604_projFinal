export default function De_Ex15(){
    function closest() {
        const nums = [
        Number(prompt('1')),
        Number(prompt('2')),
        Number(prompt('3'))
        ]

        let closest = nums[0]

        nums.forEach(num => {
            if (Math.abs(100 - num) < Math.abs(100 - closest)) {
                closest = num
        }
        })

        alert(closest)
        }

    return <button onClick={closest}>Exercise 15</button>
}