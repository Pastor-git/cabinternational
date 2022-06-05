import React from "react";

function GeneralGrives() {
    console.log("Hello there!");
};

function List (props) {
 return (
     <div>
         <button id="testbutton" onClick={GeneralGrives}>Click me!</button></div>
 );
}

export default List;