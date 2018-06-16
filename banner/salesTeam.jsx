import React from 'react';

export const SalesTeam = (props)=>{
    return (<div id={props.id} class={props.className}>
              {props.street}<br/>
              {props.city}<br/>
              {props.tel}<br/>  
            </div>)
};
  
SalesTeam.defaultProps = {
    id: 'salesTeam',
    className:'w3-panel s12 m6 l2 w3-text-white w3-silver',
    street:'9 Spur Road Ardbennie',
    city:'Harare, Zimbabwe',
    tel:'+263 77 435 6546'
}

ReactDOM.render(<SalesTeam />, document.getElementById('salesTeamContainer'));