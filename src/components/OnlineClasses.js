import React from "react"

import OnlineCard from "./OnlineCard"
import OnlineData from "./OnlineData"


function OnlineClasses(){

const OnlineComponents = OnlineData.map(card => <OnlineCard id _title = {card._title} _about = {card._about} _tools = {card._tools} _ul={card._ul} /> )
console.log(OnlineComponents)
    return(
        <div>
            {OnlineComponents}
        </div>

    )

}

export default OnlineClasses
