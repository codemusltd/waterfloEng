import {Product} from './products';

const productList = [];

for(i=1;i<29;i++){
  productList.push({src: `http://res.cloudinary.com/fatso/image/upload/v1523743960/Waterflo/products/${i}.jpg`});
};

let num = 0;

class Slider extends React.Component{
    next(){
      let slider = document.getElementById("slider");
      num++;
      if(num >= productList.length) {
        num = 0;
      }
      slider.src = productList[num].src;
    }

    prev(){
      let slider = document.getElementById("slider");
      num--;
      if(num < 0) {
        num = productList.length-1;
      }
      slider.src = productList[num].src;
    } 
  
    render(){      
        return <Product next={this.next} prev={this.prev}  />
    }
};



// ReactDOM.render(
//   <Slider />,
//   document.getElementById('slider')
// );