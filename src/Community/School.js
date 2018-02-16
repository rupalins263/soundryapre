import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class School extends Component{
    render(){
        return(

<div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix"><br/>
            <h1 className="heading-title pull-left">HEAD OF THE SCHOOL</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">HEAD OF THE SCHOOL</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">                         
                    <h3 className="title" style={{"margin-top": "30px"}} id="chairmans-message">Chairman's Message</h3>
                        <div className="col-md-12" style={{"background":"#FCFCFC","padding":"10px 10px","margin-top":"20px"}}>
                            <img alt="chairman" className="pic_box_left" src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506074364/chairman_dkot7o.jpg" style={{"width":"230px","float":"left","padding": "5px","margin-right": "23px","margin-bottom": "10px","box-shadow":"2px 2px 2px #000"}}/>
                            <p style={{"text-align":"justify"}} className="quote"><i className="fa fa-quote-left"></i>The roots of true achievement lie in the will to become the best that you can become.<i className="fa fa-quote-right"></i> </p>
                            <p style={{"text-align":"justify"}}>if we chase perfection we can catch excellence .A Success profile defines
                            the effective Governance of knowledge, experience, competencies, professional
                            ethics and personal attributes..</p>  
                            <p style={{"text-align":"justify"}}>I do admit card an ideal blend of strategic vision,
                            accountability and transparency alone can win tremendous strokes of success.
                            Unless you reinvent yourselves in this direction, you can&#39;t rejoice in the mission of
                            crafting a culture of <strong> Reform, perform and transform.</strong></p>                               
                            
                            <p className="people">
                                <strong>
                                    <span className="name">Soundarya P Manjappa</span><br/>
                                    <span className="name">Chairman</span>
                                </strong>
                            </p>
                        </div>
                   
                </article>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                    <section className="widget has-divider">
                        <h3 className="title">Related Links</h3>
                        <ul className="job-list custom-list-style">
                                <li><i className="fa fa-caret-right"></i><a href="/#/About">About Us</a></li>
                                 <li><i className="fa fa-caret-right"></i><a href="/#/About#Management">Management</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/#/About#mission">Mission</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/#/About#vision">Vision</a></li>
                        </ul>
                    </section>
                    <section className="widget">
    <h3 className="title">Contact</h3>
    <p><b>Soundarya Central School</b><br/>Soundaryanagar, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
    <p className="tel"><i className="fa fa-phone"></i> 080-28391115 / +91 9740420115</p>
    <p className="email"><i className="fa fa-envelope"></i> <a href="#">soundaryacentralschool@gmail.com</a></p>
</section>
                </aside>
               
            </div>
        </div>
    </div>
</div>
        )
    }
}