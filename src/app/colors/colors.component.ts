import { Component } from '@angular/core';
import { model } from '../model/model';
import { colorService } from '../service/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  color!: model ;
  colors: string[] = ['#787812', '#8cd98c', '#3c3c06', '#e22c2c', '#021802'];
  constructor(private colorService: colorService) { }

  ngOnInit(): void {
    this.colorService.getRandomColor().subscribe((data: any) => {
      if (data) {
        this.color = new model(data.id, data.uid, data.hex_value, data.color_name);
      }
    });
  }

  afterClick() {
    window.location.reload();
  }
  
}
