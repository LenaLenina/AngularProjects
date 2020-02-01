import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { SidebarItem } from '../models/index';

@Injectable()
export class SidebarItemsManager {

  private sidebarAnnouncedSource = new Subject<SidebarItem[]>();

  sidebarAnnounced$ = this.sidebarAnnouncedSource.asObservable();

  announceSidebarItems(newSidebarItems: SidebarItem[]) {
    this.sidebarAnnouncedSource.next(newSidebarItems);
  }
}