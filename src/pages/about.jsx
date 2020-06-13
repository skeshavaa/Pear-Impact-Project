import React from 'react'
//Packages
import MetaTags from 'react-meta-tags'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//Components
import { Layout, Head } from '@components';
import { graphql, useStaticQuery } from 'gatsby'
//Styles
import aboutStyles from '@pageStyles/about.module.scss'
//Pictures
import Azhar from '@images/Azhar.png'
import Unknown from '@images/unknown.png'


const AboutPage = () => {

    return (
        <div>

            <Layout>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants" />
                    <meta property="og:title" content="About" />
                </MetaTags>
                <Head title="About" />
                <div className={aboutStyles.cont}>
                    <div className={aboutStyles.outerWrapper}>
                        <div className={aboutStyles.imgContainer}>
                            <img src={Azhar} alt={Unknown} />
                        </div>
                    </div>

                    <div className={aboutStyles.content}>
                        <div>
                            <h1>About Azhar</h1>
                            <p>I am a father and husband, social entrepreneur, sports nut, teacher and business coach. I have worked in the Human Resources industry for over 30 years and held senior human resources positions in both South Africa and Canada, focusing on strategic human resources planning, total rewards, employee relations and diversity. I live in beautiful Toronto. </p>
                            <p>Here is some additional information about myself:</p>
                            <p><span className={aboutStyles.bold}>Favourite Quote:</span> “Our lives begin to end the day we become silent about things that matter”
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite food:</span> Biryani, masala chicken, tiramisu, sticky toffee pudding
                            <br /><br />
                            <span className={aboutStyles.bold}>Comfort foods:</span> Mac & cheese and poutine
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite sports teams:</span> Liverpool FC, Toronto Raptors, Toronto Blue Jays, Toronto Maple Leafs, Toronto FC.
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite books:</span> Everything that Remains, The Sufi Book of Life, The Little Prince
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite websites:</span> Zen Habits, Marc and Angel, Side Hustle School, My Modern Met, The School of Life, The Daily Maverick
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite Magazines:</span> The Atlantic, Toronto Life
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite Podcasts:</span> Revisionist History with Malcolm Gladwell, Guy Kawasaki’s Remarkable People, The Tim Ferris Show,
                            <br /><br />
                            <span className={aboutStyles.bold}>Last vacation:</span> Copenhagen, Denmark
                            <br /><br />
                            <span className={aboutStyles.bold}>Music when I travel:</span> Hip-hop and 70s mix
                            <br /><br />
                            <span className={aboutStyles.bold}>Songs that make me happy:</span> Brown Eyed Girl, When Doves Cry, Budapest, Raindrops keep Falling on My Head, You can Call me Al, Imagine, What a Wonderful World
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite Restaurant:</span> Pai, Piano Piano
                            <br /><br />
                            <span className={aboutStyles.bold}>If I had the year off,</span> I would visit every baseball stadium in the MLB
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite drink:</span> Strawberry milkshake in the summer and lemon tea with honey in winter
                            <br /><br />
                            <span className={aboutStyles.bold}>Sports personalities you admire:</span> Muhammad Ali, Jackie Robinson, Bjorn Borg, Roger Federer, Lebron James
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite movies:</span> Shawshank Redemption, 12 Angry Men, Toy Story, Straight Outta Compton, Baby Driver, Enter the Dragon, Crash
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite TV Shows:</span> Kim’s Convenience, After Life, The Office, The Wonder Years, Breaking Bad, Cheers, Friends, Frasier, Newhart, Animal Kingdom
                            <br /><br />
                            <span className={aboutStyles.bold}>Favourite childhood hero:</span> Bruce Lee
                            <br /><br />
                            <span className={aboutStyles.bold}>Pet Peeve:</span> People who do not respect seniors</p>

                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage