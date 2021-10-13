import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import FormSidebar from '../forms/FormSidebar';
import TestimonialSidebar from './TestimonialSidebar';
import ListSidebar from './ListSidebar';
import FadeIn from '../../layouts/FadeIn';

const Sidebar = ({ industry }) => {
  const data = useStaticQuery(graphql`
    query SidebarQ {
      imgTestimonialMike: file(
        relativePath: {
          eq: "assets/images/testimonials/mike-egli-director-supply-chain-tegra-medical-devices.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgTestimonialHiro: file(
        relativePath: {
          eq: "assets/images/testimonials/hiro-endo-chief-technology-officer-test-devices-schenck-usa-corp.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgTestimonialInderjit: file(
        relativePath: {
          eq: "assets/images/testimonials/inderjit-panesar-financial-controller-faber-construction.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  // const sanity = data.allSanityService.nodes;
  // {
  //   sanity.map((node) => {
  //     const slug = node.slug.current;
  //   });
  // }

  const imgTestimonialMike =
    data.imgTestimonialMike.childImageSharp.gatsbyImageData;
  const imgTestimonialHiro =
    data.imgTestimonialHiro.childImageSharp.gatsbyImageData;
  const imgTestimonialInderjit =
    data.imgTestimonialInderjit.childImageSharp.gatsbyImageData;

  switch (industry) {
    default:
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <FormSidebar />
            <TestimonialSidebar
              testimonial="All-Star Connections and I collaborated several times over the past year to fill positions within my organization. As a recruiter, All-Star Connections was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. All-Star Connections provided solid advice, sometimes even when it may not have been the best thing for them, but their goal was a long term relationship with me and my organization, not a short term win for themselves, and that showed in everything they did."
              imgTestimonial={imgTestimonialMike}
              imgAlt="All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Mike Egli."
              author="Mike Eglim"
              position="Director of Supply Chain"
              company="Tegra Medical"
            />
            <ListSidebar />
          </FadeIn>
        </aside>
      );
    case 'mike':
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <FormSidebar />
            <TestimonialSidebar
              testimonial="All-Star Connections and I collaborated several times over the past year to fill positions within my organization. As a recruiter, All-Star Connections was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. All-Star Connections provided solid advice, sometimes even when it may not have been the best thing for them, but their goal was a long term relationship with me and my organization, not a short term win for themselves, and that showed in everything they did."
              imgTestimonial={imgTestimonialMike}
              imgAlt="All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Mike Egli."
              author="Mike Eglim"
              position="Director of Supply Chain"
              company="Tegra Medical"
            />
            <ListSidebar />
          </FadeIn>
        </aside>
      );
    case 'aerospace-engineering':
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <FormSidebar />
            <TestimonialSidebar
              testimonial="All-Star Connections has been helping us to hire Engineers. They understand our needs and gears in to action quickly - without wasting time. It has been a pleasure working with All-Star Connections."
              imgTestimonial={imgTestimonialHiro}
              imgAlt="All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Hiro Endo."
              author="Hiro Endo"
              position="Chief Technology Officer"
              company="Test Devices - SCHENCK USA CORP."
            />
            <ListSidebar />
          </FadeIn>
        </aside>
      );
    case 'finance-accounting':
      return (
        <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
          <FadeIn classes="space-y-20 lg:h-full">
            <FormSidebar />
            <TestimonialSidebar
              testimonial="All-Star Connections, this is past due on my side but I wanted to say thank you again for finding me great candidates. Thanks for making the process so easy and getting it worked out so fast as it was time sensitive. I will definitely be recommending anyone that is looking for a job or candidate to you. Thanks again."
              imgTestimonial={imgTestimonialInderjit}
              imgAlt="All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Inderjit Panesar."
              author="Inderjit Panesar"
              position="Financial Controller"
              company="Faber Construction"
            />
            <ListSidebar />
          </FadeIn>
        </aside>
      );
  }
};

export default Sidebar;
