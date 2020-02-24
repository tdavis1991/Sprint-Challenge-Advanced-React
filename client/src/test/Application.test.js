import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

afterEach(rtl.cleanup);

test('Renders the app', () => {
    const wrapper = rtl.render(<App />)
    wrapper.debug()
});

test('Header renders to screen', () => {
    const { getByTestId } = rtl.render(<App />)

    getByTestId(/Womens world cup/i)
})

