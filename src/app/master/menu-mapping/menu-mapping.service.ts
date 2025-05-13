import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuMappingService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  // getRoles(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/roles`);
  // }

  // getMenus(): Observable<any> {
  //   // return this.http.get(`${this.apiUrl}/menus`);
  //   return of([
  //     {
  //       id: 1,
  //       roleName: 'Admin',
  //       menuNames: ['Dashboard', 'User Management', 'Settings'],
  //     },
  //     {
  //       id: 2,
  //       roleName: 'User',
  //       menuNames: ['Dashboard', 'Profile'],
  //     },
  //     {
  //       id: 3,
  //       roleName: 'Manager',
  //       menuNames: ['Dashboard', 'Reports', 'Team Management'],
  //     },
  //   ])
  // }

  // getMenuMapping(roleId: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/menu-mapping/${roleId}`);
  // }

  // saveMenuMapping(roleId: number, menuIds: number[]): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/menu-mapping`, {
  //     roleId,
  //     menuIds,
  //   });
  // }
  getRoles(): Observable<any[]> {
    return of([
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
    ]);
  }

  getMenus(): Observable<any[]> {
    return of([
      { id: 1, menuName: 'Dashboard' },
      { id: 2, menuName: 'User Management' },
      { id: 3, menuName: 'Settings' },
      { id: 4, menuName: 'Reports' },
      { id: 5, menuName: 'Profile' },
      { id: 6, menuName: 'Team Management' },
    ]);
  }

  getMenuMapping(roleId: number): Observable<any[]> {
    const mockData: Record<number, number[]> = {
    1: [1, 2, 3],       // Admin -> Dashboard, User Management, Settings
    2: [1, 5],          // User -> Dashboard, Profile
    3: [1, 4, 6],       // Manager -> Dashboard, Reports, Team Management
    4: [1],             // HR -> Dashboard
    5: [1, 3, 4]        // Finance -> Dashboard, Settings, Reports
  };

  return of(mockData[roleId] ?? []);
  }

  saveMenuMapping(roleId: number, menuIds: number[]): Observable<any> {
    console.log(`Saving mapping for Role ID: ${roleId}`);
    console.log(`Mapped Menus: ${menuIds}`);
    
    return of({
      success: true,
      message: 'Menu Mapping Saved Successfully!',
    });
  }
}
