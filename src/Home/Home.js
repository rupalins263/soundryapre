import React,{Component} from 'react';
import './Home.css';
import axios from 'axios';
export  default class Home extends Component{

        constructor(){
        super();
        this.state={
            corosel:[],
           
        }
    }
    componentWillMount(){
         axios.get(`http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/School/Image/1`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        corosel:res.data.response,
                       
                    })
             })
         
             
    }

    render(){


        let val="";
                let num="";
                if(this.state.corosel.length>0)
                {
                    val=this.state.corosel.map((item,index)=>{
                          if(index==0)
                          {
                              return(
                                       <div className="item active">
                                                <img src={item.image_url} alt="Los Angeles" style={{width:"100%",height:500}}/>
                                            </div>  
                              )
                          }
                          else{
                            return(
                                    <div className="item ">
                                            <img src={item.image_url} alt="New york" style={{width:"100%",height:500}}/>
                                    </div>
                            )
                          }
                    })
                     num=this.state.corosel.map((item,index)=>{
                            if(index==0)
                            {
                                return(
                                         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                )
                            }
                            else{
                                 return(
                                    <li data-target="#myCarousel" data-slide-to={index}></li>
                            )
                            }
                        
                    })
                }
        
        return(

    <div className="container">
    <div className="container">
     <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
              <ol className="carousel-indicators">
                    {num}
                </ol>

   
                <div className="carousel-inner">
           

                 {val}

                       
                  
                 </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
        </a>
    </div>

    </div>
    <section className="row " style={{"margin-left":"15px",color:"white","backgroundColor":"#444"}}>        
        <div className="col-md-9">
        <h1 className="section-heading">why to be soundarians?</h1>
            <p className="section-txt">A top notch institution shielding ‘values’ and fostering innovation and insight. Join us to experience the charm of ignite, innovate and excel.</p>   
        </div>  
        <div className="col-md-3">
            <div style={{marginTop:"60px","backgroundColor":"#1B68AB",width:"150px","font-family": 'Open Sans',color:"#fff"}}>
            <a className="btn btn-cta" href="/Mission"><i className="fa fa-play-circle"></i>Read More</a> 
            </div> 
        </div>
    </section>
    </div>


        )
    }
}