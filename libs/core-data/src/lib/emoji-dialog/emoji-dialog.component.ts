import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'second-pass-emoji-dialog',
  templateUrl: './emoji-dialog.component.html',
  styleUrls: ['./emoji-dialog.component.scss']
})
export class EmojiDialogComponent {

  routes = [
    { path: 'tacos', emoji: '🌮', title: 'Tacos' },
    { path: 'pizzas', emoji: '🍕', title: 'Pizzas' }
  ];

  chosenRoute: Object;

  constructor(
    public dialogRef: MatDialogRef<EmojiDialogComponent>,

  ) { }

  confirmSelection() {
    this.dialogRef.close(this.chosenRoute);
  }
}
