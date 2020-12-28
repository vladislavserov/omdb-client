import React from 'react';
import axios from 'axios';
import { Typeahead } from 'react-typeahead';
import { useState } from 'react';

// http://www.omdbapi.com/?s=star&apikey=7019ebd8

export default () => {
    const [options, setOptions] = useState([]);

    const handleSearchFieldChange = (event) => {
        const searchValue = event.target.value;
        const apiKey = '7019ebd8';
        const requestStr = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
        axios.get(requestStr).then((response) => {
            if (response.data.Response === 'True') {
                const options = response.data.Search.map(({Title}) => Title);
                setOptions(options);
            }
            console.log(response);
        }, () => {})
    }

    return (
        <Typeahead onKeyUp={handleSearchFieldChange}
            options={options}
            maxVisible={2}
        />
    );
};
