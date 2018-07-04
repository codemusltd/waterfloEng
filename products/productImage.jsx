import React from 'react';

class ProductImg extends React.Component{
  
    render(){      
        return (
          <div id='productImageContainer'>
            <button className={this.props.sliderBtnClassName} onClick={this.props.prev}> <i className="fa fa-arrow-left w3-text-light-grey" aria-hidden="true"></i> </button> 
            <img id='productImage' className={this.props.imgClassName} src={this.props.src} alt={this.props.type} width={this.props.imgWidth} height={this.props.imgHeight}/>
            <button className={this.props.sliderBtnClassName} onClick={this.props.next}> <i className="fa fa-arrow-right w3-text-light-grey" aria-hidden="true"></i></button>
          </div>
      )
    }
};

ProductImg.defaultProps={
    imgWidth:'60%',
    imgHeight:400,
    imgClassName:'w3-section',
};