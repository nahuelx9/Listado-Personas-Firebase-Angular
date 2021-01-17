import { PersonasService } from '../../personas.service';
import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService:PersonasService) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
