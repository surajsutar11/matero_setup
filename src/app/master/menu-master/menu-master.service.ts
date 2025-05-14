import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuMaster } from './menu-master.component';

@Injectable({
  providedIn: 'root'
})
export class MenuMasterService {
private baseUrl = 'http://your-api-url/api/role-menu-mapping';

  constructor(private http: HttpClient) { }

  // Dummy data
  private dummyMenus: MenuMaster[] = [
    {
      id: 1,
      menuName: 'Dashboard',
      menuType: 1,
      parentMenuId: 1,
      menuPath: '/dashboard',
      isDefault: true,
      isActive: true,
      createdBy: 1,
      createdAt: new Date(),
      updatedBy: 1,
      updatedAt: new Date(),
      isDeleted: 'N',
      reasonForDeletion: '',
      menuIcon: 'dashboard',
    },
    {
      id: 2,
      menuName: 'Reports',
      menuType: 2,
      parentMenuId: 1,
      menuPath: '/reports',
      isDefault: false,
      isActive: true,
      createdBy: 1,
      createdAt: new Date(),
      updatedBy: 1,
      updatedAt: new Date(),
      isDeleted: 'N',
      reasonForDeletion: '',
      menuIcon: 'bar_chart',
    },
  ];

  getAllMenus(): Observable<MenuMaster[]> {
    return of(this.dummyMenus);
  }

  createMenu(menu: MenuMaster): Observable<MenuMaster> {
    const newMenu = { ...menu, id: this.dummyMenus.length + 1 };
    this.dummyMenus.push(newMenu);
    return of(newMenu);
  }

  updateMenu(menu: MenuMaster): Observable<MenuMaster> {
    const index = this.dummyMenus.findIndex((m) => m.id === menu.id);
    if (index !== -1) {
      this.dummyMenus[index] = { ...menu };
    }
    return of(menu);
  }

  deleteMenu(id: number): Observable<void> {
    this.dummyMenus = this.dummyMenus.filter((menu) => menu.id !== id);
    return of(undefined);
  }
}

