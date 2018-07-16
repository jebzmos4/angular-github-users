import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from '../github-users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private githubUsersService: GithubUsersService) { }

  ngOnInit() {
    this.githubUsersService.getUsers()
    .subscribe((users: User[]) => {
      console.log('USERS', users);
      this.users = users;
    });
  }
}
