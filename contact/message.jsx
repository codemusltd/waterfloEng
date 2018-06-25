// import React from 'react';

// export const Msg = (props)=>{
//   let labels = props.labels.map((label)=>{
//     return (<span>
//                 <label className={props.labelClassName} size='30'><b>{label}</b></label>
//                 <input className={props.inputClassName} type="text" placeholder={label} maxlength='40' width='30'/> 
//             </span>)
//   });
  
//   return (<div>
//               <div class={props.msgClassName}>
//                   <h2>leave a message &nbsp; 
//                     <span class={props.icon}></span>
//                   </h2>
//               </div>
//               <form>
//                   <span>{labels}</span>
//                   <button className={props.btnClassName}>Send</button>
//               </form>
//       </div>);
// }       
        
// Msg.defaultProps={
//           msgClassName:'w3-container w3-brown w3-padding-16 w3-margin-bottom w3-center',
//           icon:'fa fa-envelope',
//           labels:['first name', 'last name', 'company', 'position', 'country', 'email address', 'telephone number'],
//           labelClassName: 'w3-text-brown',
//           inputClassName: 'w3-input w3-border w3-light-grey w3-margin-bottom',
//           btnClassName: 'w3-btn w3-brown'   
//       };

// ReactDOM.render(
//   <Msg />,
//   document.getElementById('contactForm')
// );