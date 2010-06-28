/**
 * @param {Number} [start=0] >= 0
 * @param {Number} [end=element.length] >= 0
 */
Element.prototype.select = function select(start, end) {
	start = start || 0;
	if (arguments.length < 2) {
		end = this.textContent.length;
	} else {
		end = Math.min(end, this.textContent.length);
	}

	var range = document.createRange();
	var node = this.firstChild;

	if (node) {

		var i = start;
		var length;

		while (i > (length = node.textContent.length)) {
			i -= length;
			node = node.nextSibling;
		}

		var startNode;
		if (node.firstChild) {
			startNode = node.firstChild;
			while (startNode.firstChild) {
				startNode = startNode.firstChild;
			}
		} else {
			startNode = node;
		}

		range.setStart(startNode, i);

		var j = end - (start - i);
		while (j > (length = node.textContent.length)) {
			j -= length;
			node = node.nextSibling;
		}

		var endNode;
		if (node.firstChild) {
			endNode = node.firstChild;
			while (endNode.firstChild) {
				endNode = endNode.firstChild;
			}
		} else {
			endNode = node;
		}

		range.setEnd(endNode, j);

	} else {

		range.setStartBefore(this);
		range.setEndBefore(this);

	}

	var selection = getSelection();
	selection.removeAllRanges();
	selection.addRange(range);

	return this;
};
