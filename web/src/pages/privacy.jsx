import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroPage from '../components/layouts/HeroPage';
import Container from '../components/layouts/Container';
import Section from '../components/layouts/Section';

const PrivacyPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query PrivacyPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/privacy/privacy-policy-job-recruiter-staffing-agency-all-star-connections.jpg"
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
    title: `We Respect Your Privacy Rights - Read Our Privacy Policy`,
    description:
      'All-Star Connections respects your privacy rights. Please read our privacy policy to understand which data we collect and why.',
    slug: 'https://www.allstarconnections.com/privacy/',
  };

  const hero = {
    header: 'Our Privacy Policy',
    subheader:
      'We respect your privacy rights. Please read our privacy policy below.',
    alt: 'All-Star Connections is a recruitment agency that respects your privacy. Read our privacy policy to understand why our staffing agency collects your data.',
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
      <Section>
        <Container type="sm">
          <div className="space-y-8 lg:max-w-3xl mx-auto">
            <h2 className="text-center">
              <span className="text-base text-gray-500 uppercase break-normal">
                {allCompany.name}
                <br />
              </span>
              <span className="break-normal text-3xl">Privacy Policy</span>
            </h2>
            <p>
              {allCompany.name} (the &quot;
              <span className="font-bold italic">Company</span>
              &quot;) respects the privacy of its online visitors and customers
              of its products and services (including, but not limited to{' '}
              {allCompany.name}) and complies with applicable laws for the
              protection of your privacy, including, without limitation, the
              European Union General Data Protection Regulation (&quot;
              <span className="font-bold italic">GDPR</span>&quot;) and the
              Swiss and EU Privacy Shield Frameworks.
            </p>
            <h3 className="font-bold">1. Definitions</h3>
            <p>
              Wherever we talk about Personal Data below (&quot;
              <span className="font-bold italic">Personal Data</span>&quot;), we
              mean any information that can either itself identify you as an
              individual (&quot;
              <span className="font-bold italic">
                Personally Identifying Information
              </span>
              &quot;) or that can be connected to you indirectly by linking it
              to Personally Identifying Information, for example:
            </p>
            <p>
              (i) your account registration information on our website and in
              our App;
            </p>
            <p>
              (ii) when you request any support from us or report any problem to
              us;
            </p>
            <p>
              (iii) information provided from using certain services or
              features;
            </p>
            <p>(iv) information from completion of survey or questionnaire;</p>
            <p>
              (v) technical information, including the Internet protocol (IP)
              address used
            </p>
            <p>
              (vi) and your log-in information, browser, time zone setting,
              browser plug-in types and versions, operating system and platform;
            </p>
            <p>
              (vii) details of any transactions, purchases and payments you
              made;
            </p>
            <p>
              (viii) your general interaction with the website, including the
              full Uniform Resource Locators (URLs), clickstream to, through and
              from our site, products you viewed or searched for, page response
              times, download errors, length of visits to certain pages, page
              interaction information;
            </p>
            <p>
              (ix) information received from third parties, such as business
              partners, sub-contractors, payment and delivery services, referral
              by other users.
            </p>
            <p>
              The Company also processes anonymous data, aggregated or not, to
              analyze and produce statistics related to the habits, usage
              patterns, and demographics of customers as a group or as
              individuals. Such anonymous data does not allow the identification
              of the customers to which it relates. the Company may share
              anonymous data, aggregated or not, with third parties. Please be
              aware that the Company may choose to permit third parties to offer
              subscription and/or registration-based services through the
              Company's site. The Company shall not be responsible for any
              actions or policies of such third parties and you should check the
              applicable privacy policy of such party when providing personally
              identifiable information.
            </p>
            <p>
              By using the Company's website, you signify your assent to the
              Company's privacy policy. If you do not agree to this policy,
              please do not use the Company's website(s).
            </p>
            <h3 className="font-bold">
              2. Why the Company Collects and Processes Data
            </h3>
            <p>
              The Company collects and processes Personal Data for the following
              reasons:
            </p>
            <p>
              (a) performing our agreement with you to provide content and
              services, including providing, improving and developing our
              services;
            </p>
            <p>
              (b) researching, designing and launching new features or products;
            </p>
            <p>
              (c) providing you with alerts, updates, materials or information
              about our services or other types of information that you
              requested or signed up to;
            </p>
            <p>(d) collecting overdue amounts;</p>
            <p>
              (e) responding or taking part in legal proceedings, including
              seeking professional advice, or for the purposes of the legitimate
              and legal interests of the Company or a third party (e.g. the
              interests of our other customers);
            </p>
            <p>(f) compliance with legal obligations that we are subject to;</p>
            <p>
              (g) communicating with you and responding to your questions or
              requests;
            </p>
            <p>
              (h) direct marketing - we require your consent specifically for
              this purpose and you may opt out any time;
            </p>
            <p>(i) purposes directly related or incidental to the above; or</p>
            <p>(j) where you have given consent to it.</p>
            <p>
              These reasons for collecting and processing Personal Data
              determine and limit what Personal Data we collect and how we use
              it (section 3. below), how long we store it (section 4. below),
              who has access to it (section 5. below) and what rights and other
              control mechanisms are available to you as a user (section 6.
              below).
            </p>
            <h3 className="font-bold">3. What Data We Collect and Process</h3>
            <h4 className="font-bold">3.1 Basic Account Data</h4>
            <p>
              When setting up an Account, the Company will collect your email
              address and country of residence. You are also required to choose
              a user name and a password. The provision of this information is
              necessary to register a User Account. You are responsible for
              keeping this password confidential. We ask you not to share a
              password with anyone.
            </p>
            <p>
              During setup of your account, the account is automatically
              assigned a number (the &quot;
              <span className="font-bold italic">ID</span>
              &quot;) that is later used to reference your user account without
              directly exposing Personally Identifying Information about you.
            </p>
            <h4 className="font-bold">3.2 Transaction and Payment Data</h4>
            <p>
              In order to make a transaction online, you may need to provide
              payment data to the Company to enable the transaction. If you pay
              by credit card, you need to provide typical credit card
              information (name, address, credit card number, expiration date
              and security code) to the Company, which the Company will process
              and transmit to the payment service provider of your choice to
              enable the transaction and perform anti-fraud checks. Likewise,
              the Company will receive data from your payment service provider
              for the same reasons.
            </p>
            <h4 className="font-bold">3.3 Other Data You Explicitly Submit</h4>
            <p>
              We will collect and process Personal Data whenever you explicitly
              provide it to us or send it as part of communication with others,
              e.g. in forums, chats, or when you provide feedback or other user
              generated content. This data includes:
            </p>
            <p>
              (a) Information that you post, comment or follow in any of our
              Content and Services;
            </p>
            <p>(b) Information sent through chat;</p>
            <p>
              (c) Information you provide when you request information or
              support from us or purchase Content and Services from us,
              including information necessary to process your orders with the
              relevant payment merchant or, in case of physical goods, shipping
              providers;
            </p>
            <p>
              (d) Information you provide to us when participating in
              competitions, contests and tournaments or responding to surveys,
              e.g. your contact details.
            </p>
            <h4 className="font-bold">3.4 Your Use of the Websites</h4>
            <p>
              We collect a variety of information through your general
              interaction with the websites, Content and Services offered by us.
              Personal Data we collect may include, but is not limited to,
              browser and device information, data collected through automated
              electronic interactions and application usage data. Likewise, we
              will track your process across your websites and applications to
              verify that you are not a bot and to optimize our services.
            </p>
            <h4 className="font-bold">
              3.5 Your Use of Services and other Subscriptions
            </h4>
            <p>
              In order to provide you with services, we need to collect, store
              and use various information about your activity in our Content and
              Services. &quot;Content-Related Information&quot; includes your
              ID, as well as information about your preferences, progress, time
              spent, as well as information about the device you are using,
              including what operating system you are using, device settings,
              unique device identifiers, and crash data.
            </p>
            <h4 className="font-bold">3.6 Tracking Data and Cookies</h4>
            <p>
              We use &quot;Cookies&quot;, which are text files placed on your
              computer, to help us analyze how users use our services, and
              similar technologies (e.g. web beacons, pixels, ad tags and device
              identifiers) to recognize you and/or your device(s) on, off and
              across different devices and our services, as well as to improve
              the services we are offering, to improve marketing, analytics or
              website functionality. The use of Cookies is standard on the
              internet. Although most web browsers automatically accept cookies,
              the decision of whether to accept or not is yours. You may adjust
              your browser settings to prevent the reception of cookies, or to
              provide notification whenever a cookie is sent to you. You may
              refuse the use of cookies by selecting the appropriate settings on
              your browser. However, please note that if you do this, you may
              not be able to access the full functionality of our websites. When
              you visit any of our services, our servers log your global IP
              address, which is a number that is automatically assigned to the
              network your computer is part of.
            </p>
            <h4 className="font-bold">3.7 Third Party Services</h4>
            <p>
              This website uses Google Analytics, Google Search Console, Google
              Tag Manager, Google Maps, Facebook Pixel (&quot;
              <span className="font-bold italic">Third Party Service</span>
              &quot;). Third Party Service uses "cookies", which are text files
              placed on visitors' computers, to help the website operators
              analyze how visitors use the site. The information generated by
              the cookie about the visitors' use of the website will generally
              be transmitted to and stored by Third Party Service on servers in
              the [United States]. Please be aware that Company cannot or does
              not control the use of cookies or the resulting information by the
              Third Party Service.
            </p>
            <p>
              On behalf of the website operator, Third Party Service will use
              this information for the purpose of evaluating the website /
              location / credentials for its users, in order to compile reports
              on website activity, and to provide other services relating to
              website activity and internet usage for website operators.
            </p>
            <p>
              Third Party Service will not associate the IP address transferred
              any other data held by the Company. You may refuse the use of
              cookies by selecting the appropriate settings on your browser.
              However, please note that in this case you may not be able to use
              the full functionality of this website.
            </p>
            <h4 className="font-bold">3.8 Content Recommendations</h4>
            <p>
              We may process information collected under this section 3 so that
              content, products and services shown on the pages and in update
              messages displayed when launching the service can be tailored to
              meet your needs and populated with relevant recommendations and
              offers. This is done to improve your customer experience.
            </p>
            <p>
              Subject to your separate consent or where explicitly permitted
              under applicable laws on email marketing, the Company may send you
              marketing messages about products and services offered by the
              Company to your email address. In such a case we may also use your
              collected information to customise such marketing messages as well
              as collect information on whether you opened such messages and
              which links in their text you followed.
            </p>
            <p>
              You can opt out or withdraw your consent to receive marketing
              emails at any time by either withdrawing the consent on the same
              page where you previously provided it or clicking the
              "unsubscribe" link provided in every marketing email.
              Notwithstanding any opt out of promotional or marketing emails by
              you, we reserve the right to contact you regarding account status,
              changes to the user agreement and other matters relevant to the
              underlying service and/or the information collected.
            </p>
            <h4 className="font-bold">
              3.9 Information Required to Detect Violations
            </h4>
            <p>
              We collect certain data that is required for our detection,
              investigation and prevention of fraud, cheating and other
              violations of the applicable laws (&quot;
              <span className="font-bold italic">Violations</span>&quot;). This
              data is used only for the purposes of detection, investigation,
              prevention and, where applicable, acting on of such Violations and
              stored only for the minimum amount of time needed for this
              purpose. If the data indicates that a Violation has occurred, we
              will further store the data for the establishment, exercise or
              defense of legal claims during the applicable statute of
              limitations or until a legal case related to it has been resolved.
              Please note that the specific data stored for this purpose may not
              be disclosed to you if the disclosure will compromise the
              mechanism through which we detect, investigate and prevent such
              Violations.
            </p>
            <h3 className="font-bold">4. How We Store Data</h3>
            <h4 className="font-bold">4.1 Period of Storage</h4>
            <p>
              We will store your information as long as necessary to fulfil the
              purposes for which the information is collected and processed or —
              where the applicable law provides for longer storage and retention
              period — for the storage and retention period required by law. In
              particular, if you terminate your User Account, your Personal Data
              will be marked for deletion except to the degree legal
              requirements or other prevailing legitimate purposes dictate a
              longer storage. All your data and credits will be lost after
              deletion.
            </p>
            <h4 className="font-bold">4.2 Deletion of Data</h4>
            <p>
              In cases where Personal Data cannot be completely deleted in order
              to ensure the consistency of the system, the user experience or
              the community, your information will be permanently anonymized.
              Please note that the Company is required to retain certain
              transactional data under statutory commercial and tax law for a
              period of up to ten (10) years.
            </p>
            <p>
              If you withdraw your consent on which a processing of your
              Personal Data, we will delete your Personal Data without undue
              delay to the extent that the collection and processing of the
              Personal Data was based on the withdrawn consent.
            </p>
            <p>
              If you exercise a right to object to the processing of your
              Personal Data, we will review your objection and delete your
              Personal Data that we processed for the purpose to which you
              objected without undue delay, unless another legal basis for
              processing and retaining this data exists or unless applicable law
              requires us to retain the data.
            </p>
            <h4 className="font-bold">4.3 Location of Storage</h4>
            <p>
              The data that we collect from you may be transferred to, and
              stored at United States, or a destination outside of your
              jurisdiction. It may also be processed by third parties who
              operate outside of your jurisdiction. By submitting your personal
              data you agree to this transfer, storing or processing of data
              outside of your jurisdiction. We will take all steps reasonably
              necessary to ensure that your data is treated securely in
              accordance with this privacy policy.
            </p>
            <h3 className="font-bold">5. Who Has Access to Data</h3>
            <p>
              5.1 The Company and its subsidiaries may share your Personal Data
              with each other and use it to the degree necessary to achieve the
              purposes listed in section 2 above. This includes our overseas
              offices, affiliates, business partners and counterparts (on a
              need-to-know basis only). In the event of a reorganization, sale
              or merger we may transfer Personal Data to the relevant or
              proposed transferees of our operations (or a substantial part
              thereof) in any part of the world.
            </p>
            <p>
              5.2 We may also share your Personal Data with our third party
              providers that provide customer support services in connection
              with goods, Content and Services distributed via us. Your Personal
              Data will be used in accordance with this Privacy Policy and only
              as far as this is necessary for performing customer support
              services.
            </p>
            <p>
              5.3 We may also share your information with our personnel, agents,
              advisers, auditors, contractors, financial institutions, and
              service providers in connection with our operations or services
              (for example staff engaged in the fulfilment of your order, the
              processing of your payment and the provision of support services);
              persons under a duty of confidentiality to us; or persons to whom
              we are required to make disclosure under applicable laws and 
              regulations in any part of the world.
            </p>
            <p>
              5.4 In accordance with internet standards, we may also share
              certain information (including your IP address and the
              identification of content you wish to access) with our third party
              network providers that provide content delivery network services
              and server services in connection with us. Our content delivery
              network providers enable the delivery of digital content you have
              requested, by using a system of distributed servers that deliver
              the content to you, based on your geographic location.
            </p>
            <p>
              5.5 The Company may allow you to link your User Account to an
              account offered by a third party. If you consent to link the
              accounts, the Company may collect and combine information you
              allowed the Company to receive from a third party with information
              of your User Account to the degree allowed by your consent at the
              time. If the linking of the accounts requires the transmission of
              information about your person from the Company to a third party,
              you will be informed about it before the linking takes place and
              you will be given the opportunity to consent to the linking and
              the transmission of your information. The third party's use of
              your information will be subject to the third party's privacy
              policy, which we encourage you to review.
            </p>
            <p>
              5.6 The Company may release Personal Data to comply with court
              orders or laws and regulations that require us to disclose such
              information.
            </p>
            <p>
              5.7 We make certain data related to your User Account available to
              other users. This information can be accessed by anyone by
              querying your ID. At a minimum, the public persona name you have
              chosen to represent you are accessible this way. The accessibility
              of any additional info about you can be controlled through your
              user profile page; data publicly available on your profile page
              can be accessed automatically. While we do not knowingly share
              Personally Identifying Information about you such as your real
              name or your email address, any information you share about
              yourself on your public profile can be accessed, including
              information that may make you identifiable.
            </p>
            <p>
              5.8 The community includes message boards, forums and/or chat
              areas, where users can exchange ideas and communicate with each
              other. When posting a message to a board, forum or chat area,
              please be aware that the information is being made publicly
              available online; therefore, you are doing so at your own risk;
              and that such information can be collected, correlated and used by
              third parties and may result in unsolicitated messages from other
              posters or third parties and these activities are beyond our
              control. If your Personal Data is posted on one of our community
              forums against your will, please use the reporting function and
              the help site to request its removal.
            </p>
            <h3 className="font-bold">6. Your Rights and Control Mechanisms</h3>
            <p>You have the right to:</p>
            <p>(a) check whether we hold personal data about you;</p>
            <p>(b) access any personal data we hold about you;</p>
            <p>
              (c) require us to correct any inaccuracy or error in any personal
              data we hold about you;
            </p>
            <p>
              (d) request for the deletion of your personal data through the
              deletion of user account. The data protection laws of the European
              Economic Area and other territories grant their citizens certain
              rights in relation to their Personal Data. While other
              jurisdictions may provide fewer statutory rights to their
              citizens, we make the tools designed to exercise such rights
              available to our customers worldwide.
            </p>
            <p>
              As a resident of the European Economic Area you have the following
              rights in relation to your Personal Data:
            </p>
            <h4 className="font-bold">6.1 Right of Access</h4>
            <p>
              You have the right to access your Personal Data that we hold about
              you, i.e. the right to require free of charge (i) information
              whether your Personal Data is retained, (ii) access to and/or
              (iii) duplicates of the Personal Data retained. You can use the
              right to access to your Personal Data through the Privacy
              Dashboard. If the request affects the rights and freedoms of
              others or is manifestly unfounded or excessive, we reserve the
              right to charge a reasonable fee (taking into account the
              administrative costs of providing the information or communication
              or taking the action requested) or refuse to act on the request.
            </p>
            <h4 className="font-bold">6.2 Right to Rectification</h4>
            <p>
              If we process your Personal Data, we shall endeavor to ensure by
              implementing suitable measures that your Personal Data is accurate
              and up-to-date for the purposes for which it was collected. If
              your Personal Data is inaccurate or incomplete, you can change the
              information you provided via the Privacy Dashboard.
            </p>
            <h4 className="font-bold">6.3. Right to Erasure</h4>
            <p>
              You have the right to obtain deletion by us of Personal Data
              concerning you by deleting your User Account via the support page.
            </p>
            <p>
              As a result of deleting your User Account, you will lose access to
              services, including the User Account, Subscriptions and
              service-related information linked to the User Account and the
              possibility to access other services you are using the User
              Account for.
            </p>
            <p>
              We allow you to restore your User Account during a grace period of
              30 (thirty) days from the moment you request deletion of your User
              Account. This functionality allows you not to lose your account by
              mistake, because of your loss of your account credentials or due
              to hacking. During the suspension period, we will be able to
              finalize financial and other activities that you may have
              initiated before sending the User Account deletion request. After
              the grace period, Personal Data associated with your account will
              be deleted subject to section 4. above.
            </p>
            <p>
              In some cases, deletion of your User Account, and therefore
              Personal Data deletion, is complicated. In some cases, considering
              the complexity and number of the requests, the period for Personal
              Data erasure may be extended, but for no longer than two further
              months.
            </p>
            <h4 className="font-bold">6.4 Right to Object</h4>
            <p>
              When our processing of your Personal Data is based on legitimate
              interests according to Article 6(1)(f) of the GDPR / section 2.c)
              of this Privacy Policy, you have the right to object to this
              processing. If you object we will no longer process your Personal
              Data unless there are compelling and prevailing legitimate grounds
              for the processing as described in Article 21 of the GDPR; in
              particular if the data is necessary for the establishment,
              exercise or defense of legal claims. You also have the right to
              lodge a complaint at a supervisory authority.
            </p>
            <h3 className="font-bold">7. Children</h3>
            <p>
              The minimum age to create a User Account is 18. the Company will
              not knowingly collect Personal Data from children under this age.
              Insofar as certain countries apply a higher age of consent for the
              collection of Personal Data, the Company requires parental consent
              before a User Account can be created and Personal Data associated
              with it collected. The Company encourages parents to instruct
              their children to never give out personal information when online.
            </p>
            <h3 className="font-bold">8. Contact Info</h3>
            <p>
              You can contact the Company's data protection officer at the
              address below.
            </p>
            <p>
              While we review any request sent by mail, please be aware that to
              combat fraud, harassment and identity theft, the only way to
              access, rectify or delete your data is through logging in with
              your User Account or contacting us at{' '}
              <a href={allCompany.emailHref} target="_blank" rel="noreferrer">
                {allCompany.email}
              </a>
              .
            </p>
            <h3 className="font-bold">9. Revision Date</h3>
            <p>
              This privacy policy was last updated on 21 May 2021 (&quot;
              <span className="font-bold italic">Revision Date</span>&quot;). If
              you were a user before the Revision Date, it replaces the existing
              Privacy Policy. The Company reserves the right to change this
              policy at any time by notifying the users of the existence of a
              new privacy statement. This policy is not intended to and does not
              create any contractual or legal rights in or behalf of any party.
            </p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default PrivacyPage;
