import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const settings = {
  footerBgColor: 'bg-gray-800',
};

const TermsFooter = () => {
  const data = useStaticQuery(graphql`
    query TermsFooterQ {
      sanitySettingsCompany {
        name
      }
    }
  `);

  const company = data.sanitySettingsCompany;

  return (
    <div
      className={`border-t border-gray-200 ${settings.footerBgColor} py-8 mx-auto`}
    >
      <p className="text-base text-gray-200 text-center">
        © 2016 - {new Date().getFullYear()} {company.name}, All Rights Reserved
        {` `}
      </p>
      <p className="text-sm text-gray-200 text-center">
        <Link to="/privacy/" className="text-accent hover:text-gray-100">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link to="/accessibility/" className="text-accent hover:text-gray-100">
          Website Accessibility
        </Link>{' '}
        |{' '}
        <Link to="/" className="text-accent hover:text-gray-100">
          Website Sitemap
        </Link>
      </p>
    </div>
  );
};

export default TermsFooter;
