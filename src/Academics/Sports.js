import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Sports extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">Sports</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Sports</li>
                                        </ul>
                                    </div>
                               </header> 
                       <div className="page-content">
                    <div className="row page-row">

                        <article className="welcome col-md-8 col-sm-7">                         
                              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                                    <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                                    
                                </ol>
                                <div className="carousel-inner">
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/sports1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/sports2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/sports3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"text-align":"justify"}}>Sacrifice, integrity, belief, excellence, respect, opportunity and
                                achievement. These values and behaviours are central to sport at
                                soundarya.</p>

                            <p style={{"text-align":"justify"}}>As we redefined and reshaped the Soundarya Sports Program over the
                            years, we looked to the world’s top sports teams, institutions and
                            influencers to help build the best international school sports</p>

                             <p style={{"text-align":"justify"}}>It is an honour and a privilege to wear an soundarya jersey and we
                            teach our sports students the importance of playing with a higher purpose;
                            to play for the person next to you, to play for all who came before you.
                            The development of character and the sense of team is every bit as
                            important as the development of skills and fitness. Each time we step out
                            on the sporting field we ask ourselves, what will be your legacy? How will
                            you leave the jersey in a better place?</p>


                                                  
                           
                        </article>
                              <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                                        <section className="widget has-divider">
                                            <h3 className="title">Related Links</h3>
                                            <ul className="job-list custom-list-style">
                                                   <li><i className="fa fa-caret-right"></i><a href="/#/Curriculum">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Methedology">Methodology</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/TeachingStaff">Teaching Staff</a></li>
                                     </ul>
                                            
                                        </section>
                            
                                        <section className="widget">
                                        <h3 className="title">Contact</h3>
                                        <p><b>Soundarya School</b><br/> Havanoor extension,<br/> Nagasandra post ,<br/> Bangalore-560073</p>
                                        <p className="tel"><i className="fa fa-phone"></i>Tel: 080-28391789</p>
                                        <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:soundaryaschool@gmail.com">soundaryaschool@gmail.com</a></p>
                                        <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:soundarya.edu.trust@gmail.com">soundarya.edu.trust@gmail.com</a></p>
                                    </section>
                                </aside>
                             </div>
                         </div>
                    </div> 
                </div> 
        )
    }
}