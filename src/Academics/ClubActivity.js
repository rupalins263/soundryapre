import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class ClubActivity extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> Club Activity</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Club Activity</li>
                                        </ul>
                                    </div>
                               </header> 
                       <div className="page-content">
                        <p style={{"font-size":"24px","font-style":"italic"}}>“Including Values Inspiring Calibre”</p>
                    <div className="row page-row">

                        <article className="welcome col-md-8 col-sm-7">                         
                            
                              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                                    <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                                    
                                    
                                </ol>
                                <div className="carousel-inner">
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/clubactivity1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/clubactivity2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                    
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/clubactivity3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                    
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>Club activities:</p>
                            <p style={{"text-align":"justify"}}>The clubs are Cordelia(the literary club), Monalisa(Art club),Aryabatta (Maths
                            club), Venus (science club),Fiesta (sports club).All the clubs &amp;committees work in
                            accordance with the annual calendar of co- curricular activities.Every week 1 hour is
                            devoted exclusively for organizing various club activites. </p><br/>
                             <p style={{"font-size":"20px","font-weight":"bold"}}>Club Reveria:</p>
                            <p style={{"text-align":"justify"}}>The prime objective to create a healthy classroom climate, to imbibe in
                            children civic values, national insignia, to teach world geographical features, current
                            world economic scenario and business ethics etc. The activities enable the students to
                            rediscover the marvels of Social science as an interesting subject breaking the
                            traditional monotony of listening and learning. </p><br/>
                           
                             <p style={{"font-size":"20px","font-weight":"bold"}}>Club Venus:</p>
                            <p style={{"text-align":"justify"}}>It is in instilling research and scientific temperament in the young experiment
                            lovers by providing them a platform not only in the labs but also in classrooms. Every
                            week activities were conducted with regard to world environment slogans and posters
                            a skit conveying a green message. Making a “Herbarium“, Info file on deficiency
                            diseases and symptoms. </p><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>Club Aryabhatta:</p>
                            <p style={{"text-align":"justify"}}>It mainly aims to inculcate logical thinking and to gain practical knowledge of
                            mathematical calculations. Club members try to do the verification and cardinality of
                            numbers using venn diagrams and the tabulations also with the construction of plane
                            figures and the co-ordinating the geometry calculations. </p><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>Club cordelia &amp; Versatalia:</p>
                            <p style={{"text-align":"justify"}}>Language is a tool which none of us can evade. It is wonderful way of
                            expressing our inner thoughts and communicating with people around us. It believes
                            that each member must acquire this simple yet a very important technique to better our
                            language skills. The implementation of these activities was to monitor and develop the
                            skills of the children the main motto was to draw the children out of the shells and
                            ready themselves to face the world with more confidence and courage.</p><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>Club fiesta:</p>
                            <p style={{"text-align":"justify"}}>Physical activities in school are a remedy as it produces endorphins (chemical
                            in the brain).This regulates moods, pleasure and pain. It develops and “I can do it”
                            attitude. Physical Association activity during the school day includes the time spent in
                            physical education classes. Classroom based moments, recess, walking and other
                            physical activity. </p><br/>
                                
                           
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