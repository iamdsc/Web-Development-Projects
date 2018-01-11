$(".btn").on("click",function()
{
	var r = Number($(".btn-default").attr('id')[1]);
	var c = Number($(".btn-default").attr('id')[3]);
	var i = $(this).attr('id');
	if(i==="r"+(r-1)+"c"+c || i==="r"+r+"c"+(c-1) || i==="r"+(r+1)+"c"+c || i ==="r"+r+"c"+(c+1))
	{ 
		var value = $(this).text();
		$(".btn-default").addClass("btn-info");
		$(".btn-default").text(value);
		$(".btn-default").removeClass("btn-default")
		$(this).removeClass("btn-info");
		$(this).addClass("btn-default");
		$(this).text("");
	}
});

