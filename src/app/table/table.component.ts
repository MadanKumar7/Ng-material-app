import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

	dataSource: any = [];

	constructor() { }

	ngOnInit(): void {
		this.fetchData();
	}

	fetchData() {

	}

}
