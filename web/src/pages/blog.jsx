import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroPage from '../components/layouts/HeroPage';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import Grid from '../components/layouts/Grid';
import Col from '../components/layouts/Col';

const BlogPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BlogPageQ {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        nodes {
          id
          title
          description
          slug {
            current
          }
          bgImg {
            alt
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          author {
            name
          }
          publishedAt(formatString: "MMMM D, yyyy")
          tags {
            title
          }
        }
      }
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/blog/recruiting-blog-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgRich: file(
        relativePath: {
          eq: "assets/images/about/rich-jeffery-job-recruiter-staffing-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const { ...allCompany } = useSanitySettingsCompany();
  const { ...allSocials } = useSanitySettingsSocials();
  const { ...allColors } = useSanitySettingsColors();
  const { ...allMetadata } = useSanitySettingsMetadata();

  const posts = data.allSanityPost.nodes;
  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgRich = data.imgRich.childImageSharp.gatsbyImageData;

  const seo = {
    title: `Recruitment Agency Blog - Hiring & Staffing Trends`,
    description:
      'Check our recruiting blog for top job trends and hiring updates within engineering & technical industries. Be sure to check back for new posts!',
    slug: 'https://www.allstarconnections.com/blog/',
  };

  const hero = {
    header: `${allCompany.name} Recruiting Blog`,
    subheader:
      'Check our recruiting blog for industry trends and hiring updates.',
    alt: 'All-Star Connections is a staffing agency for engineering & technical companies.',
  };

  return (
    <Layout type="brand">
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
"@id": "https://www.allstarconnections.com/",
"knowsAbout": ["https://en.wikipedia.org/wiki/Recruitment",
"https://en.wikipedia.org/wiki/Employment_agency",
"https://en.wikipedia.org/wiki/Staffing",
"https://en.wikipedia.org/wiki/Human_resources",
"engineering recruitment agency"
 ],
"url": "https://www.allstarconnections.com/",
"slogan": "All-Star Connections is a professional organization founded by a true believer in putting people first!",
"brand" : {"@id" : "https://www.allstarconnections.com/"},
"logo":{ 
            "@type": "ImageObject",
            "@id": "logo", 
            "contentUrl": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp",
            "url": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp"
        },
"image":[ 
			{
            "@type": "ImageObject",			
			"contentUrl": "https://www.allstarconnections.com/static/bace2d24516ed670d68b231e708bd5d8/059a7/boston-ma-interview-engineering-job-recruiter-agency-all-star-connections.webp",
			"url": "https://www.allstarconnections.com/static/bace2d24516ed670d68b231e708bd5d8/059a7/boston-ma-interview-engineering-job-recruiter-agency-all-star-connections.webp"}
            ],
"description": "All-Star Connections focuses on helping companies find the best candidates for open engineering positions. We maintain a strong network of qualified candidates and are able to present them to your company in a professional manner.

We have been in business since 2016, and know exactly how to match people with the right roles to ensure all parties involved are happy with the final outcome. All-Star Connections focuses our efforts within the engineering & technical industries and we're committed to finding your company only the best candidates.",
"name": "All-Star Connections",
"telephone": "(617) 684-5108",
"contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "(617) 684-5108"
        },
"sameAs" : [ 
            "https://www.linkedin.com/company/all-star-connections/"

        ],
"areaServed": [{"@type": "AdministrativeArea",        
                "geo": {
                "@type": "GeoShape",
                "postalcode": [
                    "2101","2102","2103","2104","2105","2106","2107","2108","2109","2110","2111","2112","2113","2114","2115","2116","2117","2118","2119","2120","2121","2122","2123","2124","2125","2126","2127","2128","2129","2130","2131","2132","2133","2134","2135","2136","2137","2163","2199","2203","2205","2208","2209","2210","2215","2222","2228","2283","2284","2455","77002","77003","77004","77005","77006","77007","77008","77009","77010","77011","77012","77013","77014","77015","77016","77017","77018","77019","77020","77021","77022","77023","77024","77025","77026","77027","77028","77029","77030","77031","77032","77033","77034","77035","77036","77037","77038","77039","77040","77041","77042","77043","77044","77045","77046","77047","77048","77049","77050","77051","77053","77054","77055","77056","77057","77058","77059","77060","77061","77062","77063","77064","77065","77066","77067","77068","77069","77070","77071","77072","77073","77074","77075","77076","77077","77078","77079","77080","77081","77082","77083","77084","77085","77086","77087","77088","77089","77090","77091","77092","77093","77094","77095","77096","77098","77099","92101","91910","92126","91911","92592","92109","92021","92154","92130","92104","92115","92105","92122","92117","92128","92020","92056","92024","92071","92057","92103","92037","91977","92078","92026","92028","92114","91942","92129","91950","91913","92111","92027","92672","92116","92009","92054","92127","92064","92040","92025","92069","92084","92019","92058","92102","92108","92107","92065","92113","92120","91941","92131","92110","92123","92008","92083","92124","92081","92139","91915","92011","91932","92119","92118","91945","92106","92029","92173","92082","92010","92014","92075","91901","91902","92007","91914","92067","91935","92143","91912","91978","92003","92004","92036","92121","92085","92153","91906","92178","92150","92023","91980","91951","92138","92112","92163","92061","92052","92018","92079","92038","92088","91921","92192","92169","92196","92072","91916","91962","92198","92046","92174","92170","92051","91903","91909","92091","92030","92033","91905","92022","92195","92086","92176","91979","91933","91944","92177","92165","92171","92070","91908","92168","92172","92074","92166","92193","92167","92013","91946","91963","92160","92175","92049","92137","92159","92039","92059","92068","92142","91917","92191","91934","91943","92149","91976","92060","91931","92066","92145","91948","92140","92132","92134","92133","92136","92135","92147","92152","92155","92158","92161","92162","92164","92179","92184","92182","92187","92186","92190","92194","92197","92199","91947","91990","91987","92055","92090","92093","92092","92096"
                ]
                },
"containsPlace":[
                
            {
                "@type": "City",
                "name": "Boston",
                "url": ["https://www.google.com/maps?cid=16785463447321570267,+/","https://en.wikipedia.org/wiki/Boston,_MA"]
            }
            ,
            {
                "@type": "City",
                "name": "Houston",
                "url": ["https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/@29.8065431,-95.4296898,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f!8m2!3d29.8065431!4d-95.4275011,+/","https://en.wikipedia.org/wiki/Houston,_TX"]
            }
            ,
            {
                "@type": "City",
                "name": "San Diego",
                "url": ["https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/@32.7165796,-117.1298589,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e!8m2!3d32.7165796!4d-117.1276702,+/","https://en.wikipedia.org/wiki/San_Diego,_CA"]
            }
            
                            ]}],
"subOrganization": [ {"@id" : "https://www.allstarconnections.com/boston-ma/"},{"@id" : "https://www.allstarconnections.com/houston-tx/"},{"@id" : "https://www.allstarconnections.com/san-diego-ca/"}],
"makesOffer": {
                "@type": "Offer",                
                    "itemOffered":[

            {
                "@id" : "https://www.allstarconnections.com/medical-device-biotechnology/"               
            },

            {
                "@id" : "https://www.allstarconnections.com/it-technology/"               
            },

            {
                "@id" : "https://www.allstarconnections.com/civil-structural-engineering/"               
            },

            {
                "@id" : "https://www.allstarconnections.com/manufacturing/"               
            },

            {
                "@id" : "https://www.allstarconnections.com/aerospace-engineering/"               
            },

            {
                "@id" : "https://www.allstarconnections.com/finance-accounting/"               
            }]}
}</script>
        <script type="application/ld+json">{
            "@context": "https://schema.org",
            "@id": "https://www.allstarconnections.com/boston-ma/",
            "@type": "EmploymentAgency",            
            "name": "All-Star Connections",
            "description": "All-Star Connections focuses on helping companies find the best candidates for open engineering positions. We maintain a strong network of qualified candidates and are able to present them to your company in a professional manner.

We have been in business since 2016, and know exactly how to match people with the right roles to ensure all parties involved are happy with the final outcome. All-Star Connections focuses our efforts within the engineering & technical industries and we're committed to finding your company only the best candidates.",
            "url": "https://www.allstarconnections.com/boston-ma/",
            "slogan": "All-Star Connections is a professional organization founded by a true believer in putting people first!",
            "priceRange":"$$",
            "knowsAbout":[
                "https://en.wikipedia.org/wiki/Recruitment",
"https://en.wikipedia.org/wiki/Employment_agency",
"https://en.wikipedia.org/wiki/Staffing",
"https://en.wikipedia.org/wiki/Human_resources",
"engineering recruitment agency"

          ],
            "sameAs": ["https://www.linkedin.com/company/all-star-connections/"
],
             "brand":  {"@id" : "https://www.allstarconnections.com/"},
            "paymentAccepted": ["Credit Card",
"Debit Card",
"Check"
],
           "openingHoursSpecification": [{"@type":
                "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens" : "09:00:00","closes" : "17:00:00"}],
            "logo": {
              "@type": "ImageObject",
              "contentUrl": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp",
              "url": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp"
            },
            "image":[ {
                "@type": "ImageObject",			
                "contentUrl": "https://www.allstarconnections.com/static/d02ed775a54a29d06bca259d6985a8f3/77d1c/all-star-connections-recruiting-company-locations-boston-ma.webp",
                "url": "https://www.allstarconnections.com/static/d02ed775a54a29d06bca259d6985a8f3/77d1c/all-star-connections-recruiting-company-locations-boston-ma.webp"}
                ],
            "telephone": "(617) 684-5108",
            "contactPoint": {
              "contactType": "Customer Service",
              "telephone": "(617) 684-5108"
            },
             "areaServed": [{"@type": "AdministrativeArea",               
               "geo": {
                "@type": "GeoShape",
                "postalcode": ["2101","2102","2103","2104","2105","2106","2107","2108","2109","2110","2111","2112","2113","2114","2115","2116","2117","2118","2119","2120","2121","2122","2123","2124","2125","2126","2127","2128","2129","2130","2131","2132","2133","2134","2135","2136","2137","2163","2199","2203","2205","2208","2209","2210","2215","2222","2228","2283","2284","2455"]
              },
              "containsPlace":[
                  
            {
                "@type": "City",
                "name": "Boston",
                "url": ["https://www.google.com/maps/place/Boston,+MA/@42.3145186,-71.1103698,11z/data=!3m1!4b1!4m5!3m4!1s0x89e3652d0d3d311b:0x787cbf240162e8a0!8m2!3d42.3600825!4d-71.0588801,+/","https://en.wikipedia.org/wiki/Boston,_MA"]
            }
            
          ]}],
              "makesOffer": {
                "@type": "Offer",                
                        "itemOffered": [
                            

            {
            "@id" : "https://www.allstarconnections.com/medical-device-biotechnology/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/it-technology/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/civil-structural-engineering/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/manufacturing/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/aerospace-engineering/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/finance-accounting/"            
            }
            
                        ]
                },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "111 Atlantic Ave", 
                "addressLocality": "Boston",
                "addressRegion": "MA",
                "postalCode": "02110",
                "addressCountry": "US"
              },
            "parentOrganization":{"@id": "https://www.allstarconnections.com/"},
            "hasMap": "https://www.google.com/maps?cid=16785463447321570267"
          }</script>
          
        
        <script type="application/ld+json">{
            "@context": "https://schema.org",
            "@id": "https://www.allstarconnections.com/houston-tx/",
            "@type": "EmploymentAgency",            
            "name": "All-Star Connections",
            "description": "All-Star Connections focuses on helping companies find the best candidates for open engineering positions. We maintain a strong network of qualified candidates and are able to present them to your company in a professional manner.

We have been in business since 2016, and know exactly how to match people with the right roles to ensure all parties involved are happy with the final outcome. All-Star Connections focuses our efforts within the engineering & technical industries and we're committed to finding your company only the best candidates.",
            "url": "https://www.allstarconnections.com/houston-tx/",
            "slogan": "All-Star Connections is a professional organization founded by a true believer in putting people first!",
            "priceRange":"$$",
            "knowsAbout":[
                "https://en.wikipedia.org/wiki/Recruitment",
"https://en.wikipedia.org/wiki/Employment_agency",
"https://en.wikipedia.org/wiki/Staffing",
"https://en.wikipedia.org/wiki/Human_resources",
"engineering recruitment agency"

          ],
            "sameAs": ["https://www.linkedin.com/company/all-star-connections/"
],
             "brand":  {"@id" : "https://www.allstarconnections.com/"},
            "paymentAccepted": ["Credit Card",
"Debit Card",
"Check"
],
           "openingHoursSpecification": [{"@type":
                "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens" : "09:00:00","closes" : "17:00:00"}],
            "logo": {
              "@type": "ImageObject",
              "contentUrl": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp",
              "url": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp"
            },
            "image":[ {
                "@type": "ImageObject",			
                "contentUrl": "https://www.allstarconnections.com/static/8e94a1d904e88137f23110d5f9f580c8/8399d/all-star-connections-recruiting-company-locations-houston-tx.webp",
                "url": "https://www.allstarconnections.com/static/8e94a1d904e88137f23110d5f9f580c8/8399d/all-star-connections-recruiting-company-locations-houston-tx.webp"}
                ],
            "telephone": "(832) 346-6240",
            "contactPoint": {
              "contactType": "Customer Service",
              "telephone": "(832) 346-6240"
            },
             "areaServed": [{"@type": "AdministrativeArea",               
               "geo": {
                "@type": "GeoShape",
                "postalcode": ["77002","77003","77004","77005","77006","77007","77008","77009","77010","77011","77012","77013","77014","77015","77016","77017","77018","77019","77020","77021","77022","77023","77024","77025","77026","77027","77028","77029","77030","77031","77032","77033","77034","77035","77036","77037","77038","77039","77040","77041","77042","77043","77044","77045","77046","77047","77048","77049","77050","77051","77053","77054","77055","77056","77057","77058","77059","77060","77061","77062","77063","77064","77065","77066","77067","77068","77069","77070","77071","77072","77073","77074","77075","77076","77077","77078","77079","77080","77081","77082","77083","77084","77085","77086","77087","77088","77089","77090","77091","77092","77093","77094","77095","77096","77098","77099"]
              },
              "containsPlace":[
                  
            {
                "@type": "City",
                "name": "Houston",
                "url": ["https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/@29.8065431,-95.4296898,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f!8m2!3d29.8065431!4d-95.4275011,+/","https://en.wikipedia.org/wiki/Houston,_TX"]
            }
            
          ]}],
              "makesOffer": {
                "@type": "Offer",                
                        "itemOffered": [
                            

            {
            "@id" : "https://www.allstarconnections.com/medical-device-biotechnology/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/it-technology/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/civil-structural-engineering/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/manufacturing/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/aerospace-engineering/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/finance-accounting/"            
            }
            
                        ]
                },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1544 West 23rd", 
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77008",
                "addressCountry": "US"
              },
            "parentOrganization":{"@id": "https://www.allstarconnections.com/"},
            "hasMap": "https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/@29.8065431,-95.4296898,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f!8m2!3d29.8065431!4d-95.4275011"
          }</script>
          
        
        <script type="application/ld+json">{
            "@context": "https://schema.org",
            "@id": "https://www.allstarconnections.com/san-diego-ca/",
            "@type": "EmploymentAgency",            
            "name": "All-Star Connections",
            "description": "All-Star Connections focuses on helping companies find the best candidates for open engineering positions. We maintain a strong network of qualified candidates and are able to present them to your company in a professional manner.

We have been in business since 2016, and know exactly how to match people with the right roles to ensure all parties involved are happy with the final outcome. All-Star Connections focuses our efforts within the engineering & technical industries and we're committed to finding your company only the best candidates.",
            "url": "https://www.allstarconnections.com/san-diego-ca/",
            "slogan": "All-Star Connections is a professional organization founded by a true believer in putting people first!",
            "priceRange":"$$",
            "knowsAbout":[
                "https://en.wikipedia.org/wiki/Recruitment",
"https://en.wikipedia.org/wiki/Employment_agency",
"https://en.wikipedia.org/wiki/Staffing",
"https://en.wikipedia.org/wiki/Human_resources",
"engineering recruitment agency"

          ],
            "sameAs": ["https://www.linkedin.com/company/all-star-connections/"
],
             "brand":  {"@id" : "https://www.allstarconnections.com/"},
            "paymentAccepted": ["Credit Card",
"Debit Card",
"Check"
],
           "openingHoursSpecification": [{"@type":
                "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens" : "09:00:00","closes" : "17:00:00"}],
            "logo": {
              "@type": "ImageObject",
              "contentUrl": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp",
              "url": "https://www.allstarconnections.com/static/b9ad5b1a51c8ea255b883c16a22f524c/6093f/all-star-connections-job-recruiting-agency-logo.webp"
            },
            "image":[ {
                "@type": "ImageObject",			
                "contentUrl": "https://www.allstarconnections.com/static/b09e2eb396d8e2d092574282b50a3984/360f0/all-star-connections-recruiting-company-locations-san-diego-ca.webp",
                "url": "https://www.allstarconnections.com/static/b09e2eb396d8e2d092574282b50a3984/360f0/all-star-connections-recruiting-company-locations-san-diego-ca.webp"}
                ],
            "telephone": "(619) 431-3745",
            "contactPoint": {
              "contactType": "Customer Service",
              "telephone": "(619) 431-3745"
            },
             "areaServed": [{"@type": "AdministrativeArea",               
               "geo": {
                "@type": "GeoShape",
                "postalcode": ["92101","91910","92126","91911","92592","92109","92021","92154","92130","92104","92115","92105","92122","92117","92128","92020","92056","92024","92071","92057","92103","92037","91977","92078","92026","92028","92114","91942","92129","91950","91913","92111","92027","92672","92116","92009","92054","92127","92064","92040","92025","92069","92084","92019","92058","92102","92108","92107","92065","92113","92120","91941","92131","92110","92123","92008","92083","92124","92081","92139","91915","92011","91932","92119","92118","91945","92106","92029","92173","92082","92010","92014","92075","91901","91902","92007","91914","92067","91935","92143","91912","91978","92003","92004","92036","92121","92085","92153","91906","92178","92150","92023","91980","91951","92138","92112","92163","92061","92052","92018","92079","92038","92088","91921","92192","92169","92196","92072","91916","91962","92198","92046","92174","92170","92051","91903","91909","92091","92030","92033","91905","92022","92195","92086","92176","91979","91933","91944","92177","92165","92171","92070","91908","92168","92172","92074","92166","92193","92167","92013","91946","91963","92160","92175","92049","92137","92159","92039","92059","92068","92142","91917","92191","91934","91943","92149","91976","92060","91931","92066","92145","91948","92140","92132","92134","92133","92136","92135","92147","92152","92155","92158","92161","92162","92164","92179","92184","92182","92187","92186","92190","92194","92197","92199","91947","91990","91987","92055","92090","92093","92092","92096"]
              },
              "containsPlace":[
                  
            {
                "@type": "City",
                "name": "San Diego",
                "url": ["https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/@32.7165796,-117.1298589,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e!8m2!3d32.7165796!4d-117.1276702,+/","https://en.wikipedia.org/wiki/San_Diego,_CA"]
            }
            
          ]}],
              "makesOffer": {
                "@type": "Offer",                
                        "itemOffered": [
                            

            {
            "@id" : "https://www.allstarconnections.com/medical-device-biotechnology/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/it-technology/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/civil-structural-engineering/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/manufacturing/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/aerospace-engineering/"            
            },
            

            {
            "@id" : "https://www.allstarconnections.com/finance-accounting/"            
            }
            
                        ]
                },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "3093 C Street Unit 1", 
                "addressLocality": "San Diego",
                "addressRegion": "CA",
                "postalCode": "92102",
                "addressCountry": "US"
              },
            "parentOrganization":{"@id": "https://www.allstarconnections.com/"},
            "hasMap": "https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/@32.7165796,-117.1298589,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e!8m2!3d32.7165796!4d-117.1276702"
          }</script>
          
        
        <script type="application/ld+json"> {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":"https://www.allstarconnections.com/medical-device-biotechnology/",
            "name": "Medical Device & Biotechnology Recruitment Agency",
            "url":"https://www.allstarconnections.com/medical-device-biotechnology/",
            "provider": [ {"@id": "https://www.allstarconnections.com/boston-ma/"},{"@id": "https://www.allstarconnections.com/houston-tx/"},{"@id": "https://www.allstarconnections.com/san-diego-ca/"}],
            "description": "Recruitment, staffing, and permanent placement for medical device & biotechnology companies that need to hire high-quality candidates.", 
            "brand" : {"@id": "https://www.allstarconnections.com/"},
            "audience":"Engineering companies",
            "serviceType":"Engineering recruitment"            
            }
        </script>
        
        <script type="application/ld+json"> {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":"https://www.allstarconnections.com/it-technology/",
            "name": "Information Technology IT Recruitment Agency",
            "url":"https://www.allstarconnections.com/it-technology/",
            "provider": [ {"@id": "https://www.allstarconnections.com/boston-ma/"},{"@id": "https://www.allstarconnections.com/houston-tx/"},{"@id": "https://www.allstarconnections.com/san-diego-ca/"}],
            "description": "Recruitment, staffing, and permanent placement for information technology IT companies that need to hire high-quality candidates.", 
            "brand" : {"@id": "https://www.allstarconnections.com/"},
            "audience":"Engineering companies",
            "serviceType":"Engineering recruitment"            
            }
        </script>
        
        <script type="application/ld+json"> {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":"https://www.allstarconnections.com/civil-structural-engineering/",
            "name": "Civil & Structural Engineering Recruitment Agency",
            "url":"https://www.allstarconnections.com/civil-structural-engineering/",
            "provider": [ {"@id": "https://www.allstarconnections.com/boston-ma/"},{"@id": "https://www.allstarconnections.com/houston-tx/"},{"@id": "https://www.allstarconnections.com/san-diego-ca/"}],
            "description": "Recruitment, staffing, and permanent placement for civil & structural engineering companies that need to hire high-quality candidates.", 
            "brand" : {"@id": "https://www.allstarconnections.com/"},
            "audience":"Engineering companies",
            "serviceType":"Engineering recruitment"            
            }
        </script>
        
        <script type="application/ld+json"> {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":"https://www.allstarconnections.com/manufacturing/",
            "name": "Manufacturing Recruitment Agency",
            "url":"https://www.allstarconnections.com/manufacturing/",
            "provider": [ {"@id": "https://www.allstarconnections.com/boston-ma/"},{"@id": "https://www.allstarconnections.com/houston-tx/"},{"@id": "https://www.allstarconnections.com/san-diego-ca/"}],
            "description": "Recruitment, staffing, and permanent placement for manufacturing companies that need to hire high-quality candidates.", 
            "brand" : {"@id": "https://www.allstarconnections.com/"},
            "audience":"Engineering companies",
            "serviceType":"Engineering recruitment"            
            }
        </script>
        
        <script type="application/ld+json"> {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":"https://www.allstarconnections.com/aerospace-engineering/",
            "name": "Aerospace Engineering Recruitment Agency",
            "url":"https://www.allstarconnections.com/aerospace-engineering/",
            "provider": [ {"@id": "https://www.allstarconnections.com/boston-ma/"},{"@id": "https://www.allstarconnections.com/houston-tx/"},{"@id": "https://www.allstarconnections.com/san-diego-ca/"}],
            "description": "Recruitment, staffing, and permanent placement for aerospace engineering companies that need to hire high-quality candidates.", 
            "brand" : {"@id": "https://www.allstarconnections.com/"},
            "audience":"Engineering companies",
            "serviceType":"Engineering recruitment"            
            }
        </script>
        
        <script type="application/ld+json"> {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":"https://www.allstarconnections.com/finance-accounting/",
            "name": "Finance & Accounting Recruitment Agency",
            "url":"https://www.allstarconnections.com/finance-accounting/",
            "provider": [ {"@id": "https://www.allstarconnections.com/boston-ma/"},{"@id": "https://www.allstarconnections.com/houston-tx/"},{"@id": "https://www.allstarconnections.com/san-diego-ca/"}],
            "description": "Recruitment, staffing, and permanent placement for medical device & biotechnology companies that need to hire high-quality candidates.", 
            "brand" : {"@id": "https://www.allstarconnections.com/"},
            "audience":"Engineering companies",
            "serviceType":"Engineering recruitment"            
            }
            `}
        </script>
      </SEO>
      <HeroPage
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
      />
      <Section classes="bg-white">
        <Container>
          <div className="text-center mx-auto mb-24">
            <h3 className="text-base font-semibold tracking-wider text-primary uppercase">
              Hiring Trends and Opportunities
            </h3>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Check Our Latest Recruiting Posts
            </h2>
          </div>
          <Grid classes="lg:grid-cols-2 gap-x-12 gap-y-24">
            {posts.map((post) => (
              <Col key={post.slug.current}>
                <Link
                  to={`/blog/${post.slug.current}/`}
                  className="mx-auto p-6 space-y-6 h-full flex flex-col bg-gray-200 hover:bg-gray-300 rounded-xl shadow-xl"
                >
                  <Container type="img">
                    <GatsbyImage
                      image={post.bgImg.asset.gatsbyImageData}
                      className="rounded-xl shadow-xl"
                      imgClassName="w-full h-full object-center object-cover"
                      alt={post.bgImg.alt}
                      loading="lazy"
                    />
                  </Container>
                  <div className="h-full flex flex-col justify-between space-y-8 text-left">
                    <div className="space-y-6">
                      <h2 className="text-2xl">{post.title}</h2>
                      <p className="text-gray-800">{post.description}</p>
                    </div>
                    <div className="flex flex-row place-items-between place-content-between text-gray-800 text-left text-sm">
                      <div>
                        <p className="font-semibold">{post.author.name}</p>
                      </div>
                      {post.tags.map((tag) => (
                        <div>
                          <p className="text-white">
                            <span className="bg-accent font-semibold py-1 px-5 rounded-full">
                              {tag.title}
                            </span>
                          </p>
                        </div>
                      ))}
                      <div>
                        <p>{post.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};

export default BlogPage;
