import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  data: any[] = [];
  filter$: Subject<string> = new Subject<string>();
  currentFilter: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.filter$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((filterText: string) => this.apiService.getData(filterText))
    ).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching filtered data:', error);
      }
    );
  }

  getData(): void {
    this.apiService.getData(this.currentFilter).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterText = (event.target as HTMLInputElement).value;
    this.currentFilter = filterText;
    this.filter$.next(filterText);
  }

  buscar(): void {
    this.getData();
  }
}
