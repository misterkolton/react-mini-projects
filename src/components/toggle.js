import React, {useState} from "react"


export function Toggle () {
    const [ isToggled, setIsToggled] = useState(false)
    const PHOTO_API = "https://picsum.photos/id/983/info"
    console.log(PHOTO_API)
    return (
        <div className="profile-image">
            { isToggled && 
            <img onClick={ () => setIsToggled(!isToggled)}  src="https://picsum.photos/id/983/700" alt=""/>            
            } 
            { isToggled && 
            <p>Click image to colapse.</p>            
            }          
            {/* { isToggled &&
            PHOTO_API
            } */}
            { !isToggled &&
            <img onClick={ () => setIsToggled(!isToggled)}  src="https://picsum.photos/id/983/200" alt=""/>
            }
            { !isToggled &&
            <p>Click image to expand</p>
            }
          
            
        
        </div>
    )
}