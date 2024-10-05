import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@NgModule({
  // declarations: アプリで使うコンポーネント（AppComponent）を宣言。
  declarations: [AppComponent, HeaderComponent, UserComponent],
  //   bootstrap: アプリの最初に表示するコンポーネントを指定（AppComponentが画面に表示される）。
  bootstrap: [AppComponent],
  // Standaloneをどうしても使いたい時は、DeclarationではなくImportで書く。
  imports: [BrowserModule, SharedModule, TasksModule],
})

// AppModuleはアプリケーションのメインモジュール（ルートモジュール）を定義している。
export class AppModule {}
