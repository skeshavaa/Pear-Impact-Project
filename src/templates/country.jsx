import React from 'react'
//Packages
import moment from 'moment'
import MetaTags from 'react-meta-tags'
//Components
import { graphql, Link } from 'gatsby'
import { Head, Layout } from '@components'
//Styles
import tagStyles from '@templateStyles/tags.module.scss'
import postStyles from '@compStyles/post-preview.module.scss'
import homeStyles from '@pageStyles/home.module.scss'
//Pictures
import unknown from '../images/unknown.png'


export const query = graphql`
query{
    allContentfulBlogPost{
      edges{
        node{
          name
          slug
          title
          country
          occupation
          publishedDate
          tags
          image1{
              fluid {
            ...GatsbyContentfulFluid
              }
          }
        }
      }
    }
  }
  ` 

const Country = (props) => {
    const currentTag = props.pageContext.slug
    const hits = []

    var safeCountry
    var country
    
    {props.data.allContentfulBlogPost.edges.map((edge) => {
        country = edge.node.country
        
        safeCountry = ""

        for (var i = 0; i < country.length; i++){
            if (country[i] == " "){
                safeCountry += "-"
            } else{
                safeCountry += country[i]
            }
        }


        if (currentTag == safeCountry){
            hits.push(edge)
        }
    })}
    

    return(
        <Layout>

            <Head title={currentTag}/>
            <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta name="og:title" content={country}/>
            </MetaTags>

            <h1 className={tagStyles.title}>Blog Post tagged with "{currentTag}"</h1>
            <div className={tagStyles.wrapper}>
            {hits.map((hit) => {
                const image = hit.node.image1.fluid.src
                const slug = hit.node.slug
                const title = hit.node.title
                const tags = hit.node.tags
                const listTags = tags.split(",")
                const name = hit.node.name
                const country = hit.node.country
                const prof = hit.node.occupation
                const date = hit.node.publishedDate

                var safeProf = ""

                for (var i = 0; i < prof.length; i++){
                    if (prof[i] == " "){
                        safeProf += "-"
                    } else{
                        safeProf += prof[i]
                    }
                }
                
                return(
                    <div className={postStyles.EventContainer}>
                        <Link to={`/blog/${slug}`}>
                        <div className={postStyles.ImageContainerParent}>
                                    <img className={homeStyles.StoryImageContainer} src={image} />
                                 
                                </div>
                        <div className={postStyles.TextContainer}>
                            <div className={postStyles.EntryDate}>
                                <a>{moment(date).format('LL')}</a>
                                {getCode("", country) != '' ?
                                        <img className={postStyles.FlagImageContainer} src={require('../images/flags/' + getCode("", country) + '.svg')} alt={getCode("", country)} /> : null}
                            </div>
                            <div className={postStyles.EntryTitle}>
                                <a>{title}</a>
                                <p>By: {name}</p>
                            </div>
                            <div className={postStyles.EntryExcerpt}>
                                <p>
                                    
                                </p>
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

export default Country

function getCode(countryCode, countryName)
{
    if (countryCode === null || countryCode.length != 2) 
    {
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