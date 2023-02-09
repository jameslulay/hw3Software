var fs=require('fs');

test('test selectEvent',()=>{

	//Read the index.html file into a string
	var html=fs.readFileSync('public/index.html','utf8');
	expect(html).toEqual(expect.anything());//Any non null val is ok.
	
	//put the HTMl into a testing Dom and do a sanity check.
	document.body.innerHTML=html;
	const $ = require('jquery');
	expect($('h1').html()).toBe("Cheesecake Order Form");
	});
