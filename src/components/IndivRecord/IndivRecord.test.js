import React from 'react';
import ReactDom from 'react-dom';
import IndivRecord from './IndivRecord';

describe('IndivRecord Component', () => {
    const record = {
        id: 1,
        title: "Test title",
        composer: "Test composer"
    }
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<IndivRecord location={{state: {record}}} record={record} />, div);
        ReactDom.unmountComponentAtNode(div);
    })
});