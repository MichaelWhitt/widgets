import axios from "axios";
import React, {useState, useEffect} from "react";

const Search = () => {

    const [term, setTerm] = useState('Programming');
    const [results, setResults] = useState([]);
    
    

    //have to configure useEffect to tell it WHEN we want our code to be executed (via 2nd argument)
    // opt1: empty array, op2: array with term( and / or other array values- will update if ANY of them have changed) inside of it, opt 3: no array at all
    // will ALWAYS see one of these 3 options.
    useEffect( () => {
        const search = async () => {
                const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                })
                setResults(data.query.results);
                
                
            }; 
                
                search();
            
     
    }, [term]);

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