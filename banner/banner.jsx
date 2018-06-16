import React from 'react';
  
export const Banner = (props)=>{
    return (<p className={props.className}>
                <span className={props.greetingClassName}>                             
                  {props.greeting}
                </span>{props.company}
            </p>)
};
  
Banner.defaultProps = {
    className: 'w3-panel w3-silver w3-text-orange',
    company:'WaterFlo Engineering',
    greeting:'Welcome to ',
    greetingClassName:'w3-text-blue-grey'
}

ReactDOM.render(<Banner />, document.getElementById('bannerContainer'));