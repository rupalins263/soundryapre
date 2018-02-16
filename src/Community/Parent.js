import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Parents extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> Parents</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Parents</li>
                                        </ul>
                                    </div>
                               </header> 
                       <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                            
                            <img src="http://zenopsys.net/soundarya_forms/school/images/parent.jpg" alt="" style={{"width":"100%","height":"auto","border":"2px solid #1B68AB "}}/>
                            <br/><br/>
                            <p style={{"text-align":"justify"}}>Although a parent’s role in their children’s learning evolves as kids grow,
                            one thing remains constant: we are our children’s learning models. Our attitudes
                            about education can inspire theirs and show them how to take charge of their own
                            educational journey.As a school we believe in a partnership between the family
                            and school .Soundarya believe that parents involmment in education lies at the
                            heart of the learning process together teachers and parents can create a harmonious
                            school life.</p>
                            <p style={{"text-align":"justify"}}>Teachers are available for individual consultation after school by prior
                            appointment. Apart from that PTA meeting is conducted regularly after every

                            formative assessment to discuss academic, personal and social development of
                            their child.</p>
                           

                       
                            
                           
                           
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