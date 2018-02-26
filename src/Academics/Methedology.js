
import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Assessment extends Component{
    render(){
        return(<div className="content container">
                    <div className="page-wrapper"><br/>
                                <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">Methodology</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="/#/Academics">Methodology</li>
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
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/med1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/med2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                    
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/med3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                    
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"text-align":"justify"}}>In soundarya Education, is like almost evolved in leaps and bounds in recent
                            years. Traditional teaching techniques, based mainly on a teacher explaining a
                            topic and students taking notes,may still be useful on occasion, but education
                            today revolves more around encouraging the student to awaken their curiosity
                            and desire to learn.<br/>
                            A number of different teaching techniques are used in classroom of soundarya
                            ,which has simply given education a new lease of life allowing us to approach
                            old ideas in new ways.</p><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>Flipped Classroom</p>
                            <p style={{"text-align":"justify"}}>The Flipped Classroom Model basically involves encouraging students to
                            prepare for the lesson before class. Thus, the class becomes a dynamic
                            environment in which students elaborate on what they have already studied. 
                            This allows students to go beyond their normal boundaries and explore their
                            natural curiosity.</p><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>Demonstrating</p>
                            <p style={{"text-align":"justify"}}>Demonstrating is the process of teaching through examples
                            or experiments.Demonstrations are similar to written storytelling and examples
                            in that they allow students to personally relate to the presented information.</p><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>Classroom discussion</p>
                            <p style={{"text-align":"justify"}}>This technique is based on resolving real-life cases through group
                            analysis, brainstorming, innovation and creative ideas. Although known as
                            “Design Thinking”. It is a structured method, in practice it can be quite messy
                            as some cases may have no possible solution.</p><br/>
                            <p style={{"font-size":"24px","font-style":"italic"}}>Self-learning:</p>
                            <p style={{"text-align":"justify"}}>Curiosity is the main driver of learning. As a basic principle of learning, it
                            makes little sense to force students to memorize large reams of text that they
                            will either begrudgingly recall or instantly forget. The key is to let students
                            focus on exploring an area which interests them A common technique for
                            exploring self-learning is the use of Mind Maps. Teachers create a central node
                            on a Mind Map and allow students the freedom to expand and develop ideas</p><br/>
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Curriculum">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Assesment">Assesment Plan </a></li>
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
