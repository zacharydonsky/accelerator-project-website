import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Accelerator Project"
        const siteDescription = "Free coding lessons"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>The Accelerator Program is a grassroots initiative which aims to help homeless and at-risk youth escape the cycle of poverty by helping them to use tech skills to advance their employment, entrepreneurship, and personal goals.</h2>
                        </header>
                        <p>The Accelerator Project is designing a pilot program which includes:
                        <br /><br />
                          <ul>
                            <li><b>Skills training</b> to equip participants with specific in-demand tech skills</li>
                            <li><b>Access to the right wrap-around supports</b> such as shelter, financial support for education, life skills training that a participant might need so that they can focus on their learning</li>
                            <li><b>Access to the tech job market and other opportunites</b> through internships, mentorship, and community networks</li>
                          </ul>
                          Our goal is to pilot our program with interested delivery partners from both the tech sector (including employers), government and the social service sector.  
                          <br /> <br />
                          The Accelerator Team’s role is to develop the pilot program using evidence-based, human centred design that can be implemented with interested delivery partners.
                        </p>

                    </section>

                    <section id="two">
                      <header className="major">
                        <h2>Events</h2>
                        <br/>
                        <p><b>October-November 2019:</b> Our team tries out a more structured curriculum with the residents of YMCA Sprott House.
                        </p>
                        <p><b>July-September 2019:</b> Our team provides drop-in coding lessons each Saturday from 2-5 p.m at St. Felix (69 Fraser Avenue).
                        </p>
                      </header>
                      <header className="major">
                        <h2>Past Events</h2>
                        <br/>
                        <p><b>November 27, 2018:</b> Conducted consultation & co-design session with 20+ stakeholders from across the private, public, and non-profit sectors to identify potential barriers to youth employment and laid the groundwork for future consultations, research, and co-creation.
                        <br /><br />
                        You can read about the results of our consultation <a href="https://github.com/zacharydonsky/accelerator-project-website/raw/master/src/assets/images/Accelerator%20Consultation%20Results%20-%2027-Nov-2018.pdf">by downloading this pdf</a>.
                        </p>
                      </header>
                    </section>

                    <section id="three">
                        <h2>Who we Are</h2>
                        <p>We are a volunteer-based team of public servants, programmers, designers, researchers and other professionals who are passionate about empowering homeless youth through education.
                        <br /><br />
                        <h3>Get In Touch</h3>
                        If you would like to volunteer, partner, or donate, please contact us here.</p>
                          <div className="4u 12u$(small)">
                            <ul className="labeled-icons">
                                <li>
                                    <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                    <a href="mailto:hello@acceleratorproject.xyz">hello@acceleratorproject.xyz</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex
