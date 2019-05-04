import { Component, OnInit } from '@angular/core';
import { User } from '../../common/models/user';
import { UserService } from '../../common/services/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    public user : User;
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUser().subscribe(user => this.user = user );
    }
    
}
