import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleAlumnoPageModule } from './alumnos/detalle-alumno/detalle-alumno.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
   path: 'alumnos',
    children:[
      {
        path:'alumnos',
        loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosPageModule)
      },
      {
        path: 'idAlumno',
        // eslint-disable-next-line @typescript-eslint/quotes
        loadChildren: () => import("./alumnos/detalle-alumno/detalle-alumno.module").then(m => DetalleAlumnoPageModule)
      }
    ]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
