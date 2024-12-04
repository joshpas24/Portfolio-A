import React from "react";
import webuul from './project-images/webuul.gif'
import vancoubereats from './project-images/vancoubereats.gif'
import clonebnb from './project-images/clonebnb.gif'

export default function Projects() {


    return (
        <div className="flex flex-col gap-8 items-cente">
            <div className="flex flex-col md:px-10 mb-6">
                {/* <img src={webuul} alt="Webuul" className="pb-2"/> */}
                <div className="px-4 my-4 text-white">
                    <div className="flex gap-3 text-lg md:text-2xl items-end pb-2">
                        <a href="https://orderoneat.org/" target="_blank" className="hover:text-blue-500 hover:underline">eat! | Food Access LA</a>
                    </div>
                    <p className="text-sm md:text-base">
                        Web application built for Food Access LA, a non-profit that oversees several farmers' markets in the Los Angeles Metropolitan area.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:px-10 mb-6">
                <img src={webuul} alt="Webuul" className="pb-2"/>
                <div className="px-4 my-4 text-white">
                    <div className="flex gap-3 text-lg md:text-2xl items-end pb-2">
                        <a href="https://webuul.onrender.com/" target="_blank" className="hover:text-blue-500 hover:underline">Webuul</a>
                        <a href="https://github.com/joshpas24/Webuul" target="_blank" className="hover:text-yellow-500">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <p className="text-sm md:text-base">Full stack web application with designs inspired by <span><a href="https://www.webull.com/">Webull</a></span>. Provides real-time market data and allows uses to buy/sell securities to add to their portfolio.</p>
                </div>
            </div>
            <div className="flex flex-col md:px-10">
                <img src={vancoubereats} alt="VancouberEats" className="pb-2"/>
                <div className="px-4 my-4 text-white">
                    <div className="flex gap-3 text-lg md:text-2xl items-end pb-2">
                        <a href="https://vancouvereats.onrender.com/" target="_blank" className="hover:text-blue-500 hover:underline">VancouberEats</a>
                        <a href="https://github.com/EricSapsford/UberEats-Clone" target="_blank" className="hover:text-yellow-500">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <p className="text-sm md:text-base">Food delivery platform that connects users with restaurants, offering convenient and diverse dining options to order from.</p>
                </div>
            </div>
            <div className="flex flex-col md:px-10">
                <img src={clonebnb} alt="Webuul" className="pb-2"/>
                <div className="px-4 my-4 text-white">
                    <div className="flex gap-3 text-lg md:text-2xl items-end pb-2">
                        {/* <a href="https://webuul.onrender.com/" target="_blank" className="hover:text-blue-500 hover:underline">Clonebnb (not deployed)</a> */}
                        <h1>Clonebnb (not deployed)</h1>
                        <a href="https://github.com/joshpas24/CloneBnb" target="_blank" className="hover:text-yellow-500">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <p className="text-sm md:text-base">Travel platform which allows users to explore, list, and book pseudo-accommodations.</p>
                </div>
            </div>
        </div>
    )
}
