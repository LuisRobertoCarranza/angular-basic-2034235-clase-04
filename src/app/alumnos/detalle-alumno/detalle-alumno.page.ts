import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../alumno.model';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {

  private idAlumno: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  alumno: Alumno;
  constructor(private activateRoute: ActivatedRoute, private router: Router,
    private alumnoService: AlumnosService) { }


  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paraMap =>{
      this.idAlumno = paraMap.get('idAlumno');
      this.alumno = this.alumnoService.getAlumno(this.idAlumno);
    });
  }

  borrar(){
    this.alumnoService.borrarAlumno(this.idAlumno);
    this.router.navigate(['/alumnos']);
  }
}
