import React, {useState} from "react";
import Result from "./Result";

function showResult(money, error)
{
    if(money != null)
    {
        return <Result result={money} />;
    }
    else if(error != null)
        return(
            <div className="d-flex flex-column text-dark p-4 mt-2 bg-light rounded">
                <p className="text-danger text-break">{error}</p>
            </div>)
    else
        return <div></div>


}


function MinMaxForm(props)
{
    const [money, setMoney] = useState();
    const [moneyErrorMessage, setMoneyErrorMessage] = useState();

    const handleMoney = (event) => {
        event.preventDefault()
        let name = document.getElementById(props.type).value

        if(name === "")
        {
            setMoney(null)
            setMoneyErrorMessage(null)
            return
        }

        let url = `http://localhost:8080/wallet/${name}/min-max-banknotes-values`;

        if(props.type === "COINS")
            url = `http://localhost:8080/wallet/${name}/min-max-coins-values`;


        const request = new Request(url, {
            method:'GET'
        });

        let status = null
        fetch(request)
            .then(request =>
            {
                status = request.status
                return request.json()
            })
            .then(data =>
            {
                if(status === 200)
                {
                    console.log(data)
                    setMoney(data)
                    setMoneyErrorMessage(null)
                }
                else
                {
                    setMoney(null)
                    setMoneyErrorMessage(data.errorMessage)
                }
            });
    };


    return (
        <article className="d-flex flex-column">
            <div className="text-light text-center">
                <h2>{props.type}</h2>
            </div>
            <div className="d-flex flex-column justify-content-center gap-2">
                <form onSubmit={handleMoney}>
                    <div className="form-group">
                        <label htmlFor="name" className="text-light">name</label>
                        <input type="text" className="form-control" id={props.type} placeholder="name"/>
                    </div>
                </form>
                <div className="d-flex justify-content-center w-100">
                    <button className="btn btn-success" id="customLoginButton" onClick={handleMoney}>SUBMIT</button>
                </div>

            </div>

            <div>{showResult(money, moneyErrorMessage)}</div>
        </article>
    )
}

export default MinMaxForm