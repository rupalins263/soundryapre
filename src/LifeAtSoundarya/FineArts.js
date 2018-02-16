import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class FineArts extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">Fine Arts</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Fine Arts</li>
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
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/fineart1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/fineart2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/fineart3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>What more can you look forward to .............?</p>
                            <p style={{"text-align":"justify"}}>Along with curricular and co-curricular programme we do have incorporated
                            extracurricular disciplines such as school band, bharatanatyam, cricket, instrumental
                            music, yoga, etc.we have appointed coach specialists headed by the sports
                            director(set) so that the following stars can prove their mettle and sharpen their
                            skills.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Fine arts</p>
                            <p style={{"text-align":"justify"}}>Soundariyans places great emphasis on creativity and passion for arts. There
                            are large spaces where children indulge in drawing, painting or pottery. Childrens&#39;
                            art work is often displayed around the school and during exhibitions.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Performing Arts</p>
                            <p style={{"text-align":"justify"}}>Dance, Dramatics and Music classes are a hit among students and for good
                            reason. Our professional dance instructors help children explore both Indian and
                            contemporary disciplines. The experienced drama teachers engage children in a
                            variety of acting skills. We has two sound-proof music rooms where students are
                            taught singing. Instruments, including the guitar, drums and keyboard are taught as
                            extracurricular activities. We have a student band as well as Elementary, Middle and
                            High School Choirs..</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>YOGA</p>
                            <p style={{"text-align":"justify"}}>Over the past decades we have developed a model of how to teach yoga to
                            children in Primary, Nursery and Special Schools as part of the curriculum. Every
                            week they have training for an hour to practice yoga with proper dress, which can
                            refresh them mentally as well as physically.</p>   

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Karate</p>
                            <p style={{"text-align":"justify"}}>Teaching Kids Karate has been a inspiring and rewarding experience and an
                            equally frustrating one too. But in spite of the very few kids who continue to study
                            Karate-do(way of life) into adult hood and make it to the 3rd. Degree Black Belt
                            Level and beyond, for the Instructor it makes it all worthwhile. Our school is proud to
                            say that today we are teaching for many childrens which useful as a self defence.</p>      

                           
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