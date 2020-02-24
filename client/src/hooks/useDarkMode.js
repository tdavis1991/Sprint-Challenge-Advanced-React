import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode(initialValue) {
    const [value, setValue] = useLocalStorage('dark', false)
    

    useEffect(() => {
        const body = document.querySelector('body')
        if(value) {
            body.classList.add('dark-mode')
        }else {
            body.classList.remove('dark-mode')
        }
    })

    return [value, setValue]
}