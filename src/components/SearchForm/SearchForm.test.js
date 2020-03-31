import React from 'react';
import ReactDom from 'react-dom';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<SearchForm />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});