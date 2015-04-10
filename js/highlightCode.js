function highlightCode(node, keywords) { //the name and fuction
  var text = node.textContent; //this makes the variable text
  node.textContent = ""; // Clear the node

  var match, pos = 0; //sets the pointer to position 0
  while (match = keywords.exec(text)) {  //starts the while loop. Matches text with keywords
    var before = text.slice(pos, match.index); //
    node.appendChild(document.createTextNode(before)); //creates node
    var strong = document.createElement("strong"); //
    strong.appendChild(document.createTextNode(match[0]));
    node.appendChild(strong);
    pos = keywords.lastIndex;
  }
  var after = text.slice(pos);
  node.appendChild(document.createTextNode(after));
}

