import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, 
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  @Input('srvElement') element: {type:string, name:string, content:string,};

  constructor() {
    console.log("Server-Component Constructor Called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Server-Component ngOnChanges Called");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("Server-Component ngDoCheck Called");
  }

  ngAfterContentInit(): void {
    console.log("Server-Component ngAfterContentInit Called");
  }

  ngAfterContentChecked(): void {
    console.log("Server-Component ngAfterContentChecked Called");
  }

  ngAfterViewInit(): void {
    console.log("Server-Component ngAfterViewInit Called");
  }

  ngAfterViewChecked(): void {
    console.log("Server-Component ngAfterViewChecked Called");
  }

  ngOnInit(): void {
    console.log("Server-Component ngOnInit Called");
  }

  ngOnDestroy(): void {
    console.log("Server-Component ngOnDestroy Called");
  }

}
