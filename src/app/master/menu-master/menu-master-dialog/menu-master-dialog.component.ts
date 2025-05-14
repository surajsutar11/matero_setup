import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuMasterService } from '../menu-master.service';
import { MenuMaster } from '../menu-master.component';
import { SharedModule } from '@shared/shared/shared.module';

@Component({
  selector: 'app-menu-master-dialog',
  templateUrl: './menu-master-dialog.component.html',
  styleUrls: ['./menu-master-dialog.component.scss'],
  imports: [SharedModule],
})
export class MenuMasterDialogComponent implements OnInit {
  menuForm: FormGroup;
  dialogHeader: string = 'Menu Master';
  mainMenus: MenuMaster[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MenuMasterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuMaster,
    private menuService: MenuMasterService
  ) {
    this.menuForm = this.fb.group({
      id: [data?.id || null],
      menuName: [data?.menuName || '', Validators.required],
      menuType: [data?.menuType || '', Validators.required],
      parentMenuId: [data?.parentMenuId || null],
      menuPath: [data?.menuPath || '', Validators.required],
      menuIcon: [data?.menuIcon || '', Validators.required],
      isDefault: [data?.isDefault || false],
      isActive: [data?.isActive || false],
    });
  }

  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe((menus) => {
      this.mainMenus = menus.filter((menu) => menu.menuType === 1);
    });
  }

  saveData() {
    if (this.menuForm.valid) {
      const menuData = this.menuForm.value;
      if (menuData.id) {
        this.menuService.updateMenu(menuData).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.menuService.createMenu(menuData).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  cancelDialog() {
    this.dialogRef.close();
  }
}
