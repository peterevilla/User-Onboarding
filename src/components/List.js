import React, { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";




const List = props => {

console.log(props)
    return(
    

        <div>
            
            {props.userList.map(ele => (

            <p><FaUserCircle/>&nbsp;{ele.name}, Email: {ele.email}</p>
            ))}
        </div>
    )
};

export default List;