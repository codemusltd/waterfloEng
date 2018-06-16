export const Email = (props)=>{
    return (<div className={props.className}>
              <p>
                 <span id='phone' class={props.icon}>
                 </span><br/>
                  <span class='w3-communicate w3-small-caps'>{props.method}</span><br/>
                  <span class='w3-communicate'>{props.address}</span><br/>
              </p>
              <p></p>
              <p></p>
           </div>)
   }
   
   Email.defaultProps = {
     icon:'fa fa-envelope',
     className: 'w3-sand w3-text-orange',
     method:'Email us',
     address:'bmadamba11@gmail.com'
   };
   
   
   //email address to be changed