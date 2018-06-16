export class Service extends React.Component{
    render(){      
        return (
          <div id='containerDiv' className={this.props.containerDivClassName}>
              <h3 className={this.props.h3className}>{this.props.type}</h3>
              <div>
                <button className={this.props.sliderBtnClassName} onClick={this.prev}> Prev </button>  
                <img id='slider' className={this.props.imgClassName} src={this.props.imgSrc} alt={this.props.imgAlt} width={this.props.imgWidth} height={this.props.imgHeight}/>
                <button className={this.props.sliderBtnClassName} onClick={this.next}> Next</button>
              </div>
              <button className={this.props.dgBtnClassName}>Type</button>
              <button className={this.props.blackBtnClassName}>{this.props.type}</button>
              <button className={this.props.blackBtnClassName}>Length</button>
              <button className={this.props.dgBtnClassName}>{this.props.length}</button>
              <button className={this.props.dgBtnClassName}>Year</button>
              <button className={this.props.blackBtnClassName}>{this.props.year}</button>
          </div>
      )
    }
};

Service.defaultProps={
    imgSrc:'http://res.cloudinary.com/fatso/image/upload/v1523743969/Waterflo/services/1.jpg',
    imgAlt:'tbc',
    imgWidth:'80%',
    imgHeight:'400',
    imgClassName:'w3-section',
    type:'cannal',
    length:'tbc',
    year:'2018',
    containerDivClassName:'w3-container w3-center w3-black  w3-border-dark-grey w3-margin-top w3-padding-32',
    h3className:'w3-dark-grey',
    blackBtnClassName:'w3-button w3-black w3-text-silver w3-half',
    dgBtnClassName:'w3-button w3-dark-grey w3-half',
    sliderBtnClassName:'w3-dark-grey w3-border-black'
};