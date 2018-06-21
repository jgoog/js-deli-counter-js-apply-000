var katzDeli =[];

function takeANumber(katzDeliLine,Name) {

<<<<<<< HEAD
   katzDeliLine.push(Name);
=======
   katzDeliLine.push(Name);  
>>>>>>> d64e1b0b940cbdef3e032b5305651af96fa170d9
   var placeInLine = katzDeliLine.length;
   var message = `Welcome, ${Name}. You are number ${placeInLine} in line.`
   return message
}

function nowServing(LineArray) {

  if (LineArray.length === 0) {
    return "There is nobody waiting to be served!"}
    else {
    var beingServed = LineArray[0];
    var message = "Currently serving " + beingServed +".";
    LineArray.shift();
    return message;
    }
}

function currentLine(LineArray) {
<<<<<<< HEAD

=======
  
>>>>>>> d64e1b0b940cbdef3e032b5305651af96fa170d9
  if (LineArray.length === 0) {
    return "The line is currently empty."
  }
  else {
    var listarray = [];
    for (let i=0; i<LineArray.length;i++) {
     var lineNo = i+1;
     var name = LineArray[i];
<<<<<<< HEAD
     listarray.push(`${lineNo}. ${name}`);
=======
     listarray.push(`${lineNo}. ${name}`);       
>>>>>>> d64e1b0b940cbdef3e032b5305651af96fa170d9
    }
    var message = listarray.join(', ');
    return `The line is currently: ${message}`;
  }
}
