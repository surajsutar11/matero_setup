import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared/shared.module';
import { MenuMappingDialogComponent } from 'app/master/menu-mapping/menu-mapping-dialog/menu-mapping-dialog.component';
import { MenuMappingService } from 'app/master/menu-mapping/menu-mapping.service';

@Component({
  selector: 'app-menu-master-dialog',
  templateUrl: './menu-master-dialog.component.html',
  styleUrl: './menu-master-dialog.component.scss',
  imports: [SharedModule],
})
export class MenuMasterDialogComponent {
  colorSave: ThemePalette = 'primary';
  colorClose: ThemePalette = 'warn';
  roles: any[] = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full access to all modules and settings.',
    },
    {
      id: 2,
      name: 'User',
      description: 'Limited access to dashboard and profile settings.',
    },
    {
      id: 3,
      name: 'Manager',
      description: 'Access to team management and reports.',
    },
    {
      id: 4,
      name: 'HR',
      description: 'Access to employee information and attendance tracking.',
    },
    {
      id: 5,
      name: 'Finance',
      description: 'Access to billing, invoicing, and financial reports.',
    },
  ];
  menus: any[] = [];
  selectedRoleId: number | null = null;
  selectedMenus: number[] = [];
  loading: boolean = false;
  dialogHeader: string = "Menu Mapping"
  constructor(private menuMappingService: MenuMappingService,
    private dialogRef: MatDialogRef<MenuMappingDialogComponent>
  ) { }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.menuMappingService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  onRoleChange(roleId: number) {
    this.selectedRoleId = roleId;
    this.loading = true;
    // this.menuMappingService.getMenuMapping(roleId).subscribe((data) => {
    const data = [
      {
        id: 1,
        name: 'Admin',
        description: 'Full access to all modules and settings.',
      },
      {
        id: 2,
        roleName: 'User',
        description: 'Limited access to dashboard and profile settings.',
      },
      {
        id: 3,
        roleName: 'Manager',
        description: 'Access to team management and reports.',
      },
      {
        id: 4,
        roleName: 'HR',
        description: 'Access to employee information and attendance tracking.',
      },
      {
        id: 5,
        roleName: 'Finance',
        description: 'Access to billing, invoicing, and financial reports.',
      },
    ]
    this.selectedMenus = data.map((menu: any) => menu.id);
    this.loading = false;
    // });
  }
  saveMapping() {
    if (this.selectedRoleId !== null) {
      this.menuMappingService
        .saveMenuMapping(this.selectedRoleId, this.selectedMenus)
        .subscribe(() => {
          alert('Menu Mapping Saved Successfully!');
        });
    }
  }
  cancelDialog() {
    this.dialogRef.close()
  }
}
