import React, {useState, useEffect} from "react";
import Course1 from "../ui/course-1.jpg";
import Course2 from "../ui/course-2.png";
import headerImg from "../ui/header-img.png"
import {FaFacebook, FaTwitter, FaInstagram, FaEnvelope} from 'react-icons/fa';

import {NavLink} from "react-router-dom";

function HomePage(){

    useEffect(()=>{
        document.title = "Home";
    })

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "82 min",            
            poster: Course1
        },
        {
            ID: 2,
            title: "Creating a beautiful Portrait Illustration. Learning new Technics and Tricks.",
            tutor: {
                ID: 2,
                name: "Uran Design",
                username: "urancd",
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "1 hr 13 min",            
            poster: Course2
        },
        {
            ID: 3,
            title: "Creating a beautiful Portrait Illustration. Learning new Technics and Tricks.",
            tutor: {
                ID: 3,
                name: "Uran Design",
                username: "urancd",
                dp: "http://placeimg.com/100/100/people?tutor-" + 3,
            },
            duration: "5 hr 13 min",            
            poster: Course2
        }

    ]);

    const [topTutors, setTopTutors] = useState([
        {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },        
        {
            ID: 3,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
        },
        {
            ID: 4,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 4,
        },
        {
            ID: 5,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 5,
        },        
        {
            ID: 6,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "http://placeimg.com/100/100/people?tutors-" + 6,
        }
    ]);

    const [topCategories, setTopCategries] = useState([
        {
             ID: 1,
            name: "Python",
            dp: "http://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Python",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2,
        },        
        {
            ID: 3,
            name: "Python",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3,
        },
        {
            ID: 4,
            name: "Python",
            dp: "http://placeimg.com/100/100/people?tutors-" + 4,
        },
        {
            ID: 5,
            name: "Python",
            dp: "http://placeimg.com/100/100/people?tutors-" + 5,
        },        
        {
            ID: 6,
            name: "Python",
            dp: "http://placeimg.com/100/100/people?tutors-" + 6,
        },
        {
            ID: 7,
           name: "Python",
           dp: "http://placeimg.com/100/100/people?tutors-" + 7,
       },
       {
           ID: 8,
           name: "Python",
           dp: "http://placeimg.com/100/100/people?tutors-" + 8,
       },        
       {
           ID: 9,
           name: "Python",
           dp: "http://placeimg.com/100/100/people?tutors-" + 9,
       },
       {
           ID: 10,
           name: "Python",
           dp: "http://placeimg.com/100/100/people?tutors-" + 10,
       },
       {
           ID: 11,
           name: "Python",
           dp: "http://placeimg.com/100/100/people?tutors-" + 11,
       },        
       {
           ID: 12,
           name: "Python",
           dp: "http://placeimg.com/100/100/people?tutors-" + 12,
       }
    ]);

   
    var courseList = [];
    for(let i = 0; i < popularCourse.length; i++){
        
        courseList.push(
            <a href="#" className="course rel" key={"popular-course-" + i}>
                 <div className="block rel" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"}}>
              

                    <div className="user abs aic flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb cfff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
                    </div>     
                    </div>  
            </a>
        );
    }

    var topTutorsList = [];
    for(let i = 0; i < topTutors.length; i++){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topTutors[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                        <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
                    </div>
                </div>                
            </a>
        );
    }

    var topCategoriesList = [];
    for(let i = 0; i < topCategories.length; i++){
        topCategoriesList.push(
            <a href="#" className="user-block rel noul" key={"top-categories-" + i}>
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topCategories[i].dp} className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb c333">{topCategories[i].name}</h2>
                    </div>
                </div>                
            </a>
        );
    }

    return (
        
        <div className="home-banner-area abs">
        <div className="home-page abs">

        {/* home banner area */}
        <div className="container">
            <div className="row justify-content-center fullscreen align-items-center">
                <div className="col-lg-5 col-md-8 home-banner-left">
                <h1 className="text-white">
                    Take the first step <br />
                    to learn with us
                 </h1>
                 <p className="mx-auto text-white  mt-20 mb-40">
                In the history of modern astronomy, there is probably no one
                greater leap forward than the building and launch of the space
                telescope known as the Hubble.
                </p>
            </div>
            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
          <     img className="img-fluid" src={headerImg} alt="" />
            </div>
         </div>
        </div>

            {/**Popular Courses */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span  className="fontn">This Week</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

            {/**Top Tutors */}
            <div className="section section-c rel">
                <h2 className="title s24 fontb">Top <span  className="fontn">Tutors</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>

            {/**Top Categories */}
            <div className="section section-c rel">
                <h2 className="title s24 fontb">Top <span  className="fontn">Categories</span></h2>
                <div className="top-categories rel flex">
                    {topCategoriesList}
                </div>
            </div>
        </div>

         {/* <!-- ================ start footer Area ================= --> */}
         <footer className="footer-area section-gap rel">
		    <div className="container">
			<div className="row">
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Top Products</h4>
					<ul>
						<li><a href="#">Managed Website</a></li>
						<li><a href="#">Manage Reputation</a></li>
						<li><a href="#">Power Tools</a></li>
						<li><a href="#">Marketing Service</a></li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Quick Links</h4>
					<ul>
						<li><a href="#">Jobs</a></li>
						<li><a href="#">Brand Assets</a></li>
						<li><a href="#">Investor Relations</a></li>
						<li><a href="#">Terms of Service</a></li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Features</h4>
					<ul>
						<li><a href="#">Jobs</a></li>
						<li><a href="#">Brand Assets</a></li>
						<li><a href="#">Investor Relations</a></li>
						<li><a href="#">Terms of Service</a></li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 single-footer-widget">
					<h4>Resources</h4>
					<ul>
						<li><a href="#">Guides</a></li>
						<li><a href="#">Research</a></li>
						<li><a href="#">Experts</a></li>
						<li><a href="#">Agencies</a></li>
					</ul>
				</div>
				<div className="col-lg-4 col-md-6 single-footer-widget">
					<h4>Newsletter</h4>
					<p>You can trust us. we only send promo offers,</p>
					<div className="form-wrap" id="mc_embed_signup">
						<form target="_blank" action="/" method="get" className="form-inline">
							<input class="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
							 required="" type="email"></input>
							<button className="click-btn btn btn-default text-uppercase">subscribe</button>
							<div style={{position: 'absolute', left: '-5000px'}}>
								<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"></input>
							</div>

							<div class="info"></div>
						</form>
					</div>
				</div>
			</div>
			<div class="footer-bottom row align-items-center">
				<p class="footer-text m-0 col-lg-8 col-md-12">

                Copyright &copy; Nikhil Rai | {(new Date().getFullYear())}</p>

				<div class="col-lg-4 col-md-12 footer-social s30">
					<a href="#"><FaFacebook/></a>
					<a href="#"><FaTwitter/></a>
					<a href="#"><FaInstagram/></a>
					<a href="#"><FaEnvelope/></a>
				</div>
			</div>
		</div>
	</footer>
  {/* <!-- ================ End footer Area ================= --> */}

        </div>
    )
}

export default HomePage;