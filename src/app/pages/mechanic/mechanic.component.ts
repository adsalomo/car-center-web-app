import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Mechanic from 'src/app/models/mechanic.models';
import { DocumentTypeService } from 'src/app/services/document-type.service';
import DocumentType from "src/app/models/document-type.models"
import { MechanicService } from 'src/app/services/mechanic.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {

  mechanic: Mechanic = new Mechanic();
  documentTypes: DocumentType[] = [];
  mechanics: Mechanic[] = [];

  constructor(private documentTypeService: DocumentTypeService,
    private mechanicService: MechanicService) { }

  ngOnInit(): void {
    this.documentTypeService.getDocumentTypes()
      .subscribe((docs: DocumentType[]) => {
        this.documentTypes = docs;
        this.documentTypes.unshift(new DocumentType(undefined, undefined, '--SELECCIONE--'))
      })

    this.getMecanics();
  }

  /**
   * Obtiene listado de mecanicos
   */
  private getMecanics() {
    this.mechanicService.getAll()
      .subscribe((resp: Mechanic[]) => {
        this.mechanics = resp;
      })
  }

  /**
   * Guarda los registros
   * @param mechanicForm Form view
   */
  save(mechanicForm: NgForm) {
    if (mechanicForm.invalid) {
      Object.values(mechanicForm.controls)
        .forEach(control => {
          control.markAsTouched();
        });
      return;
    }

    const {
      document,
      documentTypeId,
      firstName,
      secondName,
      surName,
      secondSurName,
      cellPhone,
      address,
      email,
      state
    } = mechanicForm.value;

    let mechanic = new Mechanic(document,
      documentTypeId,
      undefined,
      firstName,
      secondName,
      surName,
      secondSurName,
      cellPhone,
      address,
      email,
      state ? state : "A");

    this.mechanicService.save(mechanic)
      .subscribe(() => {
        Swal.fire({
          title: 'Información!',
          text: 'Operación completada con éxito',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.mechanic = new Mechanic();
          mechanicForm.reset();
          this.getMecanics();
        })
      }, error => {
        let message: string;
        if (error.error.status === 400) {
          message = error.error.message;
        } else {
          message = 'Se presentó un error al procesar la solicitud';
        }

        Swal.fire({
          title: 'Error!',
          text: message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }

}
