String.prototype.endsWith = function (string) {
	var index = arguments.length < 2 ? this.length : arguments[1];
	var foundIndex = this.indexOf(string);
	return foundIndex !== -1 && foundIndex === index - string.length;
};
