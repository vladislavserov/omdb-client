import React from 'react';
import { Typeahead } from 'react-typeahead';

export default () => {
    // const [selections, setSelections] = useState([]);

    return (
        <Typeahead
            options={['John', 'Paul', 'George', 'Ringo']}
            maxVisible={2}
        />
    );
};
