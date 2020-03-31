import React from 'react';
import ReactDom from 'react-dom';
import AddMusic from './AddMusic';

describe('AddMusic Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<AddMusic />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});