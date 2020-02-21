import React, { useState, useEffect } from 'react';




const List = props => {

console.log(props)
    return(
    

        <ol>

            {props.userList.map(ele => (

            <li>{ele.name}, Email: {ele.email}</li>
            ))}
        </ol>
    )
};

export default List;