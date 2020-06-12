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
                            <p>Favourite Quote: “Our lives begin to end the day we become silent about things that matter”
                            <br /><br />
                            Favourite food: Biryani, masala chicken, tiramisu, sticky toffee pudding
                            <br /><br />
                            Comfort foods: Mac & cheese and poutine
                            <br /><br />
                            Favourite sports teams: Liverpool FC, Toronto Raptors, Toronto Blue Jays, Toronto Maple Leafs, Toronto FC.
                            <br /><br />
                            Favourite books: Everything that Remains, The Sufi Book of Life, The Little Prince
                            <br /><br />
                            Favourite websites: Zen Habits, Marc and Angel, Side Hustle School, My Modern Met, The School of Life, The Daily Maverick
                            <br /><br />
                            Favourite Magazines: The Atlantic, Toronto Life
                            <br /><br />
                            Favourite Podcasts: Revisionist History with Malcolm Gladwell, Guy Kawasaki’s Remarkable People, The Tim Ferris Show,
                            <br /><br />
                            Last vacation. Copenhagen, Denmark
                            <br /><br />
                            Music when I travel: Hip-hop and 70s mix
                            <br /><br />
                            Songs that make me happy: Brown Eyed Girl, When Doves Cry, Budapest, Raindrops keep Falling on My Head, You can Call me Al, Imagine, What a Wonderful World
                            <br /><br />
                            Favourite Restaurant: Pai, Piano Piano
                            <br /><br />
                            If I had the year off, I would visit every baseball stadium in the MLB
                            <br /><br />
                            Favourite drink: Strawberry milkshake in the summer and lemon tea with honey in winter
                            <br /><br />
                            Sports personalities you admire: Muhammad Ali, Jackie Robinson, Bjorn Borg, Roger Federer, Lebron James
                            <br /><br />
                            Favourite movies: Shawshank Redemption, 12 Angry Men, Toy Story, Straight Outta Compton, Baby Driver, Enter the Dragon, Crash
                            <br /><br />
                            Favourite TV Shows: Kim’s Convenience, After Life, The Office, The Wonder Years, Breaking Bad, Cheers, Friends, Frasier, Newhart, Animal Kingdom
                            <br /><br />
                            Favourite childhood hero: Bruce Lee
                            <br /><br />
Pet Peeve: People who do not respect seniors</p>

                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage