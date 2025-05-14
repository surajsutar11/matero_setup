import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '@shared/shared/shared.module';

@Component({
  selector: 'app-search',
  imports: [SharedModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
 @Output() onSearch = new EventEmitter<string | null>();
  @Input() placeholder = 'Search';
  @Input() dynamicSearch: boolean = false;

  searchText: string | null = null;

  onSearchClick() {
    this.onSearch.emit(this.searchText !== '' ? this.searchText : null);
  }

  onInputChange() {
    if (!this.dynamicSearch)
      this.onSearch.emit(this.searchText !== '' ? this.searchText : null);
  }
}
