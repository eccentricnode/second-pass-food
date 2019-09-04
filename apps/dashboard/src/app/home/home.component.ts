import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmojiDialogComponent } from '@second-pass/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'second-pass-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedRoute: Object;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  openEmojiDialog() {
    const dialog = this.dialog.open(EmojiDialogComponent);

    dialog.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.selectedRoute = selection;
          this.router.navigateByUrl(this.selectedRoute.path)
        } else {
          
        }
      })
  }
}
