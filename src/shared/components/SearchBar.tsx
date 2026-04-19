import { useEffect, useState } from "react";

interface SearchBarProps {
    buttonTitle: string,
    inputPlaceholder: string,
    onQuery: (query: string) => void;
}

export const SearchBar = ({ buttonTitle, inputPlaceholder, onQuery}: SearchBarProps )  => {
    const [query, setQuery] = useState('');
    const handleSearch = () => { 
        onQuery(query); 
        setQuery('');
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        //handleSearch();
        if (event.key == 'Enter') {
            handleSearch();
        }
    };

    useEffect( () => {
        const timeoutId = setTimeout( () => { onQuery(query); }, 700);
        return () => { clearTimeout(timeoutId); };

    }, [query, onQuery]);


    return (
        <div className = "search-container">
            <input type = "text" placeholder = { inputPlaceholder } 
                onChange = { (event) => setQuery(event.target.value) }
                onKeyDown ={ (event) => handleKeyDown(event) }
            />
            <button onClick = { handleSearch }>{ buttonTitle }</button>
        </div>
    );
}