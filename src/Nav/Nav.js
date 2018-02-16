import React,{Component} from 'react';
import '../App.css';
import './Nav.css';
class Nav extends Component{

   componentDidMount(){
       switch(window.location.pathname)
       {
          
       }
    }
    render(){
        return(
          <div style={{"marginBottom":"5px"}}>
          <div className="header">
            <div className="headerr">
               <div className="container  " style={{"text-align": "right"}}>              
                  
                    <div className="other-branch"><a href="http://central.soundaryainstitutions.in">SOUNDARYA CENTRAL SCHOOL</a></div>
                    <div className="other-branch"><a href="http://puc.soundaryainstitutions.in">SOUNDARYA PU COLLEGE</a></div>     
                    <div className="other-branch"><a href="http://sims.soundaryainstitutions.in">SIMS</a></div>
                     
                </div>
              </div>
                <div className="header-main container">
                <h1 className="logo col-md-6 col-sm-6">
                    <a href="/" style={{"text-decoration": "none"}}>
                        <img id="logo" src="http://res.cloudinary.com/dzrelou7q/image/upload/v1503155295/Logo_dts0t4.jpg" alt="Logo"/>
                        <h1 style={{"display":"inline-block","margin-top":"6%","font-size":"40px"}}>Soundarya School</h1>
                    </a>
                </h1>         
                <div className="info col-md-6 col-sm-6">
                    <div className="menu-top navbar-right hidden-xs txt-Social">
                        <span className="espan"><a href="#" style={{ color: "#444"}}>Social Connect :</a></span>
                        <span className="espan"><a href="https://www.facebook.com/SoundaryaSchool/" target="_blank" style={{ color: "#444"}}><i className="fa fa-facebook"></i></a></span>
                        <span className="espan"><a href="#" style={{ color: "#444"}}><i className="fa fa-linkedin"></i></a></span>
                        <span className="espan"><a href="#" style={{ color: "#444"}}><i className="fa fa-google-plus"></i></a></span>
                    </div>
                    <br/>
                    <div className="contact pull-right">
                        <span className="phone txt-phn"><i className="fa fa-phone espan"></i>Call us today 080-28391789</span> <br/>
                        <span className="email txt-phn"><i className="fa fa-envelope espan"></i><a href="mailto:soundaryaschool@gmail.com">soundaryaschool@gmail.com</a></span>

                    </div>
                </div>
            </div>
          </div>
  <div className="container-fluid main-nav">
    <div className="container">
    <nav className="navbar navbar-default " style={{"background-color":"#1b68ab","border":"none","margin-bottom": "0px",color:"white !important"}}>
   
  <div className="container-fluid">


   
    <div className="collapse navbar-collapse nav-a" style={{paddingTop:"5px"}} id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav ">
           <li><a href="/" className="navf"  id="HOME">HOME</a></li>
          
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            {/* <li><a href="/#/Management">MANAGEMENT</a></li> */}
            <li><a href="/#/Mission">MISSION &amp; VISION</a></li>
            <li><a href="/#/Birth&Metamorphosis">BIRTH &amp; METAMORPHOSIS</a></li>
           
          </ul>
        </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OUR COMMUNITY<span className="caret"></span></a>
            <ul className="dropdown-menu navli-a">
              <li><a href="/#/School">HEAD OF THE SCHOOL</a></li>
              <li><a href="/#/Director">BOARD OF DIRECTORS</a></li>
              <li><a href="/#/Faculty">FACULTY</a></li>
              <li><a href="/#/Parent">PARENTS</a></li>
              <li><a href="/#/Student">STUDENTS</a></li>
              {/* <li><a href="/#/GuestReview">GUEST REVIEW</a></li> */}
              <li><a href="/#/alumni">ALUMNI</a></li>
            </ul>
        </li>    

         <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ACADEMICS AMBITIONS <i className="fa fa-angle-down"></i></a>
            <ul className="dropdown-menu navli-a"> 

              <li className="menu-item dropdown dropdown-Ssubmenu">
                 
                   <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">SCHOLASTIC</a>
                    <ul className="dropdown-menu">
                         <li><a href="/#/KinderGarden">KINDER GARDEN</a></li>
                         <li><a href="/#/">PRIMARY</a></li>
                         <li><a href="/#/">HIGH SCHOOL</a></li>                                             
                                  
                    </ul>
                    
              </li>
              <li><a href="/#/Curriculum">CO-SCHOLASTIC</a></li>
              <li><a href="/#/Curriculum">EDUCATIONAL</a></li>
            </ul>
         </li>

        {/*<li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ACADEMICS AMBITIONS<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/Curriculum">SCHOLASTIC</a></li>
              <ul className="dropdown-toggle">
                <li><a href="/#/KinderGarden">KINDER GARDEN</a></li>
                <li><a href="/#/">PRIMARY</a></li>
                <li><a href="/#/">HIGH SCHOOL</a></li>
              </ul>
             <li><a href="/#/Curriculum">CO-SCHOLASTIC</a></li>
             <li><a href="/#/Curriculum">EDUCATIONAL</a></li>

          </ul>
        </li> */}
          <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">BEYOND ACADEMICS<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/Achievements">ACHIEVEMENTS</a></li>
            <li><a href="/#/Sports">SPORTS </a></li>
           
          </ul>
        </li>
          <li className="dropdown">
          <a href="/#/Gallery" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">LIFE AT SOUNDARYA<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/FineArts">FINE ARTS</a></li>
            <li><a href="/#/InfoTechLabs">INFO TECH LABS </a></li>
            <li><a href="/#/TrainingActivity">TRAINING ACTIVITIES</a></li>
            <li><a href="/#/Facilities">FACILITIES</a></li>
          </ul>
        </li>
        <li><a href="/#/Gallery">PICTURESQUE MOMENTS</a></li>
        <li className="dropdown">
          <a href="/#/Gallery" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">NEWS &amp; EVENTS<span className="caret"></span></a>
          <ul className="dropdown-menu navli-a">
            <li><a href="/#/FineArts">EVENT DIARY</a></li>
            <li><a href="/#/Career">CAREERS </a></li>          
          </ul>
        </li>
      
      </ul>
    </div>
  </div>
  </nav>
</div>
</div>
</div>
       )
    }
}


export default Nav;