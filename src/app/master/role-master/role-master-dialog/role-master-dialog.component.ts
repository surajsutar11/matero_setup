import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared/shared.module';
import { RoleMenuMappingService } from 'app/master/role-menu-mapping/role-menu-mapping.service';

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
  constructor(private roleMappingService: RoleMenuMappingService,
    private dialogRef: MatDialogRef<RoleMasterDialogComponent>,
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