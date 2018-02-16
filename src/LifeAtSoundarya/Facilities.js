import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Facilities extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left">Facilities</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Facilities</li>
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
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/fac1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/fac2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/fac3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>Transport:</p>
                            <p style={{"text-align":"justify"}}>The need for safe passage of each child to school and back home is of
                            paramount importance to us. To ensure safe travel the school has its own fleet of outsourced
                            school buses designed as per standards and manned by trained drivers and personnel
                            sensitized to the needs of small children. The Transport Service (optional) is operated by
                            the school and a separate transport fee is charged for this. For supervision and monitoring
                            a transport attendant is on board throughout the journey.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Play Area:</p>
                            <p style={{"text-align":"justify"}}>The Early and Elementary Year students have a colourful and developmentally suited play
                            area. The equipment is not only fun to use but also satisfies a child’s natural curiosity. The outdoor
                            play area is a safe haven for the little ones to enjoy</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Class Room:</p>
                            <p style={{"text-align":"justify"}}>The School has 60 plus classrooms on campus. Every classroom is wide and spacious with
                            black and writing boards, lockers for students, custom made furniture, and a provision for
                            broadband Internet connection, multimedia support and with smart board supported by tata edge
                            class.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Av Room:</p>
                            <p style={{"text-align":"justify"}}>Separate air conditioned A.V. room for Pre-Primary, Primary and Secondary section. Each
                            is instrumental in providing state of the art teaching methodology. These futuristic A.V. room with
                            all modern day facilities, endeavour to enhance and create a vibrant learning atmosphere. A
                            variety of documentaries and films are screened to enhance the students’ subject knowledge.</p>   

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Auditorium:</p>
                            <p style={{"text-align":"justify"}}>A well furnished fully with state of the art audio &amp; seating facilities of 400 plus members.
                            Students utilize this facilities during the induction ceremony,Guest lectures, convocation
                            programme, farewell functions, and other cultural functions, etc..</p>      

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Cafeteria:</p>
                            <p style={{"text-align":"justify"}}>Cafeteria is the most popular area in the school campus where our students get a break
                            they relax and eat. Every care is taken to maintain hygiene and cleanliness. We provide food
                            which is not only appealing to the taste buds but also nutritious. We ensure that the food we
                            provide is hot, fresh, hygienic and also pocket friendly. The cafeteria is functional throughout the
                            day.</p>   

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Library:</p>
                            <p style={{"text-align":"justify"}}>The library is a book lovers&#39; paradise with novels, magazines, encyclopedia and subject-
                            specific books. The friendly librarians are ever willing to offer a helping hand to students who want
                            to use the library. There is also a story telling room for Kindergarten kids. Library is a compulsory
                            period from Pre-Primary to Grade 10.</p>                                   
                           
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