import React from 'react';
import ReactDOM from 'react-dom';
import {
  Email as EmailComponent,
  Github as GithubComponent,
  Twitter as TwitterComponent,
} from './Contact';

export const Github = {
  mount: (el: Element | DocumentFragment | null) => {
    ReactDOM.render(React.createElement(GithubComponent), el);
  },
};

export const Twitter = {
  mount: (el: Element | DocumentFragment | null) => {
    ReactDOM.render(React.createElement(TwitterComponent), el);
  },
};

export const Email = {
  mount: (el: Element | DocumentFragment | null) => {
    ReactDOM.render(React.createElement(EmailComponent), el);
  },
};
