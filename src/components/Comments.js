import React, {useState} from "react"
import video from "../data/video.js";
import LikesBtn from "./LikesBtn"
import DislikesBtn from "./DislikesBtn"
import RemoveComment from "./RemoveComment.js";

function Comments(){
    const commentsArr = video.comments
    
    const [search, setSearch] = useState("")
    function handleSearchChange(e) {
        setSearch(e.target.value)
    }
    const filterComments = () => commentsArr.filter(comment => comment.user.includes(search))

    console.log(filterComments())
    

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={handleSearchChange}
            />
            <h4>{filterComments().length} Comments</h4>
            {filterComments().map(comment => {
                
                return(
                    <div id={comment.id}>
                        <h5>{comment.user}</h5>
                        <p>{comment.comment}</p>
                        <LikesBtn likes="0"/>
                        <DislikesBtn dislikes="0"/>
                        <RemoveComment/>
                    </div>
            )})}
                
        </div>
    )
}

export default Comments