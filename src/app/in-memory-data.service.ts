import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {
        id: 11,
        title: 'Post #1',
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum tortor ex, nec finibus enim varius nec. Cras eget ligula in turpis dignissim laoreet eu sed ante. Vestibulum ultricies lectus nec risus facilisis tristique. Quisque eu interdum diam. Cras tincidunt augue quis arcu scelerisque, quis hendrerit est cursus. Vestibulum ac lorem vulputate, dignissim magna eu, posuere odio. Nam eu turpis ipsum. Fusce quis felis ac lorem laoreet consequat. Sed eget varius eros, vitae egestas arcu. Sed at orci arcu. Donec rhoncus eu odio quis hendrerit. Integer vel arcu eget arcu ultricies posuere.</p>
        <p>Maecenas a dapibus neque. Donec tristique, orci a congue luctus, nibh odio sollicitudin ante, ut finibus urna ante id lorem. Morbi sed nulla vulputate, tincidunt turpis a, commodo mi. Maecenas ut vehicula tortor, et eleifend ante. Pellentesque sit amet pellentesque sem. Morbi sodales lectus lectus, vel vehicula nisl auctor et. Morbi gravida rhoncus felis. Aliquam nec rhoncus mi, pulvinar bibendum enim. Suspendisse semper porttitor sapien, non tincidunt leo scelerisque congue. Donec magna nisi, elementum eget tortor at, tincidunt pulvinar nulla. Curabitur scelerisque blandit massa ut commodo. Vestibulum vehicula sit amet risus pharetra venenatis.</p>
        <p>
          Duis orci enim, varius placerat mauris non, lacinia rhoncus eros. Proin eget nibh ut sem convallis vestibulum. Curabitur molestie ligula varius magna ullamcorper, at congue magna rhoncus. Nullam sem diam, vulputate et blandit non, imperdiet vitae lectus. Suspendisse potenti. Curabitur vulputate finibus est eget sagittis. Integer sem nunc, eleifend in leo vel, sagittis ullamcorper magna. Praesent maximus dolor purus, sit amet convallis mi molestie sit amet. Integer blandit, arcu eget blandit dapibus, lacus dui faucibus risus, vitae gravida nisl felis sit amet massa. Mauris nisi erat, iaculis at pharetra id, convallis eget sapien.
          Phasellus vehicula maximus pretium. Etiam consequat finibus faucibus. Morbi augue nisi, consectetur id pretium at, tincidunt eu dui. Maecenas finibus dolor tortor, vitae scelerisque magna porttitor quis. Maecenas placerat nisl et lectus euismod, at porttitor magna tempor. In sodales sagittis lorem, nec laoreet risus dictum eget. Curabitur maximus viverra aliquam. Integer odio tortor, aliquet sit amet sapien a, porta condimentum neque.
        </p>
        <p>Curabitur tincidunt dui nec mauris pulvinar, nec euismod mauris tempor. Duis malesuada rhoncus maximus. Nam et tellus auctor justo pretium fermentum et vel diam. Ut tempus ipsum vitae porttitor posuere. Nullam sodales, neque eget luctus elementum, sapien eros vestibulum eros, sed tristique turpis dolor a urna. Nulla sit amet nibh eu libero sodales tristique. Donec vestibulum, purus ac vulputate tempor, eros nisi dignissim justo, ac convallis lorem quam sit amet enim. Curabitur at scelerisque nunc. Ut sed nunc sollicitudin, blandit libero eget, rhoncus ante. Aliquam non diam at mauris sodales porttitor ut non dui. Nunc bibendum vehicula elit, eu mattis neque egestas ut.</p>`
      },
      {
        id: 12,
        title: 'Post #2',
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum tortor ex, nec finibus enim varius nec. Cras eget ligula in turpis dignissim laoreet eu sed ante. Vestibulum ultricies lectus nec risus facilisis tristique. Quisque eu interdum diam. Cras tincidunt augue quis arcu scelerisque, quis hendrerit est cursus. Vestibulum ac lorem vulputate, dignissim magna eu, posuere odio. Nam eu turpis ipsum. Fusce quis felis ac lorem laoreet consequat. Sed eget varius eros, vitae egestas arcu. Sed at orci arcu. Donec rhoncus eu odio quis hendrerit. Integer vel arcu eget arcu ultricies posuere.</p>
        <p>Maecenas a dapibus neque. Donec tristique, orci a congue luctus, nibh odio sollicitudin ante, ut finibus urna ante id lorem. Morbi sed nulla vulputate, tincidunt turpis a, commodo mi. Maecenas ut vehicula tortor, et eleifend ante. Pellentesque sit amet pellentesque sem. Morbi sodales lectus lectus, vel vehicula nisl auctor et. Morbi gravida rhoncus felis. Aliquam nec rhoncus mi, pulvinar bibendum enim. Suspendisse semper porttitor sapien, non tincidunt leo scelerisque congue. Donec magna nisi, elementum eget tortor at, tincidunt pulvinar nulla. Curabitur scelerisque blandit massa ut commodo. Vestibulum vehicula sit amet risus pharetra venenatis.</p>
        <p>
          Duis orci enim, varius placerat mauris non, lacinia rhoncus eros. Proin eget nibh ut sem convallis vestibulum. Curabitur molestie ligula varius magna ullamcorper, at congue magna rhoncus. Nullam sem diam, vulputate et blandit non, imperdiet vitae lectus. Suspendisse potenti. Curabitur vulputate finibus est eget sagittis. Integer sem nunc, eleifend in leo vel, sagittis ullamcorper magna. Praesent maximus dolor purus, sit amet convallis mi molestie sit amet. Integer blandit, arcu eget blandit dapibus, lacus dui faucibus risus, vitae gravida nisl felis sit amet massa. Mauris nisi erat, iaculis at pharetra id, convallis eget sapien.
          Phasellus vehicula maximus pretium. Etiam consequat finibus faucibus. Morbi augue nisi, consectetur id pretium at, tincidunt eu dui. Maecenas finibus dolor tortor, vitae scelerisque magna porttitor quis. Maecenas placerat nisl et lectus euismod, at porttitor magna tempor. In sodales sagittis lorem, nec laoreet risus dictum eget. Curabitur maximus viverra aliquam. Integer odio tortor, aliquet sit amet sapien a, porta condimentum neque.
        </p>
        <p>Curabitur tincidunt dui nec mauris pulvinar, nec euismod mauris tempor. Duis malesuada rhoncus maximus. Nam et tellus auctor justo pretium fermentum et vel diam. Ut tempus ipsum vitae porttitor posuere. Nullam sodales, neque eget luctus elementum, sapien eros vestibulum eros, sed tristique turpis dolor a urna. Nulla sit amet nibh eu libero sodales tristique. Donec vestibulum, purus ac vulputate tempor, eros nisi dignissim justo, ac convallis lorem quam sit amet enim. Curabitur at scelerisque nunc. Ut sed nunc sollicitudin, blandit libero eget, rhoncus ante. Aliquam non diam at mauris sodales porttitor ut non dui. Nunc bibendum vehicula elit, eu mattis neque egestas ut.</p>`
      },
      {
        id: 13,
        title: 'Post #3',
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum tortor ex, nec finibus enim varius nec. Cras eget ligula in turpis dignissim laoreet eu sed ante. Vestibulum ultricies lectus nec risus facilisis tristique. Quisque eu interdum diam. Cras tincidunt augue quis arcu scelerisque, quis hendrerit est cursus. Vestibulum ac lorem vulputate, dignissim magna eu, posuere odio. Nam eu turpis ipsum. Fusce quis felis ac lorem laoreet consequat. Sed eget varius eros, vitae egestas arcu. Sed at orci arcu. Donec rhoncus eu odio quis hendrerit. Integer vel arcu eget arcu ultricies posuere.</p>
        <p>Maecenas a dapibus neque. Donec tristique, orci a congue luctus, nibh odio sollicitudin ante, ut finibus urna ante id lorem. Morbi sed nulla vulputate, tincidunt turpis a, commodo mi. Maecenas ut vehicula tortor, et eleifend ante. Pellentesque sit amet pellentesque sem. Morbi sodales lectus lectus, vel vehicula nisl auctor et. Morbi gravida rhoncus felis. Aliquam nec rhoncus mi, pulvinar bibendum enim. Suspendisse semper porttitor sapien, non tincidunt leo scelerisque congue. Donec magna nisi, elementum eget tortor at, tincidunt pulvinar nulla. Curabitur scelerisque blandit massa ut commodo. Vestibulum vehicula sit amet risus pharetra venenatis.</p>
        <p>
          Duis orci enim, varius placerat mauris non, lacinia rhoncus eros. Proin eget nibh ut sem convallis vestibulum. Curabitur molestie ligula varius magna ullamcorper, at congue magna rhoncus. Nullam sem diam, vulputate et blandit non, imperdiet vitae lectus. Suspendisse potenti. Curabitur vulputate finibus est eget sagittis. Integer sem nunc, eleifend in leo vel, sagittis ullamcorper magna. Praesent maximus dolor purus, sit amet convallis mi molestie sit amet. Integer blandit, arcu eget blandit dapibus, lacus dui faucibus risus, vitae gravida nisl felis sit amet massa. Mauris nisi erat, iaculis at pharetra id, convallis eget sapien.
          Phasellus vehicula maximus pretium. Etiam consequat finibus faucibus. Morbi augue nisi, consectetur id pretium at, tincidunt eu dui. Maecenas finibus dolor tortor, vitae scelerisque magna porttitor quis. Maecenas placerat nisl et lectus euismod, at porttitor magna tempor. In sodales sagittis lorem, nec laoreet risus dictum eget. Curabitur maximus viverra aliquam. Integer odio tortor, aliquet sit amet sapien a, porta condimentum neque.
        </p>
        <p>Curabitur tincidunt dui nec mauris pulvinar, nec euismod mauris tempor. Duis malesuada rhoncus maximus. Nam et tellus auctor justo pretium fermentum et vel diam. Ut tempus ipsum vitae porttitor posuere. Nullam sodales, neque eget luctus elementum, sapien eros vestibulum eros, sed tristique turpis dolor a urna. Nulla sit amet nibh eu libero sodales tristique. Donec vestibulum, purus ac vulputate tempor, eros nisi dignissim justo, ac convallis lorem quam sit amet enim. Curabitur at scelerisque nunc. Ut sed nunc sollicitudin, blandit libero eget, rhoncus ante. Aliquam non diam at mauris sodales porttitor ut non dui. Nunc bibendum vehicula elit, eu mattis neque egestas ut.</p>`
      },
      {
        id: 14,
        title: 'Post #4',
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum tortor ex, nec finibus enim varius nec. Cras eget ligula in turpis dignissim laoreet eu sed ante. Vestibulum ultricies lectus nec risus facilisis tristique. Quisque eu interdum diam. Cras tincidunt augue quis arcu scelerisque, quis hendrerit est cursus. Vestibulum ac lorem vulputate, dignissim magna eu, posuere odio. Nam eu turpis ipsum. Fusce quis felis ac lorem laoreet consequat. Sed eget varius eros, vitae egestas arcu. Sed at orci arcu. Donec rhoncus eu odio quis hendrerit. Integer vel arcu eget arcu ultricies posuere.</p>
        <p>Maecenas a dapibus neque. Donec tristique, orci a congue luctus, nibh odio sollicitudin ante, ut finibus urna ante id lorem. Morbi sed nulla vulputate, tincidunt turpis a, commodo mi. Maecenas ut vehicula tortor, et eleifend ante. Pellentesque sit amet pellentesque sem. Morbi sodales lectus lectus, vel vehicula nisl auctor et. Morbi gravida rhoncus felis. Aliquam nec rhoncus mi, pulvinar bibendum enim. Suspendisse semper porttitor sapien, non tincidunt leo scelerisque congue. Donec magna nisi, elementum eget tortor at, tincidunt pulvinar nulla. Curabitur scelerisque blandit massa ut commodo. Vestibulum vehicula sit amet risus pharetra venenatis.</p>
        <p>
          Duis orci enim, varius placerat mauris non, lacinia rhoncus eros. Proin eget nibh ut sem convallis vestibulum. Curabitur molestie ligula varius magna ullamcorper, at congue magna rhoncus. Nullam sem diam, vulputate et blandit non, imperdiet vitae lectus. Suspendisse potenti. Curabitur vulputate finibus est eget sagittis. Integer sem nunc, eleifend in leo vel, sagittis ullamcorper magna. Praesent maximus dolor purus, sit amet convallis mi molestie sit amet. Integer blandit, arcu eget blandit dapibus, lacus dui faucibus risus, vitae gravida nisl felis sit amet massa. Mauris nisi erat, iaculis at pharetra id, convallis eget sapien.
          Phasellus vehicula maximus pretium. Etiam consequat finibus faucibus. Morbi augue nisi, consectetur id pretium at, tincidunt eu dui. Maecenas finibus dolor tortor, vitae scelerisque magna porttitor quis. Maecenas placerat nisl et lectus euismod, at porttitor magna tempor. In sodales sagittis lorem, nec laoreet risus dictum eget. Curabitur maximus viverra aliquam. Integer odio tortor, aliquet sit amet sapien a, porta condimentum neque.
        </p>
        <p>Curabitur tincidunt dui nec mauris pulvinar, nec euismod mauris tempor. Duis malesuada rhoncus maximus. Nam et tellus auctor justo pretium fermentum et vel diam. Ut tempus ipsum vitae porttitor posuere. Nullam sodales, neque eget luctus elementum, sapien eros vestibulum eros, sed tristique turpis dolor a urna. Nulla sit amet nibh eu libero sodales tristique. Donec vestibulum, purus ac vulputate tempor, eros nisi dignissim justo, ac convallis lorem quam sit amet enim. Curabitur at scelerisque nunc. Ut sed nunc sollicitudin, blandit libero eget, rhoncus ante. Aliquam non diam at mauris sodales porttitor ut non dui. Nunc bibendum vehicula elit, eu mattis neque egestas ut.</p>`
      }
    ];

    return { posts };
  }

  // Overrides the genId method to ensure that a post always has an id.
  // If the posts array is empty,
  // the method below returns the initial number (11).
  // if the posts array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}
