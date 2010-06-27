var selection = getSelection();


module("Element");
var just_text = document.getElementById("just_text");

test("Text: first character", function(){
	just_text.select(0, 1);
	equals(selection.toString(), "J");
});

test("Text: few characters", function(){
	just_text.select(0, 4);
	equals(selection.toString(), "Just");
	just_text.select(4, 5);
	equals(selection.toString(), " ");
	just_text.select(4, 10);
	equals(selection.toString(), " text.");
});

test("Text: all characters", function(){
	just_text.select(0, 10);
	equals(selection.toString(), "Just text.");
});

test("Text: more than all characters", function(){
	just_text.select(0, 11);
	equals(selection.toString(), "Just text.");
});


var text_within_element = document.getElementById("text_within_element");

test("Text within an element: first character", function(){
	text_within_element.select(0, 1);
	equals(selection.toString(), "T");
});

test("Text within an element: few characters", function(){
	text_within_element.select(7, 15);
	equals(selection.toString(), "thin an ");
});

test("Text within an element: all characters", function(){
	text_within_element.select(0, 22);
	equals(selection.toString(), "Text within an Element");
});


var text_before_element = document.getElementById("text_before_element");

test("Text before an element: first character", function(){
	text_before_element.select(0, 1);
	equals(selection.toString(), "T");
});

test("Text before an element: few characters", function(){
	text_before_element.select(0, 12);
	equals(selection.toString(), "Text before ");
	text_before_element.select(1, 2);
	equals(selection.toString(), "e");
	text_before_element.select(5, 14);
	equals(selection.toString(), "before an");
	text_before_element.select(15, 22);
	equals(selection.toString(), "Element");
});

test("Text before an element: all characters", function(){
	text_before_element.select(0, 22);
	equals(selection.toString(), "Text before an Element");
});


var element_before_text = document.getElementById("element_before_text");

test("An element before the text: first character", function(){
	element_before_text.select(0, 1);
	equals(selection.toString(), "S");
});

test("An element before the text: few characters", function(){
	element_before_text.select(0, 12);
	equals(selection.toString(), "Some Element");
	element_before_text.select(5, 19);
	equals(selection.toString(), "Element before");
});

test("Two elements", function(){
	var two_elements = document.getElementById("two_elements");
	two_elements.select(12, 35);
	equals(selection.toString(), "re bold and some Italic");
});

test("Zaphod Beeblebrox", function(){
	var quote = document.getElementById("quote");
	var string = "Beeblebrox the Second.";
	var startIndex = quote.textContent.indexOf(string);
	quote.select(startIndex, startIndex + string.length);
	equals(selection.toString(), string);
});
