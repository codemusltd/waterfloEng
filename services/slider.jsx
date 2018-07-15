import {Service} from './services';

const serviceList = [
  'http://res.cloudinary.com/fatso/image/upload/v1523744319/Waterflo/services/28.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744314/Waterflo/services/36.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744312/Waterflo/services/31.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744312/Waterflo/services/32.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744310/Waterflo/services/35.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744305/Waterflo/services/29.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744302/Waterflo/services/25.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744298/Waterflo/services/27.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744291/Waterflo/services/26.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744287/Waterflo/services/23.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744285/Waterflo/services/24.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744281/Waterflo/services/22.jpg',
  'http://res.cloudinary.com/fatso/image/upload/q_auto/a_90/v1523744197/Waterflo/services/38.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744274/Waterflo/services/21.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744271/Waterflo/services/17.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744215/Waterflo/services/39.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744266/Waterflo/services/19.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744266/Waterflo/services/15.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744265/Waterflo/services/18.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744256/Waterflo/services/16.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744253/Waterflo/services/14.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744249/Waterflo/services/13.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744242/Waterflo/services/11.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744236/Waterflo/services/40.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744236/Waterflo/services/10.jpg',
  'http://res.cloudinary.com/fatso/image/upload/a_90/v1523744231/Waterflo/services/37.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523744320/Waterflo/services/34.jpg'
];

let num = 0;

class Slider extends React.Component{
    next(){
      let slider = document.getElementById('serviceImage');
      num++;
      if(num >= serviceList.length) {
        num = 0;
      }
      slider.src = serviceList[num]
    }

    prev(){
      let slider = document.getElementById('serviceImage');
      num--;
      if(num < 0) {
        num = serviceList.length-1;
      }
      slider.src = serviceList[num]
    } 
  
    render(){      
        return <Service next={this.next} prev={this.prev}  />
    }
};



ReactDOM.render(
  <Slider />,
  document.getElementById('slider')
);
