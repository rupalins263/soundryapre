import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class InfoTechLabs extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">Info Tech Labs</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">INFOTECHLABS</li>
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
                                    <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                                    
                                </ol>
                                <div className="carousel-inner">
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/techlab1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/techlab2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/techlab3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/techlab4.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>Math Lab:</p>
                            <p style={{"text-align":"justify"}}>It is a space designed to learn mathematics by performing activities and
                            hands on experience. It is to inculcate a liking and love for mathematics. Maths
                            lab also helps to develop positive ability to think, Analyse and articulate
                            logically. Math lab transforms students into knowledgeable and functional
                            members of society.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Science laboratory:</p>
                            <p style={{"text-align":"justify"}}>Science lab equipments allow students to interact directly with data
                            gathered. They get a first hand learning experience by performing various
                            experiments on their own. Students are made to use models and understand
                            different scientific theories and concepts, When they observe various things and
                            carry out different experiments, their reasoning skills are horned and they start
                            thinking deeply on those theories and concepts.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>English lab:</p>
                            <p style={{"text-align":"justify"}}>It progress through 8 levels of advancement. Each module comprises of
                            intense learning between ILT &amp; CBT.The main objective of this lab is to have
                            enhancement of spoken English, acquisition of vocabulary through integrated
                            learning, pronunciation practise using Phonetics, extensive listening and
                            speaking practise &amp; fun filled method of lesson delivery.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Computer lab:</p>
                            <p style={{"text-align":"justify"}}>The school has two computer labs with 40 computers in each. The
                            curriculum has been planned in such a way that the students of primary section
                            are trained to use basic software like Ms-office, Adobe Photoshop, and Corel
                            draw. The higher class sharpen their skills with c programming, flash, image
                            ready, etc...</p>                                
                           
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