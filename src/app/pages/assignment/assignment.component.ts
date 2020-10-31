import { Component, OnInit } from '@angular/core';
import Mechanic from 'src/app/models/mechanic.models';
import { MechanicService } from 'src/app/services/mechanic.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  mechanics: Mechanic[] = [];

  constructor(private mechanicService: MechanicService) { }

  ngOnInit(): void {
    this.getMecanics();
  }

  /**
   * Obtiene los mecanicos disponibles
   */
  private getMecanics() {
    this.mechanicService.getAvailableMechanics()
      .subscribe((resp: Mechanic[]) => {
        this.mechanics = resp;
      });
  }

}
