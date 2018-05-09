import React,{Component} from 'react';
import Calendar from 'react-calendar';
//import DayPicker from 'react-day-picker'; 
import 'react-day-picker/lib/style.css';
import './Home.css';
import axios from 'axios';
export default class Event extends Component{
        constructor(){
        super();
        this.state={
            events:[],
            date:new Date()
        }
    }
    componentWillMount(){
           axios.get(`http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/School/Events`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        events:res.data.response,
                       
                    })
             })
    }
    render()
    {




         let events="";
        if(this.state.events.length>0){
            events=this.state.events.map((item,index)=>{
                if(index<3){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
                     var href=`/#/NewsSingle?id=${item.eventid}`;
                    return(
                        <div className="event-item">
                                        <p className="date-label">
                                            <span className="month">{month}</span>
                                            <span className="date-number">{day}</span>
                                        </p>
                                        <div className="details">
                                            <h2 className="title">
                                                <a href={href}>{item.eventname}</a>
                                            </h2>
                                            <p className="location"><i className="fa fa-map-marker"></i>Soundarya School</p>                            
                                        </div>
                                </div>
              
                                 )
                          }
                     
                        else{
                            return (<div></div>)

                            }
                
             
                           
            })
        }

{/*
        const birthdays = {
           
            22 : ['Graduation day for UKG Students '],
            
          };

          function renderDay(day) {
            const date = day.getDate();
            const dateStyle = {
              position: 'absolute',
              color: 'darkgray',
              bottom: 0,
              right: 0,
              fontSize: 12,
            };
            const birthdayStyle = { fontSize: '0.6em', textAlign: 'center' };
            const cellStyle = {
              height: 50,
              width: 26,
              position: 'relative',
            };
            return (
              <div style={cellStyle}>
                <div style={dateStyle}>{date}</div>
                {birthdays[date] &&
                  birthdays[date].map((name, i) => (
                    <div key={i} style={birthdayStyle}>
                      🎁 {name}
                    </div>
                  ))}
              </div>
            );
          }  */}

        return(
 
      <div className="container cols-wrapper">
        <div className="row">
        <div className="col-md-3 section-event">
                           {/* <section className="">
                                <h1 className="line">Events</h1>
                                <div className="section-content">
                                              {events}*/}
                                    {/*<a className="read-more" href="/News">All events<i className="fa fa-chevron-right"></i></a>*/}
                             {/*}   </div>
                            </section> */}
                             <Calendar
                              onChange={this.onChange}
                               value={this.state.date}

                            />

                            <section className="">
                                <h1 className="line">Announcement</h1>
                                <div className="section-content">
                                              {events}
                                    {/*<a className="read-more" href="/News">All events<i className="fa fa-chevron-right"></i></a>*/}
                                </div>
                            </section>

                         {/*   <DayPicker                            

                           canChangeMonth={false}
                           className="Birthdays"
                           renderDay={renderDay}
                            /> */}

        </div>
        <div className="col-md-6">
           <blockquote className="custom-quote" style={{"width":"100%"}}>
                   {/* <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1505979469/soundarya-manjappa-chairman_wiehap.jpg" style={{"margin-bottom":"20px",height: "193px",width: "100%"}}/> 
                    
                    <p style={{"text-align":"justify"}}><i className="fa fa-quote-left"></i>&nbsp;<strong>Desire</strong> is the key to motivation; but it is stern determination &amp; commitment to an unrelenting pursuit of your goal – a commitment to excellence  that will enable you to attain the success you seek “ . I am tremendously delighted to witness the colourful strides we could accomplish during the last 23 years of our proud march towards <strong><u>‘Destination Excellence’</u></strong> I wish that our vision statement involve and evolve becomes true in the days to come. </p>
                    <p className="people">
                        <strong>
                        <span className="name">Sri. Soundarya Manjappa</span><br/>
                        <span className="title">Chairman</span>
                        </strong>
                    </p> */}

                   
                     <h1 style={{"text-align":"center","color":"#167ac6","fontsize":"24"}}>Soundarya School</h1><br/>
                                <p style={{"text-align":"justify","color":"#167ac6"}}><i className="fa fa-quote-left"></i>
                                 Born in the year 1993, Rocking on the cradle of progress incredible to the core…….
                                 Spinning a shinning tomorrow on the wings of faith, Triumphant in the grace of Sacred Soundarya
                                 Lahari.<br/>
                                 We lead and others follow Where wisdom flows in abundance We give our solemn pledge. 
                                 To uphold the banner of your aspiration The flag of hope and success conscious,Vigilant and progressive.<br/>
                                 A citadel of academic excellence in building the future of our beloved nation.
                                 We are out for the best for the sky in our limit.
                                 We are, we ought,
                                 We will be proud Soundaryans always.<i className="fa fa-quote-right"></i></p>          

                    
                       
            </blockquote>    

            <h1 className="section-heading text-highlight"><span className="line">Photo Gallery</span></h1>
          <div className="section-content">
            <div className="row">
                            <div className="col-md-4" >
                                <img className="img-1" src="http://zenopsys.net/soundarya_forms/school/images/sch1.jpg" alt="commerece-college-nagasandra" style={{"width":"180px","height":"135px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img  className="img-1" src="http://zenopsys.net/soundarya_forms/school/images/sch2.jpg" alt="top-puc-college-peenya" style={{"width":"180px","height":"135px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img  className="img-1" src="http://zenopsys.net/soundarya_forms/school/images/sch4.jpg" alt="top-pu-college" style={{"width":"180px","height":"135px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img  className="img-1" src="http://zenopsys.net/soundarya_forms/school/images/sch3.jpg" alt="top-pu-college" style={{"height":"150px","width":"180px","padding-top":"15px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img  className="img-1" src="http://zenopsys.net/soundarya_forms/school/images/sch5.jpg" alt="top-pu-college"  style={{"height":"150px","width":"180px","padding-top":"15px"}}/>
                            </div>
                            <div className="col-md-4">
                                <img  className="img-1" src="http://zenopsys.net/soundarya_forms/school/images/sch6.jpg" alt="top-pu-college"  style={{"height":"150px","width":"180px","padding-top":"15px"}}/>
                            </div>
                            <br style={{"clear":"both"}}/>
                            <br style={{"clear":"both"}}/>
                            <div className="col-md-6">
                                <a className="read-more" href="/#/Gallery">View All<i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
          </div>

                    <h1 className="section-heading text-highlight"><span className="line">Videos</span></h1>
                    <div className="section-content">
                        <div className="row">
                      
                            <div className="col-md-4">
                                <iframe width="100%" height="150" src="https://www.youtube.com/embed/7vZ5w-FgJtY" frameborder="0" allowfullscreen="" style={{"margin-bottom":"10px"}}></iframe>
                            </div>
                            <div className="col-md-4">
                                <iframe width="100%" height="150" src="https://www.youtube.com/embed/OVkJ9_goSWc" frameborder="0" allowfullscreen="" style={{"margin-bottom":"10px"}}></iframe>
                            </div>
                           <div className="col-md-4">
                                 <iframe width="100%" height="150" src="https://www.youtube.com/embed/YvJ1HqcKu9Y" frameborder="0" allowfullscreen="" style={{"margin-bottom":"10px"}}></iframe>
                            </div>
                           {/*  <div className="col-md-4">
                                <iframe width="100%" height="150" src="https://www.youtube.com/embed/ne0t1wWnl80" frameborder="0" allowfullscreen="" style={{"margin-bottom":"10px"}}></iframe>
                            </div>
                            <div className="col-md-4">
                                <iframe width="100%" height="150" src="https://www.youtube.com/embed/ne0t1wWnl80" frameborder="0" allowfullscreen="" style={{"margin-bottom":"10px"}}></iframe>
                            </div>
                            <div className="col-md-4">
                                <iframe width="100%" height="150" src="https://www.youtube.com/embed/ne0t1wWnl80" frameborder="0" allowfullscreen="" style={{"margin-bottom":"10px"}}></iframe>
                            </div> */}
                            <br style={{"clear":"both"}}/>
                            <br style={{"clear":"both"}}/>
                          {/*  <div className="col-md-6">
                                <a className="read-more" href="/#/Videos">View All<i className="fa fa-chevron-right"></i></a>
                            </div> */}
                       
                        </div>
                    </div>
 
                           

        </div>
        <div className="col-md-3">
            <section className="links">
                
               
                <div className="widget facebooklikebox-2 widget_FacebookLikeBox" style={{"padding-top": "0px"}}>
                <script type="text/javascript" src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script>
                <span style={{"vertical-align": "bottom", width: "100%",height: "560px"}}>
                <iframe style={{"visibility": "visible", width: "100%","height": "560px"}}title="fb:like_box Facebook Social Plugin" name="f32edf47a343e32" src="http://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D28%23cb%3Df2dcaef3d4633f%26domain%3Dwww.soundaryainstitutions.in%26origin%3Dhttp%253A%252F%252Fwww.soundaryainstitutions.in%252Ff37e2d61b1b2702%26relation%3Dparent.parent&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FSoundaryaSchool%2F&amp;locale=en_US&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=360" height="450" width="100%" frameborder="0" scrolling="no"></iframe></span></div>                        
               
                <div className="fb-page" data-href="https://www.facebook.com/Soundarya-Central-School-1441884222795577" data-tabs="timeline" data-small-header="false" data-height="470" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
                

               </section>

                <section className="home-page-section">
                        <div className="section-content">
                          <h3 className="title">Downloads</h3>
                                <p>For your benefit we have compiled in this section some of the key features you should know about Soundarya School.</p>
                                <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/school/VENTURA2017-18.pdf"><i className="fa fa-download"></i>Prospectus</a></p>
                        </div>

                    
                </section>
             </div>
            </div>
         </div>
    
        )
    }
}

