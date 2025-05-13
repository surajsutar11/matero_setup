import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleMasterService {

  constructor(private http: HttpClient) { }
  apiUrl: string = ''
  getAllRoles(): Observable<any[]> {
    // return this.http.get(`${this.apiUrl}/list`);

    return of([
      {
        id: 1,
        roleName: 'Admin',
        description: 'Full access to all modules and settings.',
      },
      {
        id: 2,
        roleName: 'User',
        description: 'Limited access to dashboard and profile settings.',
      },
      {
        id: 3,
        roleName: 'Manager',
        description: 'Access to team management and reports.',
      },
      {
        id: 4,
        roleName: 'HR',
        description: 'Access to employee information and attendance tracking.',
      },
      {
        id: 5,
        roleName: 'Finance',
        description: 'Access to billing, invoicing, and financial reports.',
      },
    ]);
  }
  addRole(role: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, role);
  }

  updateRole(id: number, role: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, role);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
