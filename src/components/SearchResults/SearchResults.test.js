import React from 'react';
import ReactDom from 'react-dom';
import SearchResults from './SearchResults';

describe('SearchResults Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<SearchResults />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});