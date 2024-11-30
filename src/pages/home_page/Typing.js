import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: "Software Engineer",
                stay: 200000,
                autoStart: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
