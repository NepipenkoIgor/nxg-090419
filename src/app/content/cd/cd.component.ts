import { Component, OnInit } from '@angular/core';

export class Person {
  public constructor(
    public firstName: string,
    public lastName: string,
  ) {
  }

  public getDate(): Date {
    return new Date();
  }
}

@Component({
  selector: 'course-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css']
})
export class CdComponent implements OnInit {

  public person1: Person;
  public person2: Person;

  public ngOnInit(): void {
    this.person1 = new Person('Igor', 'Nepipenko');
    this.person2 = new Person('Vlad', 'Loban');

    setTimeout(()=>{
      this.person1.firstName = 'Evgeniya';
      this.person2 =  new Person('Alexsandr', 'Loban');
    }, 5000)
  }

}
