import React from "react"


const Toggle = ({ isToggled, setIsToggled}) => {
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

export default Toggle;