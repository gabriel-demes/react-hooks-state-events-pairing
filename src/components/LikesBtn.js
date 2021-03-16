import React, {useState} from "react"

const LikesBtn = props => {
    const [total, increaseTotal] = useState(parseInt(props.likes))
    const handleClick = () => increaseTotal(total +1)

    return(
        <button onClick={handleClick}>{total}👍</button>
    )
}

export default LikesBtn