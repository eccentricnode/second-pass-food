import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MaterialModule } from '@second-pass/material';
import { EmojiDialogComponent } from './emoji-dialog/emoji-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [EmojiDialogComponent],
  entryComponents: [EmojiDialogComponent]
})
export class CoreDataModule {}
