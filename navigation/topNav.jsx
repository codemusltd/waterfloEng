//populate top navigation bar items

const navList = ['about us','services','products', 'news','men at work','contact us'];

const Nav = (props)=>{
    let navItems = navList.map((item,i)=>{
        return <li key={'navItem_'+i} className='w3-btn w3-bar-item w3-hover-black w3-margin-left w3-lime'>{item}</li>;
    });

    return(
        <ul className='w3-bar w3-cell w3-cell-middle w3-mobile'>{navItems}</ul>
    );
} 


// navigation bar comp
const NavBar = (props) =>{
    return(
        <div id='one' className='w3-padding w3-cell-row'>
                <img src='http://res.cloudinary.com/fatso/image/upload/c_scale,e_vignette:20,h_100,o_80,q_auto:best,r_3,w_100/a_90/v1529353475/Waterflo/logo.png' 
                    alt='logo' id='logo' className='w3-padding w3-cell w3-mobile w3-margin-right'/> 
                 <Nav/>         
        </div>
    )
  }
  
  ReactDOM.render(<NavBar/>, document.getElementById('navBar'));

//1-logo re to be replaced by actual waterflo logo
//2-background not showing as intended in codepen full screen mode
/////////////////////////////////