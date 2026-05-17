function printHello (){
    console.log("hello");
}
function PrintBye (){
    console.log("bye");
}
export default function Button (){
    return (
       <div>
        <button onClick={printHello}> click me!</button>
        <p onMouseOver={PrintBye}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores voluptates saepe incidunt animi quae molestias magnam, iste ex molestiae, officiis laudantium sapiente nisi neque deleniti aperiam! Assumenda, libero aliquid!</p>
       </div> 
    );
}