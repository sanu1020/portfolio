import React from "react";
import Contact from './Contact'
import Intro from './Intro';
import Portfolio from './Portfolio';
import Timeline from './Timeline';

function About(){
    return (
        <div>
            <Intro />
			<Portfolio />
        	<Timeline />
			<Contact />
        </div>
    )
}

export default About;