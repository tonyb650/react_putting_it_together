import React, { useState } from "react";

const PersonName = (props) => {
    const [aCount, setACount] = useState(props.count);
    
    return (
        <div>
            Hello, {props.name}
            {aCount}
            <button onClick={(event) => {
                setACount(aCount+1);
                console.log(aCount)
            }
            }>Add 1</button>
        </div>
    )

}

export default PersonName;