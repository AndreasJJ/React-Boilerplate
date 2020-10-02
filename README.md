# React-Boilerplate
A React boilerplate w/ TypeScript

## Why?
This repo is a boilerplate with techologies I usually use and think are the best choice for a react app. The needs differ for every project, but generally these are the technologies i use. If a technology isn't needed, I'll simply remove it.

## Technologies used

### General
* Typescript
* ts-loader
* react
* react-dom

### Routing
* react-router-dom
* history

### Head/Metadata
* react-helmet

### Forms and validation
* react-switch
* react-hook-form
* yup

### Data fetching and caching
* swr

### Date manipulation
* date-fns

### CSS
* styled-icons
* styled-components

### Other

#### Testing
* Jest
  * React-testing-library

#### Linting
* Eslint
  * react/recommended
  * @typescript-eslint/recommended
  * @typescript-eslint
  * prettier/recommended
  * mdx/recommended

#### Miscellaneous
* Documentation: **Docz**
* Git Hooks: **Husky**

## How To Run
### Production
#### Application
In production you would simply host the file that you can generate with ```npm run-script build```. Which generate the bundle in the 'public' folder.

#### Documentation
Docz documentation: [https://www.docz.site/docs/deploying-your-docs](https://www.docz.site/docs/deploying-your-docs)

### Development
#### Application
The Development server can be started by executing ```npm run-script start```.

#### Documentation
To Documentation Development server can be started by execute ```npm docz dev```.