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
Since people prefer different test frameworks, here are the different ways to set it up. Note that in this setup, all the tests should be in the same folder as the test

### Mocha + Chai

Installing the test framework
```
npm install mocha chai
```

Running the test framework
```
mocha "./src/**/*.test.js" --require chai/register-expect # Expect pattern
mocha "./src/**/*.test.js" --require chai/register-assert # Assert pattern
```


### Requests and PRs
Feel free to request an addition to the boilerplate, or send a pr.
