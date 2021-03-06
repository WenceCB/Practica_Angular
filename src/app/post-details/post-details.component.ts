import { Category } from '../category';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute
        .data
        .subscribe((data: { post: Post }) => {
          this.post = data.post;
          this._window.scrollTo(0, 0);
        });
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts del autor indicado. Recuerda que para hacer esto necesitas         |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/users', pasando como parámetro el identificador del autor.       |
  |=========================================================================*/

  verAutor(autor : Post){
    this._router.navigate(['/posts/users',autor.author.id]);
  }
  


  /*=========================================================================|
  | Yellow Path                                                              |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts de la categoría indicada. Recuerda que para hacer esto necesitas   |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/categories', pasando como parámetro el identificador de la       |
  | categoría.                                                               |
  |=========================================================================*/
  
  categoriaSeleccionada : Category;

  verDetallesCategoria(idCategoria : Category){
    this.categoriaSeleccionada = idCategoria;    
    this._router.navigate(['/posts/categories',idCategoria.id]);
  }

}
