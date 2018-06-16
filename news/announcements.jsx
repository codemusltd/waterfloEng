import React from 'react';

export const Announcement = (props)=>{
    return (<p className={props.className} >
              <span id={props.heading} className={props.headingClassName}>{props.heading} </span>
              {props.announcement}
            </p>)
  };
  
  Announcement.defaultProps={
    id:'announcement',
    heading: 'notice',
    className: 'w3-panel w3-orange w3-text-black w3-padding-large w3-border-red w3-rightbar w3-bottombar',
    headingClassName: 'w3-yellow w3-large w3-red w3-border-red w3-leftbar w3-topbar w3-helvetica w3-small-caps',
    title: ' eg warning',
    msg:' :Biggest Event in the city this year. let\'s do this then!'
  }

//ReactDOM.render(<Announcement/>,document.getElementById('announcement'));


//NEEDS click eventhandler...consider copying Gaza version!!!!
//OR
//https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_panels_close