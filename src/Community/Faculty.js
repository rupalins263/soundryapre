import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Faculty extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> Faculty</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">Faculty</li>
                                        </ul>
                                    </div>
                               </header> 
                       <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                            
                            <img src="http://zenopsys.net/soundarya_forms/school/images/faculty.jpg" alt="" style={{"width":"100%","height":"auto","border":"2px solid #1B68AB "}}/>
                            <br/><br/>

                            <p style={{"text-align":"justify"}}>The teaching and the non teaching faculty at Soundarya Institution focus singularly
                            on one thing - your child. We as a team prepare your child to face challenges and
                            opportunities both in and out of the class room. The teachers bring their passions
                            into the classroom, they develop a connect and bond with the child that inspire a
                            true love of learning. Our teachers pay close attention to the social, academic and
                            emotional needs of the student and simultaneously fuel them with benefiting
                            knowledge.</p>
                            <p style={{"text-align":"justify"}}>The teachers at Soundarya School prepare their students intellectually, emotionally
                            and ethically and can serve the purpose of all round nurturing in the child&#39;s
                            abilities, hence helping them face the competitive world.</p>
                            <p style={{"text-align":"justify"}}>Our teacher training focus on improving classroom practice through the usage of
                            technology, interactive teaching learning material, classroom organization skills,
                            lesson planning, and appropriate teaching styles. Our customized teacher training
                            programmes focus on improving the quality of teaching and learning in schools, so
                            that greater numbers of students achieve increasing levels of proficiency in the
                            core academic subjects of English, Mathematics and Science, the objectives are :</p>

                           <p>
                                  <ul style={{"list-style":"none"}}>    
                                          <li><i className="fa fa-hand-o-right"></i> To create motivated teachers, capable of delivering the curriculum</li>
                                          <li><i className="fa fa-hand-o-right"></i> To improve teachers subject knowledge and understanding of difficult concepts
                                            of the curriculum, to enable effective transfer of knowledge.</li>
                                          <li><i className="fa fa-hand-o-right"></i> To expose teachers to innovative teaching methods, that are child centric and
                                            work towards bringing holistic development of the students</li>
                                          <li><i className="fa fa-hand-o-right"></i>To provide Soft skills training for improved classroom instruction, and personal
                                                development of teachers</li>
                                          <li><i className="fa fa-hand-o-right"></i> To provide training for providing Life skills to students</li>
                                          
                                       </ul>    
                               </p><br/>
                            
                           
                           
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