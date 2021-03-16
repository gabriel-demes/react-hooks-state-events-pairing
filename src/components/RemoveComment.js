import React, {userState} from "react"


const RemoveComment = () => {

    return(
        <button onClick={event => {event.target.parentElement.remove()}}>Remove Comment</button>
    )
}

export default RemoveComment