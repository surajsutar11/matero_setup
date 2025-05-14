import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleMenuMappingService {
  private baseUrl = 'http://your-api-url/api/role-menu-mapping';

  constructor(private http: HttpClient) { }

  // getAllMappings(): Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }

  // addMapping(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl, data);
  // }

  // updateMapping(id: number, data: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${id}`, data);
  // }

  // deleteMapping(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`);
  // }



  getAllMappings(): Observable<any> {
    const dummyData = [
      {
        id: 1,
        role: { id: 1, roleName: 'Admin' },
        menu: [{ id: 1, menuName: 'Dashboard' },
        { id: 2, menuName: 'Settings' }],
        isActive: true,
        createdBy: 1,
        createdAt: new Date(),
        updatedBy: 2,
        updatedAt: new Date(),
        isDeleted: 'N',
        deletedBy: null,
        deletedAt: null,
        reasonForDeletion: '',
      },
      {
        id: 2,
        role: { id: 1, roleName: 'Admin' },
        menu: [{ id: 3, menuName: 'Profile' }],
        isActive: false,
        createdBy: 2,
        createdAt: new Date(),
        updatedBy: null,
        updatedAt: null,
        isDeleted: 'N',
        deletedBy: null,
        deletedAt: null,
        reasonForDeletion: '',
      },
    ];
    return of(dummyData);
  }

  addMapping(data: any): Observable<any> {
    // return this.http.post(this.baseUrl, data); // API call
    console.log('Dummy Add Mapping:', data);
    return of({
      status: 'success',
      message: 'Mapping added successfully',
      data: data,
    });
  }

  updateMapping(id: number, data: any): Observable<any> {
    console.log('Dummy Update Mapping:', id, data);
    return of({
      status: 'success',
      message: 'Mapping updated successfully',
      data: data,
    });
  }
  deleteMapping(id: number): Observable<any> {
    // return this.http.delete(`${this.baseUrl}/${id}`); // API call
    console.log('Dummy Delete Mapping:', id);
    return of({
      status: 'success',
      message: `Mapping with ID ${id} deleted successfully`,
    });
  }

  getRoles(): Observable<any> {
    const dummyRoles = [
      { id: 1, roleName: 'Admin' },
      { id: 2, roleName: 'Manager' },
      { id: 3, roleName: 'Employee' },
    ];
    return of(dummyRoles);
  }

  getMenus(): Observable<any> {
    const dummyMenus = [
      { id: 1, menuName: 'Dashboard' },
      { id: 2, menuName: 'Settings' },
      { id: 3, menuName: 'Profile' },
      { id: 4, menuName: 'Reports' },
    ];
    return of(dummyMenus);
  }
}


