import {Injectable} from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {User} from './user.model';

@Injectable()
export class EmployeeService {
    userList: AngularFireList<any>;
    selectedUser: User = new User();

    constructor(private firebase: AngularFireDatabase) {
    }

    getData() {
        this.userList = this.firebase.list('employees');
        return this.userList;
    }

    insertEmployee(employee: User) {
        this.userList.push({
            firstName: employee.firstName,
            lastName: employee.lastName,
            office: employee.office
        });
    }

    updateEmployee(employee: User) {
        this.userList.update(employee.$key,
            {
                firstName: employee.firstName,
                lastName: employee.lastName,
                office: employee.office
            });
    }

    deleteEmployee($key: string) {
        this.userList.remove($key);
    }

}
