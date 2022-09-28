import React from 'react';
import MinMaxForm from "./MinMaxForm";

function App(props)
{
    return(
            <div className="d-flex justify-content-evenly p-4">
                <MinMaxForm type="BANKNOTES"></MinMaxForm>
                <MinMaxForm type="COINS"></MinMaxForm>
            </div>
        )
}

export default App;
