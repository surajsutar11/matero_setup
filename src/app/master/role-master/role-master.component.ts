
import { RoleMasterDialogComponent } from './role-master-dialog/role-master-dialog.component';
import { RoleMasterService } from './role-master.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared/shared.module';
import { SearchComponent } from '@shared/components/search/search.component';

import { MatSort } from "@angular/material/sort";
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MtxGridColumn } from '@ng-matero/extensions/grid';

export interface RoleMaster {
  id: number;
  roleName: string;
  description: string;
}
@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.scss',
  imports: [SharedModule, SearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoleMasterComponent {
  searchFieldPlaceHolder: string = 'Search User /Menu';
  dataSource: RoleMaster[] = [];
  totalCount: number = 0;
  displayedColumns: MtxGridColumn[] = [
    { header: 'ID', field: 'id', sortable: true },
    { header: 'Role Name', field: 'roleName', sortable: true },
    { header: 'Description', field: 'description', sortable: true },
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
          click: (record) => this.deleteRole(record.id),
        },
      ],
    },
  ];


  constructor(private dialog: MatDialog, private roleService: RoleMasterService) { }
  ngOnInit() {
    this.fetchRoles();
  }

  fetchRoles() {
    this.roleService.getAllRoles().subscribe((data: RoleMaster[]) => {
      this.dataSource = data;
      this.totalCount = data.length;
    });
  }

  openDialog(data?: RoleMaster) {
    const dialogRef = this.dialog.open(RoleMasterDialogComponent, {
      width: '800px',
      data: data || {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchRoles();
      }
    });
  }

  deleteRole(id: number) {
    this.roleService.deleteRole(id).subscribe(() => {
      this.fetchRoles();
    });
  }

  filterTableBySearchText(searchText: string | null) { }
}
