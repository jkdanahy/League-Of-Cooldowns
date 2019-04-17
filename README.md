# LeagueOfCooldowns

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.
It can also be viewed remotely from http://www.leagueofcooldowns.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Static Data/Images

The images used for League of Cooldowns are stored locally. In order to use this application you will need to populate your folders src/assets/images and src/assets/json respectively.  

You can download the latest static data from riot at this link: https://ddragon.leagueoflegends.com/cdn/dragontail-6.24.1.tgz (Modify the URL for the current patch).  

Unzip the tgz file and copy the contents of ./6.24.1/data/en_US/ to your local src/assets/json  
Also copy the  "img" directory from the root of tgz to src/assets/images  

If done properly, your assets folder should look like this:  
<ul>
  <li>images</li>  
  <li>img
    <ul><li>backgrounds-blank-blue.jpg</li></ul>  
  </li>
  <li>json</li>
  <ul>
    <li>champion</li>  
    <li>champion.json  </li>
    <li>championFull.json</li>  
    <li>...</li>  
  </ul>
</ul>
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
