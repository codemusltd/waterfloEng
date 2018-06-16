import {Staff} from './staff';

const staffList = [];

for(i=1;i<14;i++){
    staffList.push({src: `http://res.cloudinary.com/fatso/image/upload/v1523744271/Waterflo/staff/${i}.jpg`});  
};

let num = 0;

class Slider extends React.Component{
    next(){
      let slider = document.getElementById("slider");
      num++;
      if(num >= staffList.length) {
        num = 0;
      }
      slider.src = staffList[num].src;
    }

    prev(){
      let slider = document.getElementById("slider");
      num--;
      if(num < 0) {
        num = staffList.length-1;
      }
      slider.src = staffList[num].src;
    } 
  
    render(){      
        return <Staff next={this.next} prev={this.prev}/>
    }
};

// ReactDOM.render(
//   <Slider/>,
//   document.getElementById('staff')
// );