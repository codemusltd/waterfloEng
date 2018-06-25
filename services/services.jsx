export class Service extends React.Component{
  
    render(){      
        return (
            <div id='containerDiv' className={this.props.containerDivClassName}>
                <div id='serviceImageContainer'>
                    <button className={this.props.sliderBtnClassName} onClick={this.props.prev}> Prev </button>  
                    <img id='serviceImage' className={this.props.imgClassName} src={this.props.imgSrc} alt={this.props.imgAlt} width={this.props.imgWidth} height={this.props.imgHeight}/>
                    <button className={this.props.sliderBtnClassName} onClick={this.props.next}> Next</button>
                </div>
                <button className={this.props.dgBtnClassName}>Service</button>
                <button className={this.props.blackBtnClassName}>{this.props.service}</button>
                <button className={this.props.blackBtnClassName}>Year</button>
                <button className={this.props.dgBtnClassName}>{this.props.year}</button>
            </div>
      )
    }
};

Service.defaultProps={
    imgSrc:'http://res.cloudinary.com/fatso/image/upload/v1523744298/Waterflo/services/27.jpg',
    imgAlt:'tbc',
    imgWidth:'60%',
    imgHeight:'400',
    imgClassName:'w3-section',
    service:'tbc',
    year:'2018',
    containerDivClassName:'w3-container w3-center w3-white w3-border-dark-grey w3-margin-top w3-padding-32',
    blackBtnClassName:'w3-button w3-black w3-text-dark-grey w3-half',
    dgBtnClassName:'w3-button w3-dark-grey w3-half ',
    sliderBtnClassName:'w3-dark-grey w3-border-black'
};