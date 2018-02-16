import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class KinderGarden extends Component{
    render(){
        return(
              <div className="content container">
                    <div className="page-wrapper"><br/>
                            <header className="page-heading clearfix">
                                    <h1 className="heading-title pull-left"> KinderGarden</h1>
                                    <div className="breadcrumbs pull-right">
                                        <ul className="breadcrumbs-list">
                                            <li className="breadcrumbs-label">You are here:</li>
                                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="current">KinderGarden</li>
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
                                                <div className="item  active"><img src="http://zenopsys.net/soundarya_forms/school/images/kg1.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item "><img src="http://zenopsys.net/soundarya_forms/school/images/kg2.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/kg3.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                                <div className="item"><img src="http://zenopsys.net/soundarya_forms/school/images/kg4.jpg" alt="" style={{"width":"100%","height":"420px","border":"2px solid #1B68AB "}} /></div>
                                               
                                </div>
                                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span></a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span></a>
                            </div>  
                            <br/><br/>
                            <p style={{"font-size":"20px","font-weight":"bold"}}>Our Approach:</p>
                            <p style={{"text-align":"justify"}}>Best practices that strengthens our Nursery. We have a specifically designed
                            system for age 2½ - 6. Our specialist that work with our students work very
                            practically and meaningfully to implement. The common core standards for reading
                            and writing.<br/>
                            Innovative ideas and strategies to strengthen the entire Nursery literacy calendar.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Writing:</p>
                            <p style={{"text-align":"justify"}}>How to strengthen and improve their developments from the moment they enter
                            Kindergarten, the six steps that we follow here, makes it easier for the students of
                            the 1 st level to hold their writing material and to pen down the skills that have been
                            learnt in 5 odd months. There is no tension, no fussing, no struggle, or no force that
                            the 3 year olds face absolute confidence is seen and is done with great zeal.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Oral Language:</p>
                            <p style={{"text-align":"justify"}}>We believe strongly that good listening and speaking skills support the development
                            of a child’s thinking, reading, writing and reasoning skills.<br/>
                            The Native English pronunciation is practical each and every day, a lot of audios are played for our children to develop their listening 
                            and speaking skills.<br/>
                            We also have a lot of picture talks, where the students can see and speak on them.
                            They practice this with peers, teacher and parents as well. A few of them have also
                            come to a say that their mother tongue is “English”! It is hilarious but proved to be
                            true.</p>

                            <p style={{"font-size":"20px","font-weight":"bold"}}>Reading:</p>
                            <p style={{"text-align":"justify"}}>Identifying the shapes, the names and the sounds of the English
                            Alphabets are the first few steps to reading. Then comes recognizing or co-relating
                            these on Hoardings, signboards, Name boards, Newspapers book or anywhere at
                            all.<br/>
                            This is the first thrill to the reading skill/ability.<br/>
                            Then comes connection different letter to form a simple 2 letter or three letter word
                            and read them individually (spell) and then together to pronounce the word.<br/>
                            These are the most fascinating moments of the child’s life here in our nursery.<br/>
                            A good foundation is laid in pre-reading skills and then we have book with big fonts
                            to make it more interesting for our students to read.<br/>
                            We take much care to see that children don’t find difficulty in reading.<br/>
                            We make it a point that <br/>(i) there are no difficulties in identifying letters,<br/> (ii)
                            Connecting the wrong sounds with letters, <br/>(iii) Skipping words, not remembering
                            words by sight, guess work, sounding them out wrongly etc.</p>



                                
                           
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