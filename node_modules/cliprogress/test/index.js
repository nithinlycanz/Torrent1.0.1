var cliprogress = require('../lib/cliprogress');


var clipo = null;


exports['create'] = function (t) {
	clipo = new cliprogress({name:"tester",auto:true,hideProgress:false});
	t.equal(clipo.settings.name,"tester");
	t.done();
};

exports['progress'] = function (t) {
	var retval = clipo.progress("HELLO !");
	t.equal(retval,true);
	t.done();
};

exports['end'] = function (t) {
	var retval = clipo.end();
	t.equal(retval.length,2);
	t.done();
};