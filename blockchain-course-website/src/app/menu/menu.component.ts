import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  activeItem: MenuItem;

  constructor() {
    this.menuItems = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'], command: (event: { item: any; }) => {
          this.activeItem = event.item;
        }
      },
      {
        label: 'Course Content', icon: 'pi pi-fw pi-book', routerLink: ['/course-content'], command: (event: { item: any; }) => {
          this.activeItem = event.item;
        }
      }
    ];

    this.activeItem = this.menuItems[0];
  }

  ngOnInit(): void {
  }

}
