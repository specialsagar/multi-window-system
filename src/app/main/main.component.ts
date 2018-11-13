import { Component, ViewChildren, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() showExcel: Boolean;
  private data: any;
  private colHeaders: [];
  private data2: [];
  private options: any;
  private objectKeys = Object.keys;
  @ViewChildren('hot') hot;
  subSectionActive = false;
  subsections: any;

  sections = [
    {
      title: 'Sect 1 tab 1',
      subsect: 'sub1',
      is_section_active: true
    },
    {
      title: 'Sect 1 tab 2',
      subsect: 'sub2'
    },
    {
      title: 'Sect 1 tab 3',
      subsect: 'sub3'
    },
    {
      title: 'Sect 1 tab 4',
      subsect: 'sub4'
    }
  ];
  
  constructor() {
    this.options = {
      startRows: 5,
      startCols: 7,
      colHeaders: true,
      rowHeaders: true,
      columnSorting: true,
      contextMenu: true,
      width: '100%'
    };
  }

  openSubsection(subNumber){
    this.subSectionActive = true;
    if (subNumber == 1) {
      this.subsections = [
        {
          title: "sub 1",
          data: [
            ['Afghanistan', '30.552', '1000s', '2013'],
            ['Albania', '2.774', '1000s', '2013'],
            ['Algeria', '39.208', '1000s', '2013'],
            ['Angola', '21.472', '1000s', '2013']
          ],
          headers: ['Country', 'Level', 'Units', 'Year'],
          is_active: true
        },
        {
          title: "sub 2",
          data: [
            ['Barbados', '285', '1000s', '2013'],
            ['Belarus', '9.464', '1000s', '2012'],
            ['Belgium', '11.195', '1000s', '2013'],
            ['Belize', '324', '1000s', '2012'],
            ['Benin', '10.323', '1000s', '2013']
          ],
          headers: ['Country', 'Level', 'Units', 'Year'],
          is_active: false
        },
      ]
    } else {
      this.subsections = [
        {
          title: "other sub 1",
          data: [
            ['1',	'Rob	Rocket',	'71797', 'Poland'],
            ['2',	'Mario	Johnson',	'65681', 'Sweden'],
            ['3',	'Rob	Johnson',	'92998', 'Turkey'],
            ['4',	'Frank	Farewell',	'44717', 'Russia'],
          ],
          is_active: true
        },
        {
          title: "other sub 2",
          data: [
            ['1',	'John',	'Moore',	'72355', 'France'],
            ['2',	'Mario',	'Johnson',	'47718', 'France'],
          ],
          is_active: false
        },
      ]
    }
  }

  loadSubData(data, headers){
    this.data = data;
    this.colHeaders = headers;
    this.hot[0].inst.updateSettings({
      startRows: data.length,
      startCols: data[0].length
    })
  }
  
  loadData3() {
    this.subSectionActive = false;
    this.data = [
      ['Afghanistan', '30.552', '1000s', '2013', '0.0244', '27.708', '24.019', '11.215'],
      ['Albania', '2.774', '1000s', '2013', '-0.0100', '2.884', '3.015', '3.228'],
      ['Algeria', '39.208', '1000s', '2013', '0.0189', '36.383', '33.461', '25.577'],
      ['Angola', '21.472', '1000s', '2013', '0.0313', '18.927', '15.977', '10.051']
    ];
  }
  
  updateSettings() {
    // update panel changes for the handsontable
    this.hot.forEach(element => {
      element.inst.updateSettings({});
    });
  }
}