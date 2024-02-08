import React, { useState, useEffect } from "react";
import space from '../../backgrounds/space.mp4'
import forest from '../../backgrounds/forest.mp4'
import ocean from '../../backgrounds/ocean.mp4'

export default function VideoBackground({ background }) {
    const [theme, setTheme] = useState(space)

    useEffect(() => {
        if (background === 'space') setTheme(space)
        if (background === 'forest') setTheme(forest)
        if (background === 'ocean') setTheme(ocean)
    }, [background])

    return (
        <video className='absolute top-0 object-cover h-full w-full' autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" src={theme} type="video/mp4" />
    )
}
