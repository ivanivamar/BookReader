import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {RouterOutlet} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PdfViewerModule,
        RouterOutlet
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
