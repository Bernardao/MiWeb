import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [
      {id: 1, titol: 'My first HelloWorld',
      tema: 'Angular2',
      data: '10/07/2016',
      link: 'http://davidmartinezros.com/Angular2/HelloWorld/',
      html: 'My first Angular2 Component that prints something into screen.',
      repositori: 'https://github.com/davidmartinezros/HolaAngular2'},
      {id: 2, titol: 'My first Application Example',
      tema: 'Angular2',
      data: '10/17/2016',
      link: 'http://davidmartinezros.com/Angular2/TourOfHeroes/',
      html: `
      This example includes the next objetives:<br/>
      - Use of <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#event-binding" target="_blank">event binding</a>.<br/>
      - Use of <a href="https://angular.io/docs/ts/latest/guide/forms.html#!#ngModel" target="_blank">form and ngModel</a> (directive two-way binding).<br/>
      - Uses of css styles and html templates.<br/>
      - List of Heroes.<br/>
      - Use of typescript sentences like <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngFor" target="_blank">nFor</a>.<br/>
      - Detail of a Hero.<br/>
      - Edition of Heroes with id and name.<br/>
      - Service implementation than obtains the list and the detail of heroes from a mock data source.<br/>
      - Navigation with Router parametrized class.<br/><br/>

      You can do the example in the next <a href="https://angular.io/docs/ts/latest/tutorial/" target="_blank">tutorial</a>.
      `,
      repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me'},
      {id: 3, titol: 'My first Application Example with Angular-Cli',
      tema: 'Angular2',
      data: '10/18/2016',
      link: 'http://davidmartinezros.com/Angular2/TourOfHeroesWithCli/',
      html: `
      This example is the same as the <b><a href="/#/detail/2">2. My first Application Example (17/10/2016)</a></b>.<br/>
      What it's different is than, in this one, I use <a href="https://github.com/angular/angular-cli/blob/master/README.md" target="_blank">Angular-Cli</a> for generate the project, the components and for build.<br/>
      <a href="https://github.com/angular/angular-cli/blob/master/README.md" target="_blank">Angular-Cli</a> is in the 17th beta version for the moment, but it feels interesting.<br/><br/>

      With Angular-Cli you can:<br/>
      - Generate your project with a Cli Project Structure.<br/>
      - Generate the elements of your web (Components, Modules, Services, Classes, etc.).<br/>
      - Build the project and <a href="https://github.com/angular/angular-cli/blob/master/README.md" target="_blank">Angular-Cli</a> generate only the files necessary identifying the developing mode (dev, prod, etc.). This build compact the project and you don't need the node_modules carpet with the dependencies.<br/><br/>

      You can do the example in the next tutorial and with the angular-cli instructions.
      `,
      repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me-with-cli'},
      {id: 4, titol: ' My first Application Example with Angular-cli and CRUD',
      tema: 'Angular2',
      data: '10/18/2016',
      link: 'http://davidmartinezros.com/Angular2/TourOfHeroesWithCliCRUD/',
      html: `
      This example is the same as the <b><a href="/#/detail/3">3. My first Application Example with Angular-cli (18/10/2016)</a></b>.<br/>
      Here is implemented the edition, deleting and searching of a heroe.<br/><br/>

      You can:<br/>
      - Edit a hero in the detail of a hero.<br/>
      - Delete a hero in the list of heroes.<br/>
      - Search a hero in the dashboard.<br/><br/>
      
      You can do the example in the next <a href="https://angular.io/docs/ts/latest/tutorial/toh-pt6.html" target="_blank">tutorial</a>.
      `,
      repositori: 'https://github.com/davidmartinezros/angular-tour-of-heroes-by-me-with-cli'},
      {id: 5, titol: 'My Web',
      tema: 'Angular2',
      data: '10/19/2016',
      link: 'http://davidmartinezros.com',
      html: 'I develop my Web with <a href="https://angular.io" target="_blank">Angular2</a> and Typescript, using <a href="https://github.com/angular/angular-cli/blob/master/README.md" target="_blank">Angular-Cli</a>.',
      repositori: 'https://github.com/davidmartinezros/MiWeb'},
      {id: 6, titol: 'Bind json array to html table',
      tema: 'Angular2',
      data: '10/27/2016',
      link: 'http://davidmartinezros.com/Angular2/bind-json-array-to-html-table',
      html: `This example is developed with <a href="https://github.com/angular/angular-cli/blob/master/README.md" target="_blank">Angular-Cli</a>.<br/><br/>
      Is a simple example that load a JSON file into an html table with an Angular-Cli Service.<br/><br/>
      Here in <a href="https://davidlearns.blogspot.com.es/2016/10/bind-json-data-to-html-table-with.html" target="blank">davidlearns.blogspot.com</a> you can see the explanation of the example and you can learn to do it.
      `,
      repositori: 'https://github.com/davidmartinezros/bind-json-array-to-html-table'},
      {id: 7, titol: 'Components Animations Project',
      tema: 'Angular2',
      data: '10/30/2016',
      link: 'http://davidmartinezros.com/Angular2/components-animations-project',
      html: `This project is developed with <a href="https://github.com/angular/angular-cli/blob/master/README.md" target="_blank">Angular-Cli</a>.<br/><br/>
      Are some animation components that everyone could use in his html components.<br/><br/>
      You have to extends the effect you want for your component and implements the html template and css file.<br/><br/>
      For example:<br/>
      export class MyComponent extends BounceAnimationComponent { }<br/><br/>
      The animations are bounce, fade, flip, roll, rotate, zoom and others.<br/><br/>
      The source code have inspired my project is <a href="http://daneden.github.io/animate.css/" target="_blank">http://daneden.github.io/animate.css/</a>.
      `,
      repositori: 'https://github.com/davidmartinezros/components-animations-project'},
      {id: 8, titol: 'Component Tree Project',
      tema: 'Angular2',
      data: '11/06/2016',
      link: 'http://davidmartinezros.com/Angular2/component-tree-project/',
      html: `This project is developed with <a href="https://github.com/angular/angular-cli/blob/master/README.md" target="_blank">Angular-Cli</a>.<br/><br/>
      There is a tree component loaded from a json file data with a structure of ancestors and children.<br/><br/>
      This tree is generated recursively with a <b>app-tree-node</b> component that calls itself.<br/><br/>
      And when the app-tree-node is loaded, ancestors are loaded recursively and the next children as well.<br/><br/>
      You <b>can load the json file you want</b> and the tree will show the file you choose.<br/><br/>
      The project is inspired in a tree component I did in java with xsl reading xml files five years ago.<br/><br/>
      And I thought: <b>Could I try to do this in Angular2?</b>
      `,
      repositori: 'https://github.com/davidmartinezros/component-tree-project'},
      {id: 101, titol: 'My First Example',
      tema: 'Unity',
      data: '10/10/2016',
      link: 'http://davidmartinezros.com/3D/MyFirstScene/',
      html: 'The camera follows the character in a terrain.',
      repositori: 'https://github.com/davidmartinezros/MiPrimerProyecto'},
      {id: 102, titol: 'My Next Scene Example',
      tema: 'Unity',
      data: '10/11/2016',
      link: 'http://davidmartinezros.com/3D/MySceneWithMoreObjects/',
      html: 'There are three moons with lights and new objects like trees and houses all with textures and shadows.',
      repositori: 'https://github.com/davidmartinezros/MiPrimerProyecto'},
      {id: 103, titol: 'My First Fisic Example',
      tema: 'Unity',
      data: '10/12/2016',
      link: 'http://davidmartinezros.com/3D/ComportamientoFisico/',
      html: 'In this example you can move the camera dragging the mouse and with the key row up you can throw the ball that collisions with the cube and the action changes the material of the two objects.',
      repositori: 'https://github.com/davidmartinezros/ComportamientoFisico'},
      {id: 104, titol: 'A 3D Platform Game Scene',
      tema: 'Unity',
      data: '10/13/2016',
      link: 'http://davidmartinezros.com/3D/PersonMovement/',
      html: `
      In this example, you can see the player and you can move him only in the platform.<br/>
      The camera follows the player (the follows could be do better).<br/>
      The player can walk, run and jump. It want to emulate a Platforms Games (at least initially).
      `,
      repositori: 'https://github.com/davidmartinezros/PersonMovement'},
      {id: 105, titol: 'A Texture Shader Example',
      tema: 'Unity',
      data: '10/17/2016',
      link: 'http://davidmartinezros.com/3D/MiFirstShader/',
      html: `
      This example shows three cubes.<br/>
      One with a texture, another with another texture and the middle one with a Shader Texture with 50% of a the first texture and 50% of the second texture.
      `,
      repositori: 'https://github.com/davidmartinezros/ShadersProject'},
      {id: 106, titol: 'A Two Cameras Example',
      tema: 'Unity',
      data: '10/18/2016',
      link: 'http://davidmartinezros.com/3D/DifferentsCameras/',
      html: `
      This example shows the screen divided for the middle.<br/>
      On the left side, there's a perspective camera that follows the player always behind him.<br/>
      On the right side, there's a multipurpose perspective camera that follows the player recovering the position behind him.
      `,
      repositori: 'https://github.com/davidmartinezros/CameraProject'},
      {id: 107, titol: 'Import from Blender',
      tema: 'Unity',
      data: '10/29/2016',
      link: 'http://davidmartinezros.com/3D/ImportingColladas/',
      html: `
      This example shows a dragon that was generated in Blender 3D modeling computer program gets from <a href="http://tf3dm.com/3d-models/blender" target="_blank">tf3dm.com</a>.<br/>
      This Dragon have animations created in Blender and I use one of this on a key event.<br/>
      There's load a default animation that loads on the beginning.<br/>
      If you press the key up arrow the dragon walk.
      `,
      repositori: 'https://github.com/davidmartinezros/ImportingColladas'},
      {id: 108, titol: 'A terrain with water example',
      tema: 'Unity',
      data: '10/30/2016',
      link: 'http://davidmartinezros.com/3D/WaterProject/',
      html: `
      This example shows a terrain with textures and with water.<br/>
      This is my first example with water, so it's very easy.
      `,
      repositori: 'https://github.com/davidmartinezros/WaterProject'},
      {id: 201, titol: 'Comparative between AngularJS and Angular2',
      tema: 'Google Trends',
      data: '10/28/2016',
      link: 'http://davidmartinezros.com/web/comparative_Angular2.html',
      html: `
      This is a comparative between AngularJS and Angular2 with the Google application <a href="http://www.google.com/trends" target="_blank">Trends</a>
      `,
      repositori: null},
      {id: 202, titol: 'Comparative between Unity and the other Game Engine',
      tema: 'Google Trends',
      data: '10/28/2016',
      link: 'http://davidmartinezros.com/web/comparative_Unity.html',
      html: `
      This is a comparative between <a href="https://unity3d.com" target="_blank">Unity</a> and the other Game Engine with the Google application <a href="http://www.google.com/trends" target="_blank">Trends</a>
      `,
      repositori: null},
      {id: 203, titol: 'Comparative between Sketchup and the other 3D modeling computer program',
      tema: 'Google Trends',
      data: '10/28/2016',
      link: 'http://davidmartinezros.com/web/comparative_Sketchup.html',
      html: `
      This is a comparative between <a href="http://www.sketchup.com/download" target="_blank">Sketchup</a> and the other 3D modeling computer program with the Google application <a href="http://www.google.com/trends" target="_blank">Trends</a>
      `,
      repositori: null},
    ];
    return {projects};
  }
}
