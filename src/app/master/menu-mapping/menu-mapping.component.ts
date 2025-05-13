import { Component } from '@angular/core';
import { MenuMappingService } from './menu-mapping.service';
import { MatDialog } from '@angular/material/dialog';
import { MenuMappingDialogComponent } from './menu-mapping-dialog/menu-mapping-dialog.component';
import { SharedModule } from '@shared/shared/shared.module';

@Component({
  selector: 'app-menu-mapping',
  templateUrl: './menu-mapping.component.html',
  styleUrl: './menu-mapping.component.scss',
   imports: [SharedModule],
})
export class MenuMappingComponent {
 displayedColumns: string[] = ['id', 'role', 'menus', 'actions'];
  dataSource: any[] = [];

  constructor(private menuMappingService: MenuMappingService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadMappings();
  }

  loadMappings() {
    // this.menuMappingService.getMenus().subscribe((data) => {
      this.dataSource = [
      {
        id: 1,
        roleName: 'Admin',
        menuNames: ['Dashboard', 'User Management', 'Settings'],
      },
      {
        id: 2,
        roleName: 'User',
        menuNames: ['Dashboard', 'Profile'],
      },
      {
        id: 3,
        roleName: 'Manager',
        menuNames: ['Dashboard', 'Reports', 'Team Management'],
      },
    ];
    // });
  }

  openDialog(mapping?: any) {
    const dialogRef = this.dialog.open(MenuMappingDialogComponent, {
      width: '600px',
      data: mapping,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadMappings();
      }
    });
  }
}
