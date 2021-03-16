import React, {useState} from "react"

const DislikesBtn = props => {
    const [total, increaseTotal] = useState(parseInt(props.dislikes))
    const handleClick = () => increaseTotal(total +1)

    return(
        <button onClick={handleClick}>{total}👎</button>
    )
}

export default DislikesBtn