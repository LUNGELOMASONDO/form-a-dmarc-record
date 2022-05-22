import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DmarcRecordPanelComponent } from './components/dmarc-record-panel/dmarc-record-panel.component';
import { ResourceRecordFieldComponent } from './components/resource-record-field/resource-record-field.component';
import { InfoPopupComponent } from './components/info-popup/info-popup.component';
import { RecordConfigPanelComponent } from './components/record-config-panel/record-config-panel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DmarcRecordPanelComponent,
    ResourceRecordFieldComponent,
    InfoPopupComponent,
    RecordConfigPanelComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
