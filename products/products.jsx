import React from 'react';
import ReactDOM from 'react-dom';
import {productList} from './productTypes';

let num = 0;

class Product extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            type:productList[num].type,
            src:productList[num].src
        };

      this.handlePrev = this.handlePrev.bind(this);
      this.handleNext = this.handleNext.bind(this);
    }
    
    handlePrev(){
        num--;
        if(num < 0) {
            num = productList.length-1;
        }

        this.setState(
            {
                type: productList[num].type,
                src:productList[num].src
            }
        )
    }
    
    handleNext(){
        num++;
        if(num >= productList.length) {
            num = 0;
        }

        this.setState(
            {
                type: productList[num].type,
                src:productList[num].src
            }
        )
    }

    render(){      
        return (
            <div id='containerDiv' className={this.props.containerDivClassName}>
                <ProductImg type={this.state.type} src={this.state.src} prev={this.handlePrev} next={this.handleNext}/>
                <ProductTable type={this.state.type}/>
            </div>
      )
    }
};

Product.defaultProps={
    containerDivClassName:'w3-container w3-center w3-border-dark-grey w3-margin-top w3-padding-32'
};

ReactDOM.render(
    <Product />,
    document.getElementById('slider')
  );