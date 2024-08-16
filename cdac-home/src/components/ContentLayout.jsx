
import { Button, Image,Carousel} from 'antd';
import './Navbar.css';
import CompanyLogo from './CompanyLogo/CompanyLogo';
import News from './News/News';

const contentContainer = {
  width: '100%',
  heigh: '100%',
  padding: '5px',
  display : 'flex',
  flexDirection:'column',
  border: '5px solid yellow'
};

const contentContainerSectionOne = {
  width: '100%',
  // height: '20px',
  height: '400px',
  margin: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  border: '5px solid pink'
};

const oneFirstChild = {
  width: '70%',
  margin: '10px',
  border: '5px solid blue'
};

const oneSecondChild = {
  width: '25%',
  margin: '10px',
  border: '5px solid orange'
};


const contentContainerSectionTwo = {
  width: '100%',
  // height: '20px',
  height: '400px',
  margin: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  border: '5px solid red'
};

const TwoFirstChild = {
  width: '65%',
  margin: '10px',
  border: '5px solid blue',
}

const TwoSecondChild = {
  width: '30%',
  margin: '10px',
  border: '5px solid orange'
};

const contentContainerSectionThree= {
  width: '100%',
  padding: '5px',
  height: '500px',
  margin: '10px',
  border: '5px solid blue'
};

const contentContainerSectionFour = {
  width: '100%',
  padding: '5px',
  height: '400px',
  margin: '10px',
  border: '5px solid green'
};

const testimonials = {
  display: 'flex',
  // padding: '0px 20px'
};

const testimonialsChildrens = {
  display: 'flex',
  // padding: '0px 20px'
};

const socialIcons = {
  display: 'flex',
  flexDirection : 'column'

  // padding: '0px 20px'
};

const companyList = [
{ name : "Microsoft",
  url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
},
{ name : "Google",
  url : "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_5015_logo.svg"

},
{ name : "Apple",
  url : "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  
},
{ name : "Amazon",
  url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  
},
{ name : "Facebook",
  url:"https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%285019%29.png"
}
]

const ContentLayout = () => (
        <div style={contentContainer}>
            <div style={contentContainerSectionOne}>
                <div style={oneFirstChild}> 
                    <h2>Welcome note with scrolling pictures (Buildings, Group photos, Alumni meets & etc)</h2>
                <Carousel autoplay>
                    <Image preview={false} height={250} width={500} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    <Image preview={false} height={250} width={500}  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    <Image preview={false} height={250} width={500}  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </Carousel>
                </div>
                  <div style={oneSecondChild}> 
                    <h3>Connect with your classmates on your alumni portal</h3>
                    <ul>
                        <li>Create your Profile</li>
                        <li>Post Jobs and Internships</li>
                        <li>Share Memories</li>
                        <li>Exchange Opportunities and lot more</li>
                    </ul>
                      <div style={socialIcons}>
                        <Button type="primary"> Login with Facebook</Button>
                        <Button type="primary">Login with LinkedIn</Button>
                        <Button type="primary">Login with Google</Button>
                      </div>
                    {/* <div class="social-login">
                        <a href="#" class="btn-social facebook">Login with Facebook</a>
                        <a href="#" class="btn-social linkedin">Login with LinkedIn</a>
                        <a href="#" class="btn-social google">Login with Google</a>
                    </div> */}
                 </div>
           </div>
            <div style={contentContainerSectionTwo} > 
                  <div style={TwoFirstChild} // className="bck-img"
> 
                      <h3>Jobs & Internships</h3>
                    <div></div>
                    {companyList.map(company => {
                        return <CompanyLogo key={company.name} company={company} />
                      })}
                  </div>
                  <div style={TwoSecondChild}> 
                      
                        <h3>News and Updates</h3>
                        <News/>
                        {/* <div class="scroll-container">
                            <div class="scroll-content">
                                <div class="news-item">
                                    <a href="news1.html">
                                        <Image src="path/to/news1.jpg" alt="News 1"/>
                                        <div class="news-text">Text for News 1</div>
                                    </a>
                                </div>
                                <div class="news-item">
                                    <a href="news2.html">
                                        <Image src="path/to/news2.jpg" alt="News 2"/>
                                        <div class="news-text">Text for News 2</div>
                                    </a>
                                </div>
                            </div>
                        </div> */}

                  </div>
            </div>
            <div style={contentContainerSectionThree}> 
               <h3>Distinguished Alumni (Text & Videos)</h3>
                <div style={testimonials}>
                    <div class="testimonial">
                        <h4>Testimonial 1</h4>
                        <p>Text content of testimonial 1.</p>
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/video_id_1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="testimonial">
                        <h4>Testimonial 2</h4>
                        <p>Text content of testimonial 2.</p>
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/video_id_2" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="testimonial">
                        <h4>Testimonial 3</h4>
                        <p>Text content of testimonial 3.</p>
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/video_id_3" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="testimonial">
                        <h4>Testimonial 4</h4>
                        <p>Text content of testimonial 4.</p>
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/video_id_4" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
            <div style={contentContainerSectionFour}> 
              <h3>Latest Members</h3>
                <ul class="members-list">
                    <li>
                        <Image src="path_to_image_1" alt="Member 1" class="profile-pic"/>
                        <div class="member-info">
                            <h4>Member Name 1</h4>
                            <p>Current Job Role 1</p>
                            <a href="LinkedIn_profile_url_1" target="_blank">
                            <Image src="linkedin_icon_url" alt="LinkedIn" class="linkedin-icon"/>
                          </a>
                        </div>
                    </li>
                    <li>
                        <Image src="path_to_image_2" alt="Member 2" class="profile-pic"/>
                        <div class="member-info">
                            <h4>Member Name 2</h4>
                            <p>Current Job Role 2</p>
                            <a href="LinkedIn_profile_url_2" target="_blank">
                            <Image src="linkedin_icon_url" alt="LinkedIn" class="linkedin-icon"/>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
);
export default ContentLayout;
 