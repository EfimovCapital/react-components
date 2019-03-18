import {
  withInfo
} from "@storybook/addon-info";

import {
  configure,
  addDecorator
} from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(
  withInfo({
    styles: {
      infoBody: {
        border: "1px solid black",
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: true,
  })
);

configure(loadStories, module);