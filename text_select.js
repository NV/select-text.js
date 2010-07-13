/**
 * @param {Number} [start=0] >= 0
 * @param {Number} [end=start] >= 0
 * @see http://github.com/NV/select-text.js
 */
Text.prototype.select = function select(start, end)
{
    start = start || 0;
    if (arguments.length < 2)
        end = start;
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
