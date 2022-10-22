import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  items!: MenuItem[];

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
        icon: 'pi pi-pencil',
        title: "hello",
        label: "hhe"
      },
      {
        icon: 'pi pi-pencil',
      },
      {
        icon: 'pi pi-pencil',
      },
      {
        icon: 'pi pi-pencil',
      },
      {
        icon: 'pi pi-pencil',
      }
    ];
  }

}
