import {Service} from './services';

const serviceList = [];

for(i=1;i<41;i++){
  serviceList.push({src: `http://res.cloudinary.com/fatso/image/upload/v1523744271/Waterflo/services/${i}.jpg`});
  
  
};

let num = 0;

export class Slider extends React.Component{
    next(){
      let slider = document.getElementById("slider");
      num++;
      if(num >= serviceList.length) {
        num = 0;
      }
      slider.src = serviceList[num].src;
    }

    prev(){
      let slider = document.getElementById("slider");
      num--;
      if(num < 0) {
        num = serviceList.length-1;
      }
      slider.src = serviceList[num].src;
    } 
  
    render(){      
        return <Service next={this.next} prev={this.prev}  />
    }
};



// ReactDOM.render(
//   <Slider />,
//   document.getElementById('services')
// );