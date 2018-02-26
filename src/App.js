import React, { Component } from 'react';
import {Switch,Link,Route}from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomeIndex from './Home/HomeIndex';
import ContactUs from './Contact/Contact';
import Career from './Contact/Career';
import Media from './Contact/Media';
import Admission from './Contact/Admission';
import NewsSingle from './Contact/NewsSingle';
import Management from './About/Management';
import Mission from './About/Mission';
import Birth from './About/Birth';
import News from './About/News';
import School from './Community/School';
import Director from './Community/Director';
import Student from './Community/Student';
import Faculty from './Community/Faculty';
import Parent from './Community/Parent';
import Alumni from './Community/Alumni';
import KinderGarden from './Academics/KinderGarden';
import Primary from './Academics/Primary';
import HighSchool from './Academics/HighSchool';
import EducationTrip from './Academics/EducationTrip';
import ClubActivity from './Academics/ClubActivity';
import SchoolSchedule from './Academics/SchoolSchedule';
import Curriculum from './Academics/Curriculum';
import Achievements from './Academics/Achievements';
import Sports from './Academics/Sports';
import Assesment from './Academics/Assesment';
import Methodology from './Academics/Methedology';
import Activities from './Academics/Activities';
import TeachingStaff from './Academics/TeachingStaff';
import InfoTechLabs from './LifeAtSoundarya/InfoTechLabs';
import Facilities from './LifeAtSoundarya/Facilities';
import FineArts from './LifeAtSoundarya/FineArts';
import TrainingActivity from './LifeAtSoundarya/TrainingActivity';
import Privacy from './Contact/Privacy';
import Gallery from './Gallery/Gallery';
import './App.css';

class App extends Component {
   
  render() {
    return (
      <div>
       <Nav/>
       <Switch>
               
                <Route exact path="/ContactUs" component={ContactUs}/>
                <Route exact path="/Career" component={Career}/>
                <Route exact path="/Media" component={Media}/>
                <Route exact path="/Admission" component={Admission}/>
                <Route exact path="/Management" component={Management}/>
                <Route exact path="/Mission" component={Mission}/>
                <Route exact path="/Birth&Metamorphosis" component={Birth}/>
                  <Route exact path="/News" component={News}/>
                  <Route exact path="/School" component={School}/>
                   <Route exact path="/Director" component={Director}/>
                   <Route exact path="/Student" component={Student}/>
                   <Route exact path="/Faculty" component={Faculty}/>     
                   <Route exact path="/Parent" component={Parent}/>
                   <Route exact path="/Alumni" component={Alumni}/>
                   <Route exact path="/KinderGarden" component={KinderGarden}/>
                   <Route exact path="/Primary" component={Primary}/>
                   <Route exact path="/HighSchool" component={HighSchool}/>
                   <Route exact path="/EducationTrip" component={EducationTrip}/>
                   <Route exact path="/ClubActivity" component={ClubActivity}/>
                   <Route exact path="/SchoolSchedule" component={SchoolSchedule}/>
                   <Route exact path="/Curriculum" component={Curriculum}/>
                   <Route exact path="/Achievements" component={Achievements}/>
                   <Route exact path="/Sports" component={Sports}/>
                  <Route exact path="/Assesment" component={Assesment}/>
                      <Route exact path="/Methedology" component={Methodology}/>
                      <Route exact path="/TeachingStaff" component={TeachingStaff}/>
                        <Route exact path="/Gallery" component={Gallery}/>
                          <Route exact path="/Gallery" component={Gallery}/>
                            <Route exact path="/Gallery/Nursery" component={Gallery}/>
                              <Route exact path="/Gallery/Primary" component={Gallery}/>
                                <Route exact path="/Gallery/HighSchool" component={Gallery}/>
                          <Route exact path="/Activities" component={Activities}/>
                            <Route  path="/NewsSingle" component={NewsSingle}/>
                            <Route exact path="/InfoTechLabs" component={InfoTechLabs}/>
                            <Route exact path="/Facilities" component={Facilities}/>
                            <Route exact path="/FineArts" component={FineArts}/>
                            <Route exact path="/TrainingActivity" component={TrainingActivity}/>
                            <Route  path="/Privacy" component={Privacy}/>
                            <Route   path="/Admission/#/" component={Admission}/>
                             <Route   path="/" component={HomeIndex}/>
                            
                      
       </Switch>
       <Footer/>
      </div>
    );
  }
}

export default App;
