/**
 * @param {Number} [start=0] >= 0
 * @param {Number} [end=element.length] >= 0
 */
Text.prototype.select = function select(start, end)
{
    start = start || 0;
    if (arguments.length < 2)
        end = this.textContent.length;
    else
        end = Math.min(end, this.textContent.length);

    var range = document.createRange();
    range.setStart(this, start);
    range.setEnd(this, end);
    var selection = getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    return this;
};
