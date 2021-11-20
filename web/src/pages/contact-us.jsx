import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroContact from '../components/layouts/HeroContact';
import Section from '../components/layouts/Section';
import Container from '../components/layouts/Container';
import Grid from '../components/layouts/Grid';
import Col from '../components/layouts/Col';

const ContactUsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ContactUsPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/contact/engineering-job-recruiter-agency-all-star-connections.jpg"
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

  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;

  const seo = {
    title: `Contact Our Engineering Recruiting Agency Today`,
    description:
      'Does your company have open engineering & technical positions? All-Star Connections is a recruiting agency that focuses on these industries. Call today!',
    slug: 'https://www.allstarconnections.com/contact-us/',
  };

  const hero = {
    header: `Contact ${allCompany.name}`,
    subheader: 'Give us a call or fill out our form below to get started',
    alt: 'All-Star Connections is an engineering recruitment agency that provides top talent to companies in competitive engineering and technical industries.',
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 },
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
            "telephone": "(832) 864-5816",
            "contactPoint": {
              "contactType": "Customer Service",
              "telephone": "(832) 864-5816"
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
            "telephone": "(619) 759-5234",
            "contactPoint": {
              "contactType": "Customer Service",
              "telephone": "(619) 759-5234"
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
      <HeroContact
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
        anchor="/contact-us#form-footer/"
      />
      <Section classes="bg-white overflow-hidden">
        <Container classes="space-y-12">
          <Grid classes="lg:grid-cols-1 gap-x-12 gap-y-32">
            <Col
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0 }}
              classes="relative bg-white shadow-xl"
            >
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent">
                    Boston, MA Headquarters
                  </h2>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    {allCompany.name} is a recruiting agency that focuses on
                    engineering & technical industries. We are dedicated to
                    providing high-quality candidates to companies in Boston,
                    MA.
                  </p>
                  <p className="mt-6 text-base font-bold italic text-indigo-50 max-w-3xl">
                    Give us a call to schedule an appointment or fill out our
                    contact form for a consultation, and we’ll be happy to help
                    you!
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.phoneHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.phone}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.emailHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.email}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href={allSocials.gmbCid}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            {allCompany.address}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Website</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <Link to="/boston-ma/" className="flex">
                          <i className="fas fa-2x fa-globe ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            All-Star Connections of Boston
                          </span>
                        </Link>
                      </div>
                    </dd>
                  </dl>
                  <ul className="mt-12 ml-1 flex space-x-6">
                    <li>
                      <a
                        href={allSocials.facebook}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <i className="fab fa-2x fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.instagram}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.twitter}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.youTube}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">YouTube</span>
                        <i className="fab fa-2x fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.linkedIn}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <iframe
                    title={`Google Map of ${allCompany.name}`}
                    src={allSocials.gmbEmbed}
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
            <Col
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0 }}
              classes="relative bg-white shadow-xl"
            >
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent">
                    Houston, TX Headquarters
                  </h2>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    {allCompany.name} is a recruiting agency that focuses on
                    engineering & technical industries. We are dedicated to
                    providing high-quality candidates to companies in Houston,
                    TX.
                  </p>
                  <p className="mt-6 text-base font-bold italic text-indigo-50 max-w-3xl">
                    Give us a call to schedule an appointment or fill out our
                    contact form for a consultation, and we’ll be happy to help
                    you!
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="tel:+18328645816"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            (832) 864-5816
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.emailHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.email}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="https://www.google.com/maps/place/1544+W+23rd+St,+Houston,+TX+77008/data=!4m2!3m1!1s0x8640c70523ab679f:0xb5ac230d9ab01f4f?sa=X&ved=2ahUKEwiv_IeK-MnyAhXuYd8KHQhVATEQ8gF6BAgIEAE"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            1544 West 23rd, Houston, TX 77008
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Website</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <Link to="/houston-tx/" className="flex">
                          <i className="fas fa-2x fa-globe ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            All-Star Connections of Houston
                          </span>
                        </Link>
                      </div>
                    </dd>
                  </dl>
                  <ul className="mt-12 ml-1 flex space-x-6">
                    <li>
                      <a
                        href={allSocials.facebook}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <i className="fab fa-2x fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.instagram}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.twitter}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.youTube}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">YouTube</span>
                        <i className="fab fa-2x fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.linkedIn}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <iframe
                    title={`Google Map of ${allCompany.name}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.000044510854!2d-95.42968978489048!3d29.806543081969508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c70523ab679f%3A0xb5ac230d9ab01f4f!2s1544%20W%2023rd%20St%2C%20Houston%2C%20TX%2077008!5e0!3m2!1sen!2sus!4v1629817735341!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
            <Col
              ref={ref}
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0 }}
              classes="relative bg-white shadow-xl"
            >
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-accent">
                    San Diego, CA Headquarters
                  </h2>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    {allCompany.name} is a recruiting agency that focuses on
                    engineering & technical industries. We are dedicated to
                    providing high-quality candidates to companies in San Diego,
                    CA.
                  </p>
                  <p className="mt-6 text-base font-bold italic text-indigo-50 max-w-3xl">
                    Give us a call to schedule an appointment or fill out our
                    contact form for a consultation, and we’ll be happy to help
                    you!
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="tel:+16197595234"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            (619) 759-5234
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                      <div className="flex my-auto">
                        <a
                          href={allCompany.emailHref}
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                            {allCompany.email}
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <a
                          href="https://www.google.com/maps/place/3093+C+St+%231,+San+Diego,+CA+92102/data=!4m2!3m1!1s0x80d95378b9eec2af:0xfb3c142aff5ead4e?sa=X&ved=2ahUKEwiD86LE-MnyAhXHmuAKHXixATQQ8gF6BAgIEAE"
                          target="_blank"
                          className="flex"
                          rel="noreferrer noopener"
                        >
                          <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            3093 C Street Unit 1, San Diego, CA 92102
                          </span>
                        </a>
                      </div>
                    </dd>
                    <dt>
                      <span className="sr-only">Website</span>
                    </dt>
                    <dd className="flex text-base text-yellow-100">
                      <div className="flex my-auto">
                        <Link to="/san-diego-ca/" className="flex">
                          <i className="fas fa-2x fa-globe ml-1 mr-2 text-yellow-500 hover:text-yellow-400" />
                          <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                            All-Star Connections of San Diego
                          </span>
                        </Link>
                      </div>
                    </dd>
                  </dl>
                  <ul className="mt-12 ml-1 flex space-x-6">
                    <li>
                      <a
                        href={allSocials.facebook}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <i className="fab fa-2x fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.instagram}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <i className="fab fa-2x fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.twitter}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <i className="fab fa-2x fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.youTube}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">YouTube</span>
                        <i className="fab fa-2x fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={allSocials.linkedIn}
                        rel="noreferrer noopener"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <iframe
                    title={`Google Map of ${allCompany.name}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8512720562094!2d-117.12985888481957!3d32.71657958099031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95378b9eec2af%3A0xfb3c142aff5ead4e!2s3093%20C%20St%20%231%2C%20San%20Diego%2C%20CA%2092102!5e0!3m2!1sen!2sus!4v1629817854474!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContactUsPage;
