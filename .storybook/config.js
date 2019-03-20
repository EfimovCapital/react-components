import {
  configure,
  addDecorator
} from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

// With info

import {
  withInfo
} from "@storybook/addon-info";


addDecorator(
  withInfo({
    styles: {
      infoBody: {
        border: "1px solid black",
        padding: '0px 5px',
        lineHeight: '2'
      },
    },
    inline: true,
  })
);

// README

import {
  addReadme
} from 'storybook-readme';


addDecorator(addReadme);

configure(loadStories, module);