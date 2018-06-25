import {Product} from './products';

const productList = [
  'http://res.cloudinary.com/fatso/image/upload/e_improve/v1523743996/Waterflo/products/12.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743994/Waterflo/products/21.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743993/Waterflo/products/8.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743991/Waterflo/products/11.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743985/Waterflo/products/20.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743983/Waterflo/products/7.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743976/Waterflo/products/10.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743975/Waterflo/products/18.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743969/Waterflo/products/9.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743967/Waterflo/products/5.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743963/Waterflo/products/27.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743962/Waterflo/products/17.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743962/Waterflo/products/4.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743962/Waterflo/products/26.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743950/Waterflo/products/3.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743944/Waterflo/products/25.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743929/Waterflo/products/23.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743929/Waterflo/products/15.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743919/Waterflo/products/22.jpg',
  'http://res.cloudinary.com/fatso/image/upload/v1523743910/Waterflo/products/24.jpg',
];

let num = 0;

class Slider extends React.Component{
    next(){
      let slider = document.getElementById('productImage');
      num++;
      if(num >= productList.length) {
        num = 0;
      }
      slider.src = productList[num]
    }

    prev(){
      let slider = document.getElementById('productImage');
      num--;
      if(num < 0) {
        num = productList.length-1;
      }
      slider.src = productList[num]
    } 
  
    render(){      
        return <Product next={this.next} prev={this.prev}  />
    }
};



ReactDOM.render(
  <Slider />,
  document.getElementById('slider')
);
