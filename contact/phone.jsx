export const Phone= (props)=>{
    return (<div className={props.className}>
              <p>
                 <span id='phone' class={props.icon}></span><br/>
                  <span class='w3-communicate w3-small-caps'>{props.method}</span><br/>
                  <span class='w3-communicate'>{props.tel}</span><br/>
                  <span class='w3-communicate'>{props.hrs}</span><br/>
              </p>
              <p></p>
              <p></p>
           </div>)
   }
   
   Phone.defaultProps = {
     icon:'fa fa-phone',
     className: 'w3-sand w3-text-orange',
     method:'Call us',
     tel:'+263 77 435 6546',
     hrs: '9.00am - 5.00pm Mon-Fri'
   };