import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="msapplication-TileColor" 
          content="#13161d" />
        <meta name="theme-color" 
          content="#ffffff" />
        <link rel="icon" 
          href="/favicon.ico" />
        <link rel="apple-touch-icon" 
          sizes="180x180" 
          href="/apple-touch-icon.png" />
        <link rel="icon" 
          type="image/png" 
          sizes="32x32" 
          href="/favicon-32x32.png" />
        <link rel="icon" 
          type="image/png" 
          sizes="16x16" 
          href="/favicon-16x16.png" />
        <link rel="manifest" 
          href="/manifest.json" />
        <link rel="mask-icon" 
          href="/safari-pinned-tab.svg" 
          color="#13161d" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
