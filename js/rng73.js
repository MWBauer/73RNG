var value;
document.writeln("<table>");
document.writeln("<caption>Random Numbers</caption><tr>");
for (var i = 1; i <= 20; i++) {
  value=Math.floor(1 + Math.random() * 6);
  document.writeln("<td>" + value + "</td>");
  if (i % 5 == 0 && i != 20)
    document.writeln("</tr><tr>");
}
console.log("</tr></table>");

//re-write by M. Dayah
/*var value;
var table = document.createElement("table");

for (var i = 1; i <= 4; i++) {
  var row = document.createElement("tr");
  for (var j = 1; j <= 5; j++) {
    value = Math.floor(1 + Math.random() * 6);
    var cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

var caption = document.createElement("caption");
caption.textContent = "Random Numbers";
table.appendChild(caption);

document.body.appendChild(table);
*/