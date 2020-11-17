# Tygr Contact

[Demo](https://tylergrinn.github.io/tygr-contact)

[Forking Guide](https://github.com/tylergrinn/tygr-logo/blob/main/docs/forking.md)

This is a react component packaged for three environments: node, browser, and standalone.

- Node is reccommended. If you are already using react in the project, this library simply exports a react component function you can use directly in jsx.

- Browser is for fast prototyping in the browser. You can add this component via a script tag. The react and react-dom script tags must be placed before the component script.

- Standalone is for projects that do not use react. It exposes the `mount` function, which takes an HTML element.

## Node

Installation:

```cmd
npm i --save @tygr/contact
```

Usage (jsx):

```jsx
import * as Contact from '@tygr/contact';

// Import styles. Make sure there is a style loader specified in your
// webpack config
import '@tygr/contact/lib/tygr-contact.min.css';

export default function MyComponent() {
  return (
    <div>
      <h1>Contact usage example</h1>
      <Contact.Github />
      <Contact.Twitter />
      <Contact.Email />
    </div>
  );
}
```

## Browser

Usage:

When included via script tag, the component is exposed as a window library named 'TygrContact'

```html
<html>
  <head>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="https://tylergrinn.github.io/tygr-contact/lib/tygr-contact.min.js"></script>
    <link
      rel="stylesheet"
      href="https://tylergrinn.github.io/tygr-contact/lib/tygr-contact.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      ReactDOM.render(<TygrContact.Github />, document.getElementById('app'));
    </script>
  </body>
</html>
```

## Standalone

Installation:

```cmd
npm i --save @tygr/contact
```

Usage:

```jsx

// Vanilla JS
import * as Contact from '@tygr/contact/lib/standalone';

const el = document.getElementById('tygr-contact');

Contact.Twitter.mount(el);

// Vue
<template>
<div>
  <div ref="tygr-contact"></div>
</div>
</template>

<script>
import * as Contact from '@tygr/contact/lib/standalone';

export default {
  mounted() {
    Contact.Github.mount(this.$refs['tygr-contact']);
  },
};
</script>

// Angular Typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Contact from '@tygr/contact/lib/standalone';

@Component({
  selector: 'app-root',
  template: '<div><div #tygr-contact></div></div>',
})
export class ContactComponent  {
  @ViewChild('tygr-contact') el: ElementRef;

  ngAfterViewInit() {
    Contact.Email.mount(this.el.nativeElement);
  }
}
```

You should not use the standalone version if you have multiple react components in your project.

## Customizing styles

Sass variables can be overridden if you accept responsibility for transpiling it into css. You can see an example of this setup in the `webpack.config.demo.js` configuration named `sass`.

Make sure to reassign any sass variables before importing the `main.scss` file:

```scss
$accent-1: white;
$accent-2: yellow;

@import '@tygr/contact/sass';
```
