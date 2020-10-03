# React-Boilerplate
A React boilerplate w/ TypeScript and other commonly used libraries/technologies for a good codebase.

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

### Data fetching/caching and requests
* swr
* axios

### Date manipulation
* date-fns

### CSS
* styled-icons
* styled-components

### Other

#### Testing
* Jest
  * React-testing-library
  * jest-fetch-mock

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

## Other technologies that might be useful
### css loader
I suggest using ```style-loader``` and ```css-loader```.

Install the libraries and update the webpack config => module => rules, and add the object/code to the arrray
```
{
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
},
```

### file loader (f.ex. for fonts)
I suggest using ```file-loader```.

Install the library and update the webpack config => module => rules, and add the object/code to the arrray
```
{
    test: /\.(woff2|woff|eot|ttf|otf)$/,
    use: ["file-loader"],
},
```

Example .ttf: You will also have to declare ttf as a module typescript. In the folder "src" create a file called "decs.d.ts" (this is where you'd declare libraries that don't havee typescript support if you still wanted to use them" and then paste in the following
```
declare module '*.ttf';
```

### svg loader
I suggest using ```svg-react-loader```

Install the library and update the webpack config => module => rules, and add the object/code to the arrray
```
{
    test: /\.svg$/,
    use: ['svg-react-loader']
},
```

You will also have to declare svg as a module typescript. In the folder "src" create a file called "decs.d.ts" (this is where you'd declare libraries that don't havee typescript support if you still wanted to use them" and then paste in the following
```
declare module '*.svg' {
    const content: any;
    export default content;
}
```
Then you'd import and use the svg as such
```
import Logo from '../../assets/Logo.svg';

<Logo />
```

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
