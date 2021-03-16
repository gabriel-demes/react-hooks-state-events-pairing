import React, {useState} from "react"
import video from "../data/video.js";
import Comments from "./Comments"
import DislikesBtn from "./DislikesBtn.js";
import LikesBtn from "./LikesBtn.js";

function VideoInfo(){

    const [combtn, setCombtn] = useState(false)
    const isHidden = () => (!combtn ? "Hide" : "Show")
    const hideComments = () => setCombtn(!combtn)


    return(
        <div>
            <h2>{video.title}</h2>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <LikesBtn likes={video.upvotes}/>
            <DislikesBtn dislikes={video.downvotes}/>
            <br></br>
            <button onClick={hideComments}>{isHidden()} Comments</button>
            {!combtn ? <Comments/> : null}
        </div>
    )
    }

export default VideoInfo