import { Component } from '@angular/core';
import { RoleMasterDialogComponent } from './role-master-dialog/role-master-dialog.component';
import { RoleMasterService } from './role-master.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SharedModule } from '@shared/shared/shared.module';
import { SearchComponent } from '@shared/components/search/search.component';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.scss',
  imports: [SharedModule,SearchComponent],
})
export class RoleMasterComponent {
 displayedColumns: string[] = ['id', 'roleName', 'description', 'actions'];
 searchFieldPlaceHolder: string = 'Search User /Menu';
  dataSource = new MatTableDataSource([]);
  constructor(private dialog: MatDialog, private roleService: RoleMasterService) {}
  ngOnInit() {
    this.fetchRoles();
  }

  fetchRoles() {
    this.roleService.getAllRoles().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  openDialog(data?: any) {
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

   filterTableBySearchText(searchText: string | null) {}
}
