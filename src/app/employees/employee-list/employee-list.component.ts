import {Component, OnInit} from '@angular/core';

import {EmployeeService} from '../service/employee.service';
import {User} from '../service/user.model';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    employeeList: User[];

    constructor(private employeeService: EmployeeService, private tostr: ToastrService) {
    }

    ngOnInit() {
        const data = this.employeeService.getData();
        data.snapshotChanges().subscribe(item => {
            this.employeeList = [];
            item.forEach(element => {
                const y = element.payload.toJSON();
                y['$key'] = element.key;
                this.employeeList.push(y as User);
            });
        });
    }

    onEdit(emp: User) {
        this.employeeService.selectedUser = Object.assign({}, emp);
    }

    onDelete(key: string) {
        this.employeeService.deleteEmployee(key);
        this.tostr.warning('User deleted successfully');
    }

}
