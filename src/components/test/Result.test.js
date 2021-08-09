import {render, screen} from '@testing-library/react';
import Result from '../results/index';
import '@testing-library/jest-dom/extend-expect';

it('Should render results', () => {
    const data = {
        Headers:{
        'content-type': 'string application/json',
        },
        count: 2,
        results: [
            {name: 'fake thing 1', url: 'http://fakethings.com/1'},
            {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        ],
    };
    render(<Result data={data} />);
    const items = screen.getByTestId('results');
    expect(items).toHaveTextContent('{ "Headers": { "content-type": "string application/json" }, "count": 2, "results": [ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ] }');
});
// expect(items,results).toHaveLength(2);
//     expect(items).toContainHTML(
//         `<pre data-testid="renderedData">{
//   "Headers": {
//     "content-type": "string application/json"
//   },
//   "count": 2,
//   "results": [
//     {
//       "name": "fake thing 1",
//       "url": "http://fakethings.com/1"
//     },
//     {
//       "name": "fake thing 2",
//       "url": "http://fakethings.com/2"
//     }
//   ]
// }</pre>`);
// expect(items[1]).toHaveTextContent('Darth Vader');