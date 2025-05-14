import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { SearchComponent } from '@shared/components/search/search.component';
import { SharedModule } from '@shared/shared/shared.module';
import { MenuMasterDialogComponent } from './menu-master-dialog/menu-master-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MenuMasterService } from './menu-master.service';
export interface MenuMaster {
  id: number;
  menuName: string;
  menuType: number;
  parentMenuId?: number;
  menuPath?: string;
  isDefault: boolean;
  isActive: boolean;
  createdBy?: number;
  createdAt?: Date;
  updatedBy?: number;
  updatedAt?: Date;
  isDeleted: string; // 'Y' or 'N'
  deletedBy?: number;
  deletedAt?: Date;
  reasonForDeletion?: string;
  menuIcon?: string;
}

@Component({
  selector: 'app-menu-master',
  templateUrl: './menu-master.component.html',
  styleUrl: './menu-master.component.scss',
  imports: [SharedModule,SearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuMasterComponent {
  dataSource: MenuMaster[] = [];
  totalCount: number = 0;
  loading: boolean = false;

  displayedColumns: MtxGridColumn[] = [
    { header: 'ID', field: 'id', sortable: true },
    { header: 'Menu Name', field: 'menuName', sortable: true },
    { header: 'Menu Type', field: 'menuType', sortable: true },
    { header: 'Is Default', field: 'isDefault', type: 'boolean' },
    { header: 'Is Active', field: 'isActive', type: 'boolean' },
    {
      header: 'Actions',
      field: 'action',
      width: '100px',
      type: 'button',
      class: 'actions',
      buttons: [
        {
          icon: 'edit',
          tooltip: 'Edit',
          type: 'icon',
          class: 'action_button edit',
          click: (record) => this.openDialog(record),
        },
        {
          icon: 'delete',
          tooltip: 'Delete',
          type: 'icon',
          color: 'warn',
          class: 'action_button delete',
          click: (record) => this.deleteMenu(record.id),
        },
      ],
    },
  ];

  constructor(private dialog: MatDialog, private menuService: MenuMasterService) { }

  ngOnInit() {
    this.fetchMenus();
  }

  fetchMenus() {
    this.loading = true;
    this.menuService.getAllMenus().subscribe((data: MenuMaster[]) => {
      this.dataSource = data;
      this.totalCount = data.length;
      this.loading = false;
    });
  }

  openDialog(data?: MenuMaster) {
    const dialogRef = this.dialog.open(MenuMasterDialogComponent, {
      width: '900px',
      data: data || {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        if (result.id) {
          this.menuService.updateMenu(result).subscribe(() => this.fetchMenus());
        } else {
          this.menuService.createMenu(result).subscribe(() => this.fetchMenus());
        }
      }
    });
  }

  deleteMenu(id: number) {
    this.menuService.deleteMenu(id).subscribe(() => this.fetchMenus());
  }
}
