import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { InputComponent } from './tasks/inputTask/input/input.component';
import { TaskComponent } from './tasks/task/task.component';

@NgModule({
  // declarations: アプリで使うコンポーネント（AppComponent）を宣言。
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    InputComponent,
    TaskComponent,
  ],
  //   bootstrap: アプリの最初に表示するコンポーネントを指定（AppComponentが画面に表示される）。
  bootstrap: [AppComponent],
  // Standaloneをどうしても使いたい時は、DeclarationではなくImportで書く。
  imports: [BrowserModule, FormsModule, SharedModule],
})

// AppModuleはアプリケーションのメインモジュール（ルートモジュール）を定義している。
export class AppModule {}
