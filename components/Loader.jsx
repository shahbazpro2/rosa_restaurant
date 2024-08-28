'use client'
import { useEffect, useState } from 'react';

export default function Loader() {
    const [isLoaderVisible, setLoaderVisible] = useState(true);

    useEffect(() => {
        if (isLoaderVisible) {
            const fadeEffect = setInterval(() => {
                if (isLoaderVisible) {
                    setLoaderVisible(false);
                    clearInterval(fadeEffect);
                }
            }, 100);
        }
    }, [isLoaderVisible]);

    if (!isLoaderVisible) return null

    return <div className="loader-wrap">
        <div className="loader">
            {Array(10)
                .fill()
                .map((_, index) => (
                    <span className="loader-item" key={index}></span>
                ))}
        </div>
    </div>
}
