import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/App';

test('renders App', () => {
    const { getByText } = render(<App />);

    // hello world should be rendered
    const text = getByText('Hello world');
    expect(text).toBeInTheDocument();
});
