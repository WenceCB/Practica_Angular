import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  
  @Input() posts: Post[];

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección del autor de un post y navega a la dirección correspondiente.  |
  | Recuerda que para hacer esto necesitas inyectar como dependencia el      |
  | Router de la app. La ruta a navegar es '/posts/users', pasando como      |
  | parámetro el identificador del autor.                                    |
  |=========================================================================*/

  autorSeleccionado : Post;
  postSeleccionado : Post;
  constructor(       
    private _router:Router){};
  
  verDetallesAutor(authorPost : Post){
    this.autorSeleccionado = authorPost;   
    console.log('El autor pulsado es ',authorPost.author.id); 
    this._router.navigate(['/posts/users',authorPost.author.id]);
  }


  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección de un post y navega a la dirección correspondiente. Recuerda   |
  | que para hacer esto necesitas inyectar como dependencia el Router de la  |
  | app. La ruta a navegar es '/posts', pasando como parámetro el            |
  | identificador del post.                                                  |
  |=========================================================================*/

  
  
  
  verDetallesPost(idPost : Post){
    this.postSeleccionado = idPost;   
    console.log(idPost); 
    this._router.navigate(['/posts',idPost.id]);
  }
}
