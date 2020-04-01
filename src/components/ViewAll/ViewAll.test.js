import React from 'react';
import ReactDom from 'react-dom';
import ViewAll from './ViewAll';
import { BrowserRouter } from 'react-router-dom';


describe('ViewAll Component', () => {
    it('renders without crashing', () => {
        const context = {
            records: [
                {
                    id: 1,
                    title: "test title",
                    composer: "test composer",
                    notes: "test notes"
                },
                {
                    id: 2,
                    title: "test title 2",
                    composer: "test composer 2",
                    notes: "test notes 2"
                }
            ]
        }
        const div = document.createElement('div');
        ReactDom.render(
            <BrowserRouter>
                <ViewAll context={{ context }}/>
            </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
    })
});