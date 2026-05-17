import { useState } from "react";

export default function LikeButton (){
    let [isLiked,setIsLiked]= useState(false);
    let toggleLike= ()=>{
        setIsLiked(!isLiked); //  will change true to false visa -versa
    };
    let likeStyle = {color: "red"};
    return (
        <div>

            <p onClick={toggleLike}>
                {isLiked ?(<i className="fa-solid fa-heart" style={likeStyle}></i>):(<i className="fa-regular fa-heart"></i>)}
            </p>
                
        </div>
    );

}