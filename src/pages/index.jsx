import React from 'react'
//Packages
import MetaTags from 'react-meta-tags'
import moment from 'moment'
//Components
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Head, Layout, MapChart } from '@components'
//Styles
import homeStyles from '@pageStyles/home.module.scss'
import postStyles from '@compStyles/post-preview.module.scss'
import aboutStyles from '@pageStyles/about.module.scss'
//Pictures
import mappic from '@images/mapPicture.png'
import Axios from 'axios'




const IndexPage = () => {

    const images = [
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80",
        "https://images.unsplash.com/photo-1528132530164-6e8db50fdf40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1503638454472-b9c1ed258357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1517949908114-71669a64d885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1578973615934-8d9cdb0792b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1152&q=80",
        "https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1035&q=80",
        "https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
    ]

    var rn = require('random-number');
    var gen = rn.generator({
        min: 0
        , max: 9
        , integer: true
    })

    const newPosts = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields:publishedDate,
            order:DESC
          }
          limit: 4
        ){
          edges{
            node {
              name
              title
              slug
              publishedDate
              createdAt
              country
              occupation
              tags
              image1 {
                    fluid {
                        src
                    }
              }
            }
          }
        }
      }
    `)


    return (
        <Layout>
            <MetaTags>
                <meta name="description" content="100+ Stories of Canadian Immigrants" />
                <meta property="og:title" content="Home" />
            </MetaTags>
            <Head title="Home" />



            <div className={homeStyles.imagetext}>
                <h1>Stories of New Canadians to Inspire Hope!</h1>
                <p>This site is a space where courageous women, men and families
                have shared their journeys of moving to Canada. Their experiences have not always been easy,
                but at the heart of every experience is a story of hard work, hope, patience
                and perserverance. yeah
                </p>
            </div>
            <div className={homeStyles.outerWrapper}>
                <div className={homeStyles.imgContainer}>
                    <img src={images[gen()]} />
                </div>
            </div>



            <div className={homeStyles.imagetext}>
                <h1>LATEST POSTS</h1>
            </div>

            <div className={homeStyles.posts}>
                {newPosts.allContentfulBlogPost.edges.map((edge) => {
                    const slug = edge.node.slug
                    const tagss = edge.node.tags
                    const arrTags = tagss.split(",")
                    const title = edge.node.title
                    const name = edge.node.name
                    const prof = edge.node.occupation
                    const country = edge.node.country
                    const date = edge.node.publishedDate
                    const image = edge.node.image1.fluid.src


                    var safeCareer = ""

                    for (var i = 0; i < prof.length; i++) {
                        if (prof[i] == " ") {
                            safeCareer += "-"
                        } else {
                            safeCareer += prof[i]
                        }
                    }

                    var safeCountry = ""

                    for (var i = 0; i < country.length; i++) {
                        if (country[i] == " ") {
                            safeCountry += "-"
                        } else {
                            safeCountry += country[i]
                        }
                    }

                    return (
                        <div className={postStyles.EventContainer}>
                            <Link to={`/blog/${slug}`}>

                                <div className={postStyles.ImageContainerParent}>
                                    <img className={homeStyles.StoryImageContainer} src={image} />

                                </div>

                                <div className={postStyles.TextContainer}>
                                    <div className={postStyles.EntryDate}>
                                        {/* <a>{moment(date).format('LL')}</a> */}
                                        {getCode("", country) != '' ?
                                            <img className={postStyles.FlagImageContainer} src={require('../images/flags/' + getCode("", country) + '.svg')} alt={getCode("", country)} /> : null}
                                    </div>
                                    <div className={postStyles.EntryTitle}>
                                        <a>{title}</a>
                                        <p>By: {name}</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )

}

export default IndexPage

function getCode(countryCode, countryName) {
    if (countryCode === null || countryCode.length != 2) {
        if (countryName != null && countryName != "") {
            let code = CountryKey[Object.keys(CountryKey).find(keyName => keyName.toLowerCase() === countryName.toLowerCase())]
            if (code != null) return code.toLowerCase();
        }
        return '';
    }
    else {
        countryCode = countryCode.toUpperCase()
        for (var key in CountryKey) {
            if (CountryKey[key] == countryCode)
                return countryCode.toLowerCase();
        }
        return '';
    }
}

export const CountryKey = {
    'Afghanistan': 'AF',
    'Albania': 'AL',
    'Algeria': 'DZ',
    'American Samoa': 'AS',
    'Andorra': 'AD',
    'Angola': 'AO',
    'Anguilla': 'AI',
    'Antarctica': 'AQ',
    'Antigua and Barbuda': 'AG',
    'Argentina': 'AR',
    'Armenia': 'AM',
    'Aruba': 'AW',
    'Australia': 'AU',
    'Austria': 'AT',
    'Azerbaijan': 'AZ',
    'Bahamas': 'BS',
    'Bahrain': 'BH',
    'Bangladesh': 'BD',
    'Barbados': 'BB',
    'Belarus': 'BY',
    'Belgium': 'BE',
    'Belize': 'BZ',
    'Benin': 'BJ',
    'Bermuda': 'BM',
    'Bhutan': 'BT',
    'Bolivia': 'BO',
    'Bonaire, Sint Eustatius and Saba': 'BQ',
    'Bosnia and Herzegovina': 'BA',
    'Botswana': 'BW',
    'Bouvet Island': 'BV',
    'Brazil': 'BR',
    'British Indian Ocean Territory': 'IO',
    'Brunei Darussalam': 'BN',
    'Bulgaria': 'BG',
    'Burkina Faso': 'BF',
    'Burundi': 'BI',
    'Cambodia': 'KH',
    'Cameroon': 'CM',
    'Canada': 'CA',
    'Cape Verde': 'CV',
    'Cayman Islands': 'KY',
    'Central African Republic': 'CF',
    'Chad': 'TD',
    'Chile': 'CL',
    'China': 'CN',
    'Colombia': 'CO',
    'Comoros': 'KM',
    'Congo': 'CG',
    'Cook Islands': 'CK',
    'Costa Rica': 'CR',
    'Croatia': 'HR',
    'Cuba': 'CU',
    'Curacao': 'CW',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    "Cote d'Ivoire": 'CI',
    'Democratic Republic of the Congo': 'CD',
    'Denmark': 'DK',
    'Djibouti': 'DJ',
    'Dominica': 'DM',
    'Dominican Republic': 'DO',
    'Ecuador': 'EC',
    'Egypt': 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    'Eritrea': 'ER',
    'Estonia': 'EE',
    'Ethiopia': 'ET',
    'Falkland Islands': 'FK',
    'Faroe Islands': 'FO',
    'Fiji': 'FJ',
    'Finland': 'FI',
    'France': 'FR',
    'French Guiana': 'GF',
    'French Polynesia': 'PF',
    'French Southern Territories': 'TF',
    'Gabon': 'GA',
    'Gambia': 'GM',
    'Georgia': 'GE',
    'Germany': 'DE',
    'Ghana': 'GH',
    'Gibraltar': 'GI',
    'Greece': 'GR',
    'Greenland': 'GL',
    'Grenada': 'GD',
    'Guadeloupe': 'GP',
    'Guam': 'GU',
    'Guatemala': 'GT',
    'Guernsey': 'GG',
    'Guinea': 'GN',
    'Guinea-Bissau': 'GW',
    'Guyana': 'GY',
    'Haiti': 'HT',
    'Honduras': 'HN',
    'Hong Kong': 'HK',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'India': 'IN',
    'Indonesia': 'ID',
    'Iran': 'IR',
    'Iraq': 'IQ',
    'Ireland': 'IE',
    'Isle of Man': 'IM',
    'Israel': 'IL',
    'Italy': 'IT',
    'Jamaica': 'JM',
    'Japan': 'JP',
    'Jersey': 'JE',
    'Jordan': 'JO',
    'Kazakhstan': 'KZ',
    'Kenya': 'KE',
    'Kiribati': 'KI',
    'Korea, DPR': 'KP',
    'Korea, Republic of': 'KR',
    'Kuwait': 'KW',
    'Kyrgyzstan': 'KG',
    "Laos": 'LA',
    'Latvia': 'LV',
    'Lebanon': 'LB',
    'Lesotho': 'LS',
    'Liberia': 'LR',
    'Libya': 'LY',
    'Liechtenstein': 'LI',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Macao': 'MO',
    'Macedonia': 'MK',
    'Madagascar': 'MG',
    'Malawi': 'MW',
    'Malaysia': 'MY',
    'Maldives': 'MV',
    'Mali': 'ML',
    'Malta': 'MT',
    'Marshall Islands': 'MH',
    'Martinique': 'MQ',
    'Mauritania': 'MR',
    'Mauritius': 'MU',
    'Mayotte': 'YT',
    'Mexico': 'MX',
    'Micronesia': 'FM',
    'Moldova': 'MD',
    'Monaco': 'MC',
    'Mongolia': 'MN',
    'Montenegro': 'ME',
    'Montserrat': 'MS',
    'Morocco': 'MA',
    'Mozambique': 'MZ',
    'Myanmar': 'MM',
    'Namibia': 'NA',
    'Nauru': 'NR',
    'Nepal': 'NP',
    'Netherlands': 'NL',
    'New Caledonia': 'NC',
    'New Zealand': 'NZ',
    'Nicaragua': 'NI',
    'Niger': 'NE',
    'Nigeria': 'NG',
    'Niue': 'NU',
    'Norfolk Island': 'NF',
    'Northern Mariana Islands': 'MP',
    'Norway': 'NO',
    'Oman': 'OM',
    'Pakistan': 'PK',
    'Palau': 'PW',
    'Palestine': 'PS',
    'Panama': 'PA',
    'Papua New Guinea': 'PG',
    'Paraguay': 'PY',
    'Peru': 'PE',
    'Philippines': 'PH',
    'Pitcairn': 'PN',
    'Poland': 'PL',
    'Portugal': 'PT',
    'Puerto Rico': 'PR',
    'Qatar': 'QA',
    'Reunion': 'RE',
    'Romania': 'RO',
    'Russia': 'RU',
    'Rwanda': 'RW',
    'Saint Barthelemy': 'BL',
    'Saint Helena, Ascension and Tristan da Cunha': 'SH',
    'Saint Kitts and Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Martin': 'MF',
    'Saint Pierre and Miquelon': 'PM',
    'Saint Vincent and the Grenadines': 'VC',
    'Samoa': 'WS',
    'San Marino': 'SM',
    'Sao Tome and Principe': 'ST',
    'Saudi Arabia': 'SA',
    'Senegal': 'SN',
    'Serbia': 'RS',
    'Seychelles': 'SC',
    'Sierra Leone': 'SL',
    'Singapore': 'SG',
    'Sint Maarten': 'SX',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Solomon Islands': 'SB',
    'Somalia': 'SO',
    'South Africa': 'ZA',
    'South Georgia and the South Sandwich Islands': 'GS',
    'South Sudan': 'SS',
    'Spain': 'ES',
    'Sri Lanka': 'LK',
    'Sudan': 'SD',
    'Suriname': 'SR',
    'Swaziland': 'SZ',
    'Sweden': 'SE',
    'Switzerland': 'CH',
    'Syria': 'SY',
    'Taiwan': 'TW',
    'Tajikistan': 'TJ',
    'Tanzania': 'TZ',
    'Thailand': 'TH',
    'Timor-Leste': 'TL',
    'Togo': 'TG',
    'Tokelau': 'TK',
    'Tonga': 'TO',
    'Trinidad and Tobago': 'TT',
    'Tunisia': 'TN',
    'Turkey': 'TR',
    'Turkmenistan': 'TM',
    'Turks and Caicos Islands': 'TC',
    'Tuvalu': 'TV',
    'Uganda': 'UG',
    'Ukraine': 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States': 'US',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vatican City': 'VA',
    'Vanuatu': 'VU',
    'Venezuela': 'VE',
    'Vietnam': 'VN',
    'Wallis and Futuna': 'WF',
    'Western Sahara': 'EH',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW',
}