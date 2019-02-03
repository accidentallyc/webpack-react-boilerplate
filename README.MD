# Webpack - React Boilerplate

This boilerplate contains a working react-webpack setup. The src/index.js is the entry point and dist/bundle.js is the output file.

## Includes

* SASS Loader (css, scss)
* JSX Loader (js, jsx)


## Installation
```
git clone git@github.com:accidentallyc/webpack-react-boilerplate.git myproject
cd myproject
npm install

# pick one 
npm run watch # watch for changes
npm run build  # bundle up the scripts
```

## Testing
Since people prefer different test frameworks, here are the different ways to set it up. 
_All_ tests should be placed in the `src` folder beside the file it is testing.

For example, this is how it would look
```
$ ls src/service/Router.js
Router.js    Router.test.js
```

### Mocha + Chai

Installing the test framework
```
npm install mocha chai @babel/register
```

Running the test framework
```
mocha "./src/**/*.test.js" --require chai/register-expect --require @babel/register # Expect pattern
mocha "./src/**/*.test.js" --require chai/register-assert --require @babel/register # Assert pattern
```

### Lazy Man's Update to package.json.
**WARNING** this replaces the `npm test` field, and replaces all the line spaces with 2.
Replace the command as you see fit.

```
node -e "command='mocha \"./src/**/*.test.js\" --require chai/register-expect --require @babel/register';
 r=require,fs=r('fs'),p=r('./package.json');p.scripts.test=command;fs.writeFileSync('./package.json',JSON.stringify(p,null,2));"
```

### TODO

* Add jasmine, jest, and junit instructions

### Requests and PRs
Feel free to request an addition to the boilerplate, or send a pr.


