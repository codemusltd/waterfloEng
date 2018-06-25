export class Product extends React.Component{
  
    render(){      
        return (
            <div id='containerDiv' className={this.props.containerDivClassName}>
                <div id='productImageContainer'>
                    <button className={this.props.sliderBtnClassName} onClick={this.props.prev}> Prev </button>  
                    <img id='productImage' className={this.props.imgClassName} src={this.props.imgSrc} alt={this.props.imgAlt} width={this.props.imgWidth} height={this.props.imgHeight}/>
                    <button className={this.props.sliderBtnClassName} onClick={this.props.next}> Next</button>
                </div>
                <button className={this.props.dgBtnClassName}>Product</button>
                <button className={this.props.blackBtnClassName}>{this.props.type}</button>
                <button className={this.props.blackBtnClassName}>Make</button>
                <button className={this.props.dgBtnClassName}>{this.props.make}</button>
                <button className={this.props.dgBtnClassName}>Model</button>
                <button className={this.props.blackBtnClassName}>{this.props.model}</button>
                <button className={this.props.blackBtnClassName}>Year</button>
                <button className={this.props.dgBtnClassName}>{this.props.year}</button>
                <button className={this.props.dgBtnClassName}>Condition</button>
                <button className={this.props.blackBtnClassName}>{this.props.condition}</button>
            </div>
      )
    }
};

Product.defaultProps={
    imgSrc:'http://res.cloudinary.com/fatso/image/upload/e_improve/v1523743996/Waterflo/products/12.jpg',
    imgAlt:'tbc',
    imgWidth:'60%',
    imgHeight:'400',
    imgClassName:'w3-section',
    type:'pipe',
    make:'tbc',
    model: 'not specified',
    year:'2018',
    condition: 'used',
    containerDivClassName:'w3-container w3-center w3-white w3-border-dark-grey w3-margin-top w3-padding-32',
    blackBtnClassName:'w3-button w3-black w3-text-dark-grey w3-half',
    dgBtnClassName:'w3-button w3-dark-grey w3-half ',
    sliderBtnClassName:'w3-dark-grey w3-border-black'
};