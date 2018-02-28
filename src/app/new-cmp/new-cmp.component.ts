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
    // alert("Button is clicked");
    var table = document.getElementById("oop");
    // var row_length = document.getElementById("tbl1").getElementsByTagName("tr").cells.length;
    var row = table.getElementsByTagName('tr')[1];
var cells = row.getElementsByTagName('td');
var cellCount = cells.length;
// alert(cellCount);
// alert(row_length);

var tr = document.createElement("tr");

// for (var i=0; i < cellCount; i++){
//   //alert("llllllllll");
//   var td = document.createElement("td");
//   var txt = document.createTextNode("some value");
//   td.appendChild(txt);
//   tr.appendChild(td);

// }
// 1st td
var td = document.createElement("td");
var txt = document.createElement("input");
txt.setAttribute('type','text');
td.appendChild(txt);
tr.appendChild(td);
// 2nd td
var td = document.createElement("td");
var txt = document.createElement("input");
txt.setAttribute('type','text');
td.appendChild(txt);
tr.appendChild(td);
// 3rd td
var td = document.createElement("td");
var sel = document.createElement("select");
var opt = document.createElement("option");
opt.setAttribute('value','ddddddddddddd');
opt.text = "values vill be displayed here";
sel.appendChild(opt)
// txt.setAttribute('type','text');
td.appendChild(sel);
tr.appendChild(td);
// 4rth td
// <td>
// <a href=""><span style="font-size: 25px" class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
// <a href=""><span style="font-size: 25px" class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
// </a>

var td = document.createElement("td");
// var txt = document.createElement("input");
var ab = document.createElement("a");
ab.setAttribute('href','')
var cd = document.createElement("span")
cd.setAttribute('style','font-size:25px');
cd.setAttribute('class','glyphicon glyphicon-pencil')
ab.appendChild(cd);
td.appendChild(ab);

var ef = document.createElement("a");
ef.setAttribute('href','')
var gh = document.createElement("span")
gh.setAttribute('style','font-size:25px');
gh.setAttribute('class','glyphicon glyphicon-remove-circle')
ef.appendChild(gh);
td.appendChild(ef);



tr.appendChild(td);

// tr.appendChild(td);
table.appendChild(tr);
  }
  constructor() { }

  ngOnInit() {
  }

}
