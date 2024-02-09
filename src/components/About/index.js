import React from "react";
import csulb from './csulb-logo.png'
import aa from './appacademy-logo.png'

export default function About() {

    return (
        <div className="flex flex-col gap-6">
            <p className="text-white text-base md:text-lg">Hi, my name is Josh - thanks for stopping by!</p>
            <p className="text-white text-base md:text-lg">
                I'm a full-stack software engineer with a background in finance. My curiousity about investments and global markets is what led me to studying finance during undergrad, but my passion for problem-solving and technology brought me to software development.
            </p>
            <p className="text-white text-base md:text-lg">
                I'm adaptable, well-organized, and a master of leveraging the latest technologies and frameworks to streamline development processes. With a keen eye for detail and a passion for continuous learning, I thrive in collaborative environments where I can contribute my expertise to drive innovation and deliver exceptional results that create a positive impact.
            </p>
            <p className="text-white text-base md:text-lg">
                When I'm not pushing code, you can find me at the gym, hackin' around a golf course, catchin' edges on the slopes, or running around in my local adult soccer league. Die hard Arsenal, 49ers, and Lakers fan. Year-round foodie. Seasonal concert/festival goer. Hanzo main?
            </p>
            <p className="text-white text-base md:text-lg">
                #COYG
            </p>
            <div className="flex flex-col gap-2 mt-6">
                <div className="text-white text-base md:text-lg flex gap-2 items-center">
                    <span className="w-6 flex justify-center"><i class="fa-solid fa-location-dot"></i></span> Orange County, CA
                </div>
                <div className="text-white text-base md:text-lg flex gap-2 items-center">
                    <span>
                        {/* <img src={csulb} className="h-6"/> */}
                        <i class="fa-solid fa-graduation-cap"></i>
                    </span>
                    California State University, Long Beach - Bachelors of Science, Finance
                </div>
                <div className="text-white text-base md:text-lg flex gap-2 items-center">
                    <span>
                        {/* <img src={aa} className="h-7"/> */}
                        <i class="fa-solid fa-graduation-cap"></i>
                    </span>
                    App Academy - Full Stack Web Development
                </div>
            </div>
        </div>
    )
}
