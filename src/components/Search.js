import React, {useState} from "react";

const Search = () => {

    const [term, setTerm] = useState('');

    return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term: </label>
                <h6>{term}</h6>
                <input 
                value={term}
                onChange={e => setTerm(e.target.value)}
                className="input"
                ></input>
            </div>
        </div>
    </div>
    )
}

export default Search;