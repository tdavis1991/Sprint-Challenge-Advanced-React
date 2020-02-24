import React from 'react';
import { useDarkMode } from './useDarkMode';

export function DarkButton() {
    const [value, setValue] = useDarkMode(false)

    const darkMode = () => {
        setValue(!value)
    }

    return (
        <>
            <button onClick={darkMode}>Dark Mode</button>
        </>
    )
}