import React from 'react';
import ReactDom from 'react-dom';
import SearchResults from './SearchResults';

describe('SearchResults Component', () => {
    it('renders without crashing', () => {
        const record = {
            id: 1,
            title: "Test title",
            composer: "Test composer"
        }
        const div = document.createElement('div');
        ReactDom.render(<SearchResults location={{state: {record}}} record={record} />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});