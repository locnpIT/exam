// class component
// function component

import React from "react";

class MyComponent extends React.Component  {
    //JSX chỉ có react mới có
    render(){
        return(
            <div>
                my first component
                {Math.random()}
            </div>
        );
    }

}

export default MyComponent;