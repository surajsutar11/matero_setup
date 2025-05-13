import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared/shared.module';
import { MenuMappingDialogComponent } from 'app/master/menu-mapping/menu-mapping-dialog/menu-mapping-dialog.component';
import { MenuMappingService } from 'app/master/menu-mapping/menu-mapping.service';
import { RoleMappingService } from 'app/master/role-mapping/role-mapping.service';

@Component({
  selector: 'app-role-master-dialog',
  templateUrl: './role-master-dialog.component.html',
  styleUrl: './role-master-dialog.component.scss',
  imports: [SharedModule],
})
export class RoleMasterDialogComponent {
  colorSave: ThemePalette = 'primary';
  colorClose: ThemePalette = 'warn';
  loading: boolean = false;
  dialogHeader: string = "Role Master"
  roleForm: FormGroup;
  constructor(private roleMappingService: RoleMappingService,
    private dialogRef: MatDialogRef<MenuMappingDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) {
    this.roleForm = this.fb.group({
      roleName: [data.roleName || '', Validators.required],
      description: [data.description || ''],
    });
  }

  ngOnInit(): void {
  }

  saveData() {
  }
  cancelDialog() {
    this.dialogRef.close()
  }
}