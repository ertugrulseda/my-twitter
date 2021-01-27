import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLeftComponent } from './components/home-left/home-left.component';
import { HomeRightComponent } from './components/home-right/home-right.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { BtnUnderlinedComponent } from './components/atomic-components/btn-underlined/btn-underlined.component';
import { BtnStandartComponent } from './components/atomic-components/btn-standart/btn-standart.component';
import { TwitCardComponent } from './components/atomic-components/twit-card/twit-card.component';
import { LoadingComponent } from './components/atomic-components/loading/loading.component';
import { AvatarComponent } from './components/atomic-components/avatar/avatar.component';
import { ModalModule } from './components/atomic-components/my-modal';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeLeftComponent,
    HomeRightComponent,
    HomeContainerComponent,
    BtnUnderlinedComponent,
    BtnStandartComponent,
    TwitCardComponent,
    LoadingComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
