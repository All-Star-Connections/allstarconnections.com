import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useSanitySettingsCompany from '../hooks/useSanitySettingsCompany';
import useSanitySettingsSocials from '../hooks/useSanitySettingsSocials';
import useSanitySettingsColors from '../hooks/useSanitySettingsColors';
import useSanitySettingsMetadata from '../hooks/useSanitySettingsMetadata';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroPage from '../components/layouts/HeroPage';
import PageSidebar from '../components/layouts/PageSidebar';
import Testimonial from '../components/common/Testimonial';
import Container from '../components/layouts/Container';
import Section from '../components/layouts/Section';
import Grid from '../components/layouts/Grid';
import Row from '../components/layouts/Row';

const TestimonialsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query TestimonialsPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/testimonials/recruitment-agency-testimonials-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgMike: file(
        relativePath: {
          eq: "assets/images/testimonials/mike-egli-director-supply-chain-tegra-medical-devices.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBarry: file(
        relativePath: {
          eq: "assets/images/testimonials/barry-shaw-senior-director-quality-arsenal-medical.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgKatie: file(
        relativePath: {
          eq: "assets/images/testimonials/kate-linkedin-5-star-review-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHiro: file(
        relativePath: {
          eq: "assets/images/testimonials/hiro-endo-chief-technology-officer-test-devices-schenck-usa-corp.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgTina: file(
        relativePath: {
          eq: "assets/images/testimonials/tina-vidal-duart-chief-executive-officer-cdr-health.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgAmir: file(
        relativePath: {
          eq: "assets/images/testimonials/amir-selman-manager-manufacturing-excellence-advanced-instruments.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBruno: file(
        relativePath: {
          eq: "assets/images/testimonials/bruno-ribeiro-quality-manager-line-bore-industries.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgGarrett: file(
        relativePath: {
          eq: "assets/images/testimonials/garrett-krapf-regional-account-manager-yale-cordage.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgInderjit: file(
        relativePath: {
          eq: "assets/images/testimonials/inderjit-panesar-financial-controller-faber-construction.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgMatt: file(
        relativePath: {
          eq: "assets/images/testimonials/matt-vice-lead-packaging-engineer-kimberly-clark-professional.jpg"
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
  const imgMike = data.imgMike.childImageSharp.gatsbyImageData;
  const imgBarry = data.imgBarry.childImageSharp.gatsbyImageData;
  const imgKatie = data.imgKatie.childImageSharp.gatsbyImageData;
  const imgHiro = data.imgHiro.childImageSharp.gatsbyImageData;
  const imgTina = data.imgTina.childImageSharp.gatsbyImageData;
  const imgAmir = data.imgAmir.childImageSharp.gatsbyImageData;
  const imgBruno = data.imgBruno.childImageSharp.gatsbyImageData;
  const imgGarrett = data.imgGarrett.childImageSharp.gatsbyImageData;
  const imgInderjit = data.imgInderjit.childImageSharp.gatsbyImageData;
  const imgMatt = data.imgMatt.childImageSharp.gatsbyImageData;

  const seo = {
    title: `5-Star Recruitment Agency Reviews & Testimonials`,
    description:
      'We have earned many 5-star reviews from satisfied clients. Read how they received high-quality candidates that resulted in permanent placements.',
    slug: 'https://www.allstarconnections.com/testimonials/',
  };

  const hero = {
    header: '5-Star Recruiting Agency Testimonials',
    subheader:
      'Read our 5-star reviews on LinkedIn and Google Reviews from satisfied clients',
    alt: 'All-Star Connections is a recruitment agency that focuses on permanent placements in engineering companies.',
  };

  const testimonials = [
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'All-Star Connections and I collaborated several times over the past year to fill positions within my organization. As a recruiter, All-Star Connections was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. All-Star Connections provided solid advice, sometimes even when it may not have been the best thing for them, but their goal was a long term relationship with me and my organization, not a short term win for themselves, and that showed in everything they did.',
      img: imgMike,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Mike Egli.',
      author: 'Mike Egli',
      position: 'Director of Supply Chain',
      company: 'Tegra Medical',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'We had been looking to fill a senior level Quality role for over 4 months before we engaged with All Star Connections. They spent the time to learn about what we were looking for and immediately produced strong candidates, one of which we hired remotely within a month of working with All-Star Connections.',
      img: imgBarry,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Barry Shaw.',
      author: 'Barry Shaw',
      position: 'Senior Director of Quality',
      company: 'Arsenal Medical',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'I have worked with All-Star Connections over the past few years. They have helped me hire a wide variety of roles in at least three different states! Overseeing hiring in multiple states can be daunting, but All-Star Connections has made the process seamless. They are attentive, and always willing to provide information necessary for local trends. They deliver quality candidates quickly and I am very appreciative of that! Looking forward to working with All-Star Connections for years to come!',
      img: imgKatie,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Katie Melnikoff.',
      author: 'Katie Melnikoff, SHRM-CP ',
      position: 'Sr. HR Business Partner',
      company: 'LION',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'All-Star Connections has been helping us to hire Engineers. They understand our needs and gears in to action quickly - without wasting time. It has been a pleasure working with All-Star Connections.',
      img: imgHiro,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Hiro Endo.',
      author: 'Hiro Endo',
      position: 'Chief Technology Officer',
      company: 'Test Devices - SCHENCK USA CORP.',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        "As Executive Vice President and Director of Human Resources we are always actively recruiting qualified engineers. We've worked with numerous recruiting firms with varying degrees of success. We started working with All-Star Connections after they cold called our firm and frankly did so as all the other firms we had been working with failed to deliver candidates that fit our criteria. Once engaged, immediately All-Star Connections sent over several candidates that met our firms needs and we ended up hiring one of their recommendations. The process was extremely fast (which we needed) and All-Star Connections and their team were thorough and professional and great at follow up and follow through! I highly recommend and will continue using All Star Connections in the future!",
      img: imgTina,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Tina Vidal-Duart.',
      author: 'Tina Vidal-Duart',
      position: 'Chief Executive Officer',
      company: 'CDR Health',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'I worked with All-Star Connections on filling two positions. Although those positions were a bit difficult to fill, All-Star Connections provided great assistance by selecting and sending resumes of candidates that exactly meet our needs. The candidates selected by All-Star Connections met our requirements and both were hired within a couple of weeks. Working with All-Star Connections is easy and straight to the point. No floods of resumes, but rather a precise selection of what was requested. Working with All-Star Connections was a great experience.',
      img: imgAmir,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Amir Selman.',
      author: 'Amir Selman',
      position: 'Manufacturing Excellence',
      company: 'Advanced Instruments, LLC.',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'All-Star Connections was very helpful and professional when guiding me throughout the entire recruitment and interview process. They provided a great deal of information every step of the way and was always available and prepared to lend any assistance.',
      img: imgBruno,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Bruno Ribeiro.',
      author: 'Bruno Ribeiro',
      position: 'Quality Manager',
      company: 'Line Bore Industries',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        "All-Star Connections recruited me for the position I currently have here at TPI Composites. They were very thorough in their research and very responsive to things I was interested in before starting with the company. Overall, I was very impressed with All-Star Connections' professionalism and work ethic through the whole process. I have had recruiters in the past that were a bit over powering and demanding, rather than working to help find the right fit. I would recommend All-Star Connections to anyone looking for a professional career and wish them all the success they deserves.",
      img: imgGarrett,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Garrett Krapf.',
      author: 'Garrett Krapf',
      position: 'Business Development Manager',
      company: 'TPI Composites',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'All-Star Connections, this is past due on my side but I wanted to say thank you again for finding me great candidates. Thanks for making the process so easy and getting it worked out so fast as it was time sensitive. I will definitely be recommending anyone that is looking for a job or candidate to you. Thanks again.',
      img: imgInderjit,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Inderjit Panesar.',
      author: 'Inderjit Panesar',
      position: 'Financial Controller',
      company: 'Faber Construction',
    },
    {
      header: '5-Star Recruiting Review',
      testimonial:
        'All-Star Connections helped me every step of the way in being placed with a new company that was a great fit for my career path. From setting up interviews to helping manage my move, I was very satisfied with their helpfulness during the whole process.',
      img: imgMatt,
      imgAlt:
        'All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Matt Vice.',
      author: 'Matt Vice',
      position: 'Lead Packaging Engineer',
      company: 'Kimberly-Clark Professional',
    },
  ];

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
      <HeroPage
        imgHeroBg={imgHeroBg}
        altText={hero.alt}
        headerText={hero.header}
        subheaderText={hero.subheader}
      />
      <Section>
        <Container>
          <PageSidebar>
            <div className="space-y-12">
              <div className="space-y-6">
                <h2>Highly Rated Staffing Agency</h2>
                <p>
                  Over the years, All-Star Connections has received numerous
                  5-star reviews on LinkedIn and Google Reviews for our
                  top-notch staffing in highly competitive marketplaces.{' '}
                </p>
                <p>
                  The results of our flexible, friendly recruitment solutions
                  for big corporations as well as small businesses speak for
                  themselves.
                </p>
                <Grid classes="grid-col-1 gap-y-16">
                  {testimonials.map((testimonial) => (
                    <Row>
                      <Testimonial
                        containerStyles="bg-primary"
                        header={testimonial.header}
                        headerStyles="text-white"
                        testimonial={testimonial.testimonial}
                        testimonialStyles="text-gray-100"
                        imgTestimonial={testimonial.img}
                        imgAlt={testimonial.imgAlt}
                        imgStyles=""
                        author={testimonial.author}
                        authorStyles="text-blue-300"
                        position={testimonial.position}
                        positionStyles="text-gray-50"
                        company={testimonial.company}
                      />
                    </Row>
                  ))}
                </Grid>
              </div>
            </div>
          </PageSidebar>
        </Container>
      </Section>
    </Layout>
  );
};

export default TestimonialsPage;
