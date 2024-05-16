import { Component, OnInit} from '@angular/core';
import { model } from '../../model/model'; 
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './randomcolor.component.html',
  styleUrls: ['./randomcolor.component.scss']
})

export class ColorComponent implements OnInit 
{
  color: model = new model(0,1,'','');
  constructor(private colorService: ColorService) { }
  ngOnInit(): void 
  {
    this.generateRandomColor();
  }
  generateRandomColor(): void 
  {
    this.colorService.getRandomColor().subscribe((data: any) => 
      {
        if (data) 
          {
            this.color = new model (data.id, data.uid, data.hex_values, data.colorname);
          }
      });
  }

  afterClick(): void 
  { 
    window.location.reload();
  }
}
