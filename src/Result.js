import React, {useState} from 'react';



function Result(props){

    return (
        <div className="d-flex flex-column text-dark p-4 mt-2 bg-light rounded">
            <p>Name: <span>{props.result.name}</span></p>
            <p>Count of banknotes: <span>{props.result.count}</span></p>
            <p>Min: <span>{props.result.min}</span></p>
            <p>Max: <span>{props.result.max}</span></p>
        </div>

    )
}

export default Result