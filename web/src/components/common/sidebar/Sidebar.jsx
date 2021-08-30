import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import FormSidebar from '../forms/FormSidebar';
import TestimonialSidebar from './TestimonialSidebar';
import ListSidebar from './ListSidebar';
import FadeIn from '../../layouts/FadeIn';

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SidebarQ {
      imgTestimonial: file(
        relativePath: {
          eq: "assets/images/testimonials/mike-egli-director-supply-chain-tegra-medical-devices.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgTestimonial = data.imgTestimonial.childImageSharp.gatsbyImageData;

  return (
    <aside className="lg:h-full pt-12 lg:pt-0 hidden lg:flex">
      <FadeIn classes="space-y-20 lg:h-full">
        <FormSidebar />
        <TestimonialSidebar
          testimonial="All-Star Connections and I collaborated several times over the past year to fill positions within my organization. As a recruiter, All-Star Connections was very professional, providing high-caliber candidates, following up in a timely fashion, and keeping me advised as situations changed with each individual candidate. All-Star Connections provided solid advice, sometimes even when it may not have been the best thing for them, but their goal was a long term relationship with me and my organization, not a short term win for themselves, and that showed in everything they did."
          imgTestimonial={imgTestimonial}
          imgAlt="All-Star Connections is a recruitment agency that has received many 5-star reviews from satisfied clients such as Mike Egli."
          author="Mike Eglim"
          position="Director of Supply Chain"
          company="Tegra Medical"
        />
        <ListSidebar />
      </FadeIn>
    </aside>
  );
};

export default Sidebar;
