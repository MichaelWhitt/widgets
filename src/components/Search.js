import axios from "axios";
import React, {useState, useEffect} from "react";


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    
    //console.log(results)
    

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
                        srsearch: term,
                    },
                });
                //takes search array out of data results
                setResults(data.query.search);
            }; 
                //checks if there is default search term in hook, if yes, searches, if no, waits until there is smth then search
                // if (term){
                //     search();
                // }
                search();
                }, [term]);

                const renderedResults = results.map(result => {
                    console.log(result)
                    return (
                        <div key={result.pageid} className="item">
                            <div className="content">
                                <div className="header">
                                    {result.title}
                                </div>
                                {result.snippet}
                            </div>
                        </div>
                    )
                })

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
        <div className="ui celled list">{renderedResults}</div>
    </div>
    )
}

export default Search;