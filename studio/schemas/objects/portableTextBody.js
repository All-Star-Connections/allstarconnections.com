import React from 'react';

import {
  mathInlineIcon,
  mathIcon,
  highlightIcon,
  highlightRender,
} from '../components/PortableTextEditorComponents';

export default {
  name: 'portableTextBody',
  type: 'array',
  title: 'Post body',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles set the various mark up that the user can use to format content blocks. These
      // correspond to HTML tags, but you can set a custom title and/or value
      // and decide how it will be formatted or displayed where your content is used.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },

          /*
          {
            title: 'Math',
            value: 'latex',
            blockEditor: {
              icon: latexIcon,
              render: latexRender
            }
          }
          */
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  { type: 'service' },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
      // of: [
      //   { type: 'authorReference' },
      //   { type: 'math', icon: mathInlineIcon, title: 'Inline math' },
      // ],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'imageAlt',
    },
    // { type: 'instagram' },
    // { type: 'videoEmbed' },
    // { type: 'math', icon: mathIcon, title: 'Math block' },
  ],
};
