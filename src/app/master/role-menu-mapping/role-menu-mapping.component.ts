import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoleMenuMappingService } from './role-menu-mapping.service';
import { RoleMenuMappingDialogComponent } from './role-menu-mapping-dialog/role-menu-mapping-dialog.component';
import { SharedModule } from '@shared/shared/shared.module';
import { SearchComponent } from '@shared/components/search/search.component';
import { MtxGridColumn } from '@ng-matero/extensions/grid';

@Component({
  selector: 'app-role-menu-mapping',
  imports: [SharedModule, SearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './role-menu-mapping.component.html',
  styleUrl: './role-menu-mapping.component.scss',
})
export class RoleMenuMappingComponent implements OnInit {
  displayedColumns: MtxGridColumn[] = [
    { header: 'ID', field: 'id', sortable: true },
    { header: 'Role Name', field: 'role.roleName', sortable: true },
    { header: 'Menu Name', field: 'menuNames', sortable: true },
    { header: 'Is Active', field: 'isActive', type: 'boolean', sortable: true },
    {
      header: 'Actions',
      field: 'action',
      width: '100px',
      type: 'button',
      class:'actions',
      buttons: [
        {
          icon: 'edit',
          tooltip: 'Edit',
          type: 'icon',
          class:'action_button edit',
          click: (record) => this.openDialog(record),
        },
        {
          icon: 'delete',
          tooltip: 'Delete',
          type: 'icon',
          color: 'warn',
          class:'action_button delete',
          click: (record) => this.deleteMapping(record.id),
        },
      ],
    },
  ];
  dataSource: any[] = [];
  totalCount = 0;
  loading = true;

  constructor(private dialog: MatDialog, private mappingService: RoleMenuMappingService) {}

  ngOnInit() {
    this.loadMappings();
  }

  loadMappings() {
    this.mappingService.getAllMappings().subscribe((data) => {
      this.dataSource = data.map((item: any) => ({
        ...item,
        menuNames: item.menu.map((m: any) => m.menuName).join(', '),
      }));
      this.totalCount = this.dataSource.length;
      this.loading = false;
    });
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(RoleMenuMappingDialogComponent, {
      width: '600px',
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadMappings();
      }
    });
  }

  deleteMapping(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.mappingService.deleteMapping(id).subscribe(() => {
        this.loadMappings();
      });
    }
  }
}
