export class Staff extends React.Component{ 
    render(){      
        return (
          <div id='containerDiv' className={this.props.containerDivClassName}>
              <h3 className={this.props.h3className}>{this.props.type}</h3>
              <div>
                <button className={this.props.sliderBtnClassName} onClick={this.prev}> Prev </button>  
                <img id='slider' className={this.props.imgClassName} src={this.props.imgSrc} alt={this.props.imgAlt} width={this.props.imgWidth} height={this.props.imgHeight}/>
                <button className={this.props.sliderBtnClassName} onClick={this.next}> Next</button>
              </div>
          </div>
      )
    }
};

Staff.defaultProps={
    imgSrc:'http://res.cloudinary.com/fatso/image/upload/v1523743969/Waterflo/staff/1.jpg',
    imgAlt:'tbc',
    imgWidth:'80%',
    imgHeight:'400',
    imgClassName:'w3-section',
    containerDivClassName:'w3-container w3-center w3-black  w3-border-black w3-leftbar w3-rightbar w3-margin-top w3-padding-32',
    h3className:'w3-black',
    sliderBtnClassName:'w3-black w3-border-black w3-text-lime'
};