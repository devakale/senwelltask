import { Component } from '@angular/core';
import { ListService } from './list.service';


interface Name {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  dataSource: { name: string, count: number }[] = [];

  constructor(private nameService: ListService) {}

  ngOnInit(): void {
    this.nameService.getNames().subscribe((data: Name[]) => {
      const nameCounts = data.reduce((acc: { [key: string]: number }, item: Name) => {
        acc[item.name] = (acc[item.name] || 0) + 1;
        return acc;
      }, {});

      this.dataSource = Object.keys(nameCounts).map(name => ({
        name,
        count: nameCounts[name]
      }));
    });
  }

  getRowClass(count: number): string {
    if (count > 0 && count < 3) return 'red-row';
    if (count >= 3 && count < 10) return 'yellow-row';
    if (count >= 10) return 'green-row';
    return '';
  }
}
