import React, { useState, useEffect, Fragment } from "react";
import { Transition } from "@headlessui/react";
import space from '../../backgrounds/space.mp4'
import forest from '../../backgrounds/forest.mp4'
import ocean from '../../backgrounds/ocean.mp4'

export default function VideoBackground({ background }) {
    const [theme, setTheme] = useState(space)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (background === 'space') setTheme(space)
        if (background === 'forest') setTheme(forest)
        if (background === 'ocean') setTheme(ocean)

        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 100);
    }, [background])

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black">
            <video className={`absolute top-0 object-cover h-full w-full ${isVisible ? 'opacity-100 transition-opacity duration-900' : 'opacity-0'}`} autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" src={theme} type="video/mp4" />
        </div>
    )
}
