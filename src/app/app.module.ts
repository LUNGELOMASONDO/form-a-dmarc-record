import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DmarcRecordPanelComponent } from './components/dmarc-record-panel/dmarc-record-panel.component';
import { ResourceRecordFieldComponent } from './components/resource-record-field/resource-record-field.component';
import { InfoPopupComponent } from './components/info-popup/info-popup.component';
import { RecordConfigPanelComponent } from './components/record-config-panel/record-config-panel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReadinessMessageComponent } from './components/readiness-message/readiness-message.component';
import { TagDmarcversionComponent } from './components/tag-dmarcversion/tag-dmarcversion.component';
import { TagPolicyComponent } from './components/tag-policy/tag-policy.component';
import { TagRuaComponent } from './components/tag-rua/tag-rua.component';
import { TagRufComponent } from './components/tag-ruf/tag-ruf.component';
import { TaglabelComponent } from './components/taglabel/taglabel.component';

@NgModule({
  declarations: [
    AppComponent,
    DmarcRecordPanelComponent,
    ResourceRecordFieldComponent,
    InfoPopupComponent,
    RecordConfigPanelComponent,
    NavBarComponent,
    ReadinessMessageComponent,
    TagDmarcversionComponent,
    TagPolicyComponent,
    TagRuaComponent,
    TagRufComponent,
    TaglabelComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
