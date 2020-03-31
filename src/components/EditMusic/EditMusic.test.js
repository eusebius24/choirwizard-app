import React from 'react';
import ReactDom from 'react-dom';
import EditMusic from './EditMusic';
import { BrowserRouter } from 'react-router-dom';

describe('EditMusic Component', () => {
    it('renders without crashing', () => {
        const record = {
            id: 1,
            title: "Test title",
            composer: "Test composer"
        }
        const div = document.createElement('div');
        ReactDom.render(
                <BrowserRouter>
                    <EditMusic  />
                </BrowserRouter>
            , div);
        ReactDom.unmountComponentAtNode(div);
    })
});