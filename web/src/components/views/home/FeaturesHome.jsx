/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Grid from '../../layouts/Grid';
import Col from '../../layouts/Col';

const FeaturesHome = () => {
  const data = useStaticQuery(graphql`
    query FeaturesHomeQ {
      imgFeatureOne: file(
        relativePath: {
          eq: "assets/images/home/industries-medical-device-biotechnology-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgFeatureTwo: file(
        relativePath: {
          eq: "assets/images/home/industries-information-technology-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgFeatureThree: file(
        relativePath: {
          eq: "assets/images/home/industries-manufacturing-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgFeatureFour: file(
        relativePath: {
          eq: "assets/images/home/industries-civil-structural-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgFeatureFive: file(
        relativePath: {
          eq: "assets/images/home/industries-aerospace-engineering-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgFeatureSix: file(
        relativePath: {
          eq: "assets/images/home/industries-finance-accounting-job-recruiter-agency-all-star-connections.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgFeatureOne = data.imgFeatureOne.childImageSharp.gatsbyImageData;
  const imgFeatureTwo = data.imgFeatureTwo.childImageSharp.gatsbyImageData;
  const imgFeatureThree = data.imgFeatureThree.childImageSharp.gatsbyImageData;
  const imgFeatureFour = data.imgFeatureFour.childImageSharp.gatsbyImageData;
  const imgFeatureFive = data.imgFeatureFive.childImageSharp.gatsbyImageData;
  const imgFeatureSix = data.imgFeatureSix.childImageSharp.gatsbyImageData;

  const features = [
    {
      name: 'Medical Device & Biotechnology',
      image: imgFeatureOne,
      alt: 'All-Star Connections is a medical device recruiting agency and a biotechnology recruiting agency.',
      link: '/medical-device-biotechnology/',
    },
    {
      name: 'Information Technology (IT)',
      image: imgFeatureTwo,
      alt: 'All-Star Connections is an information technology (IT) recruiting agency.',
      link: '/it-technology/',
    },
    {
      name: 'Civil & Structural Engineering',
      image: imgFeatureFour,
      alt: 'All-Star Connections is a civil & structural engineering recruiting agency.',
      link: '/civil-structural-engineering/',
    },
    {
      name: 'Manufacturing',
      image: imgFeatureThree,
      alt: 'All-Star Connections is a manufacturing recruiting agency.',
      link: '/manufacturing/',
    },
    {
      name: 'Aerospace Engineering',
      image: imgFeatureFive,
      alt: 'All-Star Connections is an aerospace engineering recruiting agency.',
      link: '/aerospace-engineering/',
    },
    {
      name: 'Finance & Accounting',
      image: imgFeatureSix,
      alt: 'All-Star Connections is a finance & accounting recruiting agency.',
      link: '/finance-accounting/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
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
    <div className="relative bg-gray-200 py-16 sm:py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h3 className="text-base font-semibold tracking-wider text-primary uppercase">
          Industries We Work In
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Job Recruiting Industries
        </h2>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
          What's the best way for you to grow your company? Add some new talent!
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
          With a little focus, the next hire can help your business be more
          efficient and profitable. That's why we specialize in certain
          industries so that we deliver the best results to our clients.
        </p>
        <div className="mt-12">
          <Grid classes="gap-8 sm:grid-cols-2 grid-flow-row auto-rows-fr">
            {features.map((feature) => (
              <Col key={feature.name} className="pt-6 h-full">
                <motion.div
                  ref={ref}
                  variants={itemVariants}
                  className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
                >
                  <Link
                    to={feature.link}
                    className="relative py-24 px-4 bg-primary hover:bg-blueGray-800 transition-all ease-in-out rounded-xl shadow-2xl overflow-hidden lg:px-8 flex md:h-full lg:flex-col justify-between"
                  >
                    <div className="absolute inset-0 opacity-20 filter saturate-0 mix-blend-multiply">
                      <GatsbyImage
                        image={feature.image}
                        className="w-full h-full object-cover"
                        alt={feature.alt}
                      />
                    </div>
                    <div className="relative z-10 m-auto text-center">
                      <h3 className="mx-auto my-8 text-3xl font-medium text-white drop-shadow-text-darker">
                        <span className="drop-shadow-text-darker">
                          {feature.name}
                        </span>
                      </h3>

                      <Link
                        to={feature.link}
                        className="text-xl font-medium text-accent hover:text-gray-300"
                      >
                        Learn More <span aria-hidden="true">&rarr;</span>{' '}
                      </Link>
                    </div>
                  </Link>
                </motion.div>
              </Col>
            ))}
          </Grid>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesHome;
