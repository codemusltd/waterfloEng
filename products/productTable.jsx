import React from 'react';

class ProductTable extends React.Component{   

    render(){
        
        return(
            <div id='mainTableContainer' >
                <div id='tableContainer'>
                    <table className={this.props.tableClassName}>
                        <tbody>
                            <tr className={this.props.trClassName}>
                                <td className={this.props.tdKeyClassName}>Supplier</td>
                                <td className={this.props.tdValueClassName}>WaterfLo</td>
                            </tr>
                            <tr className={this.props.trClassName}>
                                <td className={this.props.tdKeyClassName}>Type</td>
                                <td className={this.props.tdValueClassName}>{this.props.type}</td>
                            </tr>
                            <tr className={this.props.trClassName}>
                                <td className={this.props.tdKeyClassName}>Model</td>
                                <td className={this.props.tdValueClassName}>made to customer specification</td>
                            </tr>
                            <tr className={this.props.trClassName}>
                                <td className={this.props.tdKeyClassName}>Dimensions</td>
                                <td className={this.props.tdValueClassName}>to be confirmed on order</td>
                            </tr>
                            <tr className={this.props.trClassName}>
                                <td className={this.props.tdKeyClassName}>Year of manufacture</td>
                                <td className={this.props.tdValueClassName}>manufactured on order</td>
                            </tr>
                            <tr className={this.props.trClassName}>
                                <td className={this.props.tdKeyClassName}>Condition</td>
                                <td className={this.props.tdValueClassName}>brand new</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
      )
    }
} 
  
ProductTable.defaultProps = {
    tableClassName:'w3-table w3-striped w3-bordered w3-padding',
    trClassName:'w3-border-grey w3-bottombar',
    tdKeyClassName:'w3-hover-grey w3-s-caps w3-bolder w3-border-dark-grey w3-rightbar',
    tdValueClassName:'w3-black w3-hover-khaki w3-center w3-text-light-grey'
};

