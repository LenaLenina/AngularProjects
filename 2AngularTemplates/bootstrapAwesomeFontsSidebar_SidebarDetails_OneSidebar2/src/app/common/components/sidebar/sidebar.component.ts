import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../../models/sidebarItem';
import { SidebarItemsManager } from '../../services/sidebarItemsManager';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarItems: SidebarItem[] = null;

  constructor(private sidebarItemsManager: SidebarItemsManager) {
    
  }

  ngOnInit() {
    this.sidebarItemsManager.sidebarAnnounced$.subscribe(sidebarItems =>{
      this.sidebarItems = sidebarItems;
    });
  }

}
