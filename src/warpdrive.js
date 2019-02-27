function nave(){
	console.log("prueba");
	var clazz ={
	calcular: function(s,da,db,dc){

	var rp = (s*300)/100;
	var ol = 0;
	var i = 0;
	var data = {fa:null, fb:null, fc:null, time:0}	;


	while(true)
	{
		var flowA = this.flow(da,ol,s);
		console.log("A: "+flowA.f);

		var flowB = this.flow(db,ol,s);
		console.log("B: "+flowB.f);

		var flowC = this.flow(dc,ol,s);
		console.log("C: "+flowC.f);

		data.fa = flowA.f;
		data.fb = flowB.f;
		data.fc = flowC.f;

		console.log("data salida:"+data);

		if(null === flowA.f || null === flowB.f || null === flowC.f)
		{
			return data;
		}

		if (flowA.f + flowB.f + flowC.f >= rp)
		{
			break;
		}
		if(i >= 100)
		{
			break;
		}
		i++;
		ol +=10;
	}

	var j=0;
	var t=0;
	var ft = [flowA.time,flowB.time,flowC.time];
	ft.forEach(function(p){
		if (null === p){
			j++;
			return;
		}
		t += p;
	});
	data.time = t /(3-j);
	console.log("data calculate: "+data);
	return data;
	},

	flow: function(dt,ol,ls){
	var mx = 100;
	var data = {f:0, time:null};
		if(dt >= 100)
		{
			return data;
		}
		if(ls > 100)
		{
			ol= Math.abs(ls - mx)+ ol;
		}
		if(ls < 100)
		{
			mx=ls ;
		}
		data.time = Math.abs(ol-mx);
		data.f = Math.abs(dt-mx)+ol;
		if(ol == 0)
		{
			data.time = -1;
		}
		if(ol >= 99)
		{
			data.time=null;
			data.f=null;
		}
		console.log("data flow: "+data);
		return data;
	},	
	};
	return clazz;
}