import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from '../github-users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users;
  constructor(private githubUsersService: GithubUsersService) { }

  ngOnInit() {
    this.githubUsersService.getUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

}
