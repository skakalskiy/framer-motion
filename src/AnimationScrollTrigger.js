import React from "react";
import Box from "./Box";

function AnimationScrollTrigger() {

    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center'
            }}        
        >
            <h2>React Scroll Animation framer-motion</h2>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
        </div>
    )

}
export default AnimationScrollTrigger;


