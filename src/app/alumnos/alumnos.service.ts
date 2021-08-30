/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';
import { Alumno } from './alumno.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[]=[{
    id: '1',
    nombre:'Benito Gz',
    edad: '36',
    matricula: '1170333',
    correo:'gro9876@dominio.com'
},
{
  id: '2',
  nombre:'Ramon Zapata',
  edad: '26',
  matricula: '955632',
  correo:'ra486@dominio.com'
},
{
  id: '3',
  nombre:'Luis Eduardo',
  edad: '28',
  matricula: '55413344',
  correo:'luis8876@dominio.com'
},
{
  id: '4',
  nombre:'Luis Roberto',
  edad: '18',
  matricula: '490093',
  correo:'ro9876@dominio.com'
}
];

  constructor(private http: HttpClient) { }

  getAlumnos(){
    return [...this.alumnos];
  }


  getAlumno(idAlumno: string){
  return {...this.alumnos.find((alumno: Alumno)=>alumno.id === idAlumno)};
}
  borrarAlumno(idAlumno: string){
    this.alumnos =
    this.alumnos.filter((alumno: Alumno)=>alumno.id!=idAlumno);
  }


  agregarAlumno(nombre: string,
    edad: string,
    matricula: string,
    correo: string){
      this.alumnos.push({
        nombre,
        edad,
        matricula,
        correo,
        id: this.alumnos.length+1 +''
      });

  }
  getPersonajes(): Observable<any>{
    return this.http.get<any>('http://swapi.dev/api/people/',{});
  }

  getPersonaje(idPersonaje: string): Observable<any>{
    return this.http.get<any>('http://swapi.dev/api/people/${idPersonaje}',{});
  }

}


