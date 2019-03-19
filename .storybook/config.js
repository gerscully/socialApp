import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../stories/socialApp.js');
}

configure(loadStories, module);