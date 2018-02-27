import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Entered in new component created";
  
  insertrow(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    var table = document.getElementById("tbl");

var tr = document.createElement("tr");
var td = document.createElement("td");
var txt = document.createTextNode("some value");

td.appendChild(txt);
tr.appendChild(td);
table.appendChild(tr);
  }
  constructor() { }

  ngOnInit() {
  }

}
