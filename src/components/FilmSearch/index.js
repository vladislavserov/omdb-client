import React, { useState } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-typeahead';
import { useHistory } from 'react-router-dom';
import { omdbApiKey } from '../../config';

export default () => {
    const history = useHistory();
    const [options, setOptions] = useState([]);

    const handleSearchFieldChange = (event) => {
        const searchValue = event.target.value;
        const requestStr = `http://www.omdbapi.com/?s=${searchValue}&apikey=${omdbApiKey}`;
        axios.get(requestStr).then((response) => {
            if (response.data.Response === 'True') {
                const options = response.data.Search.map(({Title , imdbID}) => ({ title: Title , imdbId: imdbID }));
                setOptions(options);
            }
        })
    }

    const handleOptionSelected = ({ imdbId }) => {
        history.push(`/film/${ imdbId }`);
    }

    return (
        <Typeahead onKeyUp={handleSearchFieldChange}
            onOptionSelected={handleOptionSelected}
            filterOption={'title'}
            displayOption={'title'} 
            options={options}
            maxVisible={6}
            
        />
    );
};
