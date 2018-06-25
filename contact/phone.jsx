export const Phone= (props)=>{
    return (<div className={props.className}>
              <p>
                <span id='phone' class={props.icon}></span><br/>
                  <span class='w3-communicate w3-blue-grey w3-round-medium'>{props.method}</span><br/>
                  <span class='w3-communicate'>{props.tel}</span><br/>
                  <span class='w3-communicate'>{props.hrs}</span><br/>
              </p>
          </div>)
  }
  
  Phone.defaultProps = {
    icon:'fa fa-phone',
    className: 'w3-parent w3-sand w3-text-orange w3-margin w3-mobile',
    method:'Call us',
    tel:'+263 77 435 6546',
    hrs: '9.00am - 5.00pm Mon-Fri'
  };