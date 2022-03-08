import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DirectoryComponent } from './directory/directory.component';
import { ShopComponent } from './shop/shop.component';
import { CollectionPreviewComponent } from './shop/collection-preview/collection-preview.component';
import { CollectionItemComponent } from './shop/collectionPreview/collection-item/collection-item.component';

@NgModule({
  declarations: [AppComponent, DirectoryComponent, ShopComponent, CollectionPreviewComponent, CollectionItemComponent],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
