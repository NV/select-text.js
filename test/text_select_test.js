var selection = getSelection();

module("Text");
var text = document.getElementById("just_text").firstChild;
test("Select all", function(){
	text.select();
	equals(selection.toString(), "");
	text.select(0);
	equals(selection.toString(), "");
	text.select(0, 10);
	equals(selection.toString(), "Just text.");
	text.select(0, 42);
	equals(selection.toString(), "Just text.");
});

test("Select a part", function(){
	text.select(0, 4);
	equals(selection.toString(), "Just");
	text.select(5, 10);
	equals(selection.toString(), "text.");
	text.select(4, 5);
	equals(selection.toString(), " ");
});
