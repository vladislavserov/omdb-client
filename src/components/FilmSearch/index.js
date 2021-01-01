import React from 'react';
import axios from 'axios';
import { Typeahead } from 'react-typeahead';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// http://www.omdbapi.com/?s=star&apikey=7019ebd8

export default () => {
    const history = useHistory();
    const [options, setOptions] = useState([]);

    const handleSearchFieldChange = (event) => {
        const searchValue = event.target.value;
        const apiKey = '7019ebd8';
        const requestStr = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
        axios.get(requestStr).then((response) => {
            if (response.data.Response === 'True') {
                const options = response.data.Search.map(({Title , imdbID}) => ({ title: Title , imdbId: imdbID }));
                setOptions(options);
            }
            console.log(response);
        }, () => {})
    }

    const handleOptionSelected = ({ imdbId }) => {
        // console.log(event);
        // redirect
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
