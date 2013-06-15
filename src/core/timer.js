JSM.Timer = function ()
{
	this.start = 0;
	this.stop = 0;
};

JSM.Timer.prototype =
{
	Start : function ()
	{
		var date = new Date ();
		this.start = date.getTime ();
	},

	Stop : function ()
	{
		var date = new Date ();
		this.end = date.getTime ();
	},
	
	Result : function ()
	{
		return (this.end - this.start);
	}
};
