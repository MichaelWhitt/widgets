import axios from "axios";
import React, {useState, useEffect} from "react";


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    
    //console.log(results)
    

    //have to configure useEffect to tell it WHEN we want our code to be executed (via 2nd argument)
    // opt1: [], op2: [term1,term2, 1, "hello"], opt 3: nothing
    // will ALWAYS see one of these 3 options.
    // below: invoke arrow func initial render and when [term] gets changed 
    // can only return another function - > good place to run Cleanup functions (cancelTimeout for ex)
    // function is returned on useEffect invoke, then once it's called again, first the return runs, then useEffect again.
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
                const timeoutId = setTimeout(()=>{
                    if (term){
                        search()
                    }
                }, 500);

                return () => {
                    clearTimeout(timeoutId)
                }
                
                }, [term]);
                

                const renderedResults = results.map(result => {
                    console.log(result)
                    return (
                        <div key={result.pageid} className="item">
                            <div className="right floated content">
                                <a 
                                className="ui button"
                                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                                >Go</a>
                            </div>
                            <div className="content">
                                <div className="header">
                                    {result.title}
                                </div>
                                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                                
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