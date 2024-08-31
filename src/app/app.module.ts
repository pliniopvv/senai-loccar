import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VeiculosListComponent } from './view/veiculos-list/veiculos-list.component';
import { VeiculosDetailsComponent } from './view/veiculos-details/veiculos-details.component';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { VeiculoContainerComponent } from './shared/veiculo-container/veiculo-container.component';
import { VeiculoItemComponent } from './shared/veiculo-container/veiculo-item/veiculo-item.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosListComponent,
    VeiculosDetailsComponent,
    VeiculoContainerComponent,
    VeiculoItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
