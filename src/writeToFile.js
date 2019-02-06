

  const React = require('react');
  const fs = require('fs');
  const path = require('path');
  const glob = require('glob');
  const ReactDOM = require('react-dom/server');

  
  


  // glob(`${process.cwd()}/out/src/**/*.js`, {}, (err, files)=>{
      

  
    const staticUploads = [ './out/src/index.js' ]
    staticUploads.map(staticUpload => {
    const Component = require(staticUpload).default;
    const props = null;
    const children = null;
    const virtualMarkup = React.createElement(Component, null, null)
    console.log('virtualMarkup: ',virtualMarkup);
    // const virtualMarkup = React.createElement(Component, null, null)
    const renderedMarkup = ReactDOM.renderToStaticMarkup(virtualMarkup)
const writePath =staticUpload.replace('/src/','/static/').replace('.js','.html')
console.log('writePath: ',writePath);
    fs.writeFileSync(writePath,renderedMarkup,'utf8')
});
 