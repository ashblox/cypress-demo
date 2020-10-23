# cypress-demo

Creating a new Cypress Cucumber Typescript project and documenting steps so it's not so difficult next time.

## Setting up npm & git

1. Create a remote repo so your project has somewhere to live.

2. Create your project directory and run `npm init`. Fill in appropriate details.
```
    mkdir cypress-demo
    cd cypress-demo
    npm init
 ```
    
3. Run `git init` & create your first commit

4. At this point, you can rename your master branch to main if you so desire.

## Setting up typescript and tslint

1. Run `npm install --save-dev typescript tslint`

2. Run `tsc --init` to create a `tsconfig.json` file. Refer to [typescriptlang.org](https://www.typescriptlang.org/tsconfig) to review options.

3. Create a `tslint.json` file to add linting options. Rules can be found [here](https://palantir.github.io/tslint/rules/).

4. Verify linting works by creating a dummy .ts file and running a lint on your project. It may help to define these two scripts in your `package.json`:
```
    "build": "tsc",
    "lint": "tslint --project tslint.json"
```
Note: tslint is now deprecated. I'd like to update these directions to include eslint instead.

## Setting up Cypress

1. Run `npm install --save-dev cypress cypress-cucumber-preprocessor @cypress/browserify-preprocessor resolve`

2. Add this entry to your `package.json`:
```
    "cypress-cucumber-preprocessor": {
        "nonGlobalStepDefinitions": true
     }
```
     
3. You may also want to create a script to run cypress tests (e.g. `"e2e": "cypress open"`)

4. Replace the contents of `cypress/plugins/index.js` with the following: 

```
    const browserify = require('@cypress/browserify-preprocessor');
    const cucumber = require('cypress-cucumber-preprocessor').default;
    const resolve = require('resolve');

    module.exports = (on, config) => {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };

    on('file:preprocessor', cucumber(options));
    };
```

5. Remove all `example.js` files and add a `.feature` file inside the integration folder. The suggested way to add your step definitions is to create a like-named folder inside the integration folder and a like-named `steps.ts` file inside of that.

6. Try to run cypress tests!
