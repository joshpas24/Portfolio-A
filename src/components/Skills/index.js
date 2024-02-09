import React from "react";
import aws from "./tech-icons/aws.png"
import css from "./tech-icons/css.webp"
import express from "./tech-icons/express.png"
import flask from "./tech-icons/flask.png"
import html from "./tech-icons/html.png"
import js from "./tech-icons/js.png"
import nodejs from "./tech-icons/nodejs.png"
import npm from "./tech-icons/npm.png"
import postgresql from "./tech-icons/postgresql.png"
import python from "./tech-icons/python.webp"
import react from "./tech-icons/react.png"
import redux from "./tech-icons/redux.svg"
import sqlalchemy from "./tech-icons/sqlalchemy.png"
import tailwind from "./tech-icons/tailwind.png"

export default function Skills() {

    return (
        <div className="flex flex-wrap gap-8 justify-center">
            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={aws} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">AWS S3</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={css} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">CSS</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={express} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">Express</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={flask} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">Flask</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={html} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">HTML</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={js} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">JavaScript</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={nodejs} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">Node.js</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={npm} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">npm</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={postgresql} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">PostgreSQL</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={python} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">Python</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={react} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">React</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={redux} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">Redux</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={sqlalchemy} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">SQLAlchemy</h3>
            </div>

            <div className="grid grid-rows-[4fr, 1fr] gap-3 justify-items-center">
                <div className="w-14 h-14 md:h-28 md:w-28 flex items-center">
                    <img src={tailwind} className="w-full object-cover" />
                </div>
                <h3 className="text-sm md:text-lg text-white text-center">Tailwind</h3>
            </div>
        </div>
    )
}
