import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Primary extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> Primary</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Primary</li>
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
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/primary1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/primary2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                    
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/primary3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                    
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>English</p>
                            <p style={{"text-align":"justify"}}>Language believes that literacy acquisition is dependent on the integrated teaching of
                                reading, writing, listening and speaking skills. To provide the students the opportunity for self
                                expression, which also make them acquainted with the lives and deeds of great men and enable
                                students to arrange ideas in a systematic way.</p><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>Maths</p>
                            <p style={{"text-align":"justify"}}>It is designed to learn mathematics by performing activities and hands on experience; it is
                                experimental learning through task based approach. It transforms students into knowledgeable
                                and functional members of society. It also helps them to develop positivity ability to Think,
                                Analyse and articulate logically.</p><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>Environmental Science</p>
                            <p style={{"text-align":"justify"}}>Science teaching directly inculcates the scientific among the students. It should develop
                                certain abilities such as analyse, generalise, discuss, argue and manipulate instruments. The
                                impact of science upon way of life, developing interest in scientific hobbies, developing proper
                                understanding of the main facts, concepts of our environment.</p><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>Social Science</p>
                            <p style={{"text-align":"justify"}}>To provide the knowledge of natural and social environment, It develop their desirable
                                attitudes with the critical thinking, reasoning power in students. It makes the students to
                                understand the location, size, climate, vegetation, etc. We are able to gather the information
                                about the philosophy behind the Religious leaders.</p><br/>
                                   
                           
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