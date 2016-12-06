var fs = require('fs');
var esformatter = require('esformatter');
esformatter.register(require('esformatter-jsx'));

var fileList = [];

process.argv.forEach(function (val, index, array){
	if(index > 1){
		fileList.push(val);
	}
});

if(fileList.length === 0){
	console.error("no file name specified");
	process.exit(1);
}

console.log("Processing [" + fileList.length + "]");
fileList.forEach(function (filename, index){
	var str = fs.readFileSync(filename).toString();
	var output = esformatter.format(str);
	fs.writeFileSync(filename, output);
	var fileNo = index + 1; 
	console.log("Complete [" + fileNo + "/"  + fileList.length + "]");

});

console.log("Done");
