export const Visit = (props)=>{
    return (<div className={props.className}>
              <p>
                 <span id='phone' class={props.icon}>
                 </span><br/>
                  <span class='w3-communicate w3-small-caps'>{props.method}</span><br/>
                  <span class='w3-communicate'>{props.adress}</span><br/>
              </p>
              <p></p>
              <p></p>
           </div>)
   }
   
   Visit.defaultProps = {
     icon:'fa fa-hand-o-right',
     className: 'w3-sand w3-text-orange',
     method:'Visit us',
     adress:'9 Spur Road Ardbennie, Harare, Zimbabwe'
   };