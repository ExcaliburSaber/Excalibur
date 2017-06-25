var data=new Array(
		"28.jpg",
		"29.jpg",
		"30.jpg",
		"31.jpg",
		"32.jpg",
		"33.jpg",
		"34.jpg",
		"34.jpg",
		"36.jpg",
		"37.jpg",
		"38.jpg",
		"39.jpg",
		"40.jpg",
		"41.jpg",
		"42.jpg",
		"43.jpg",
		"44.jpg",
		"45.jpg",
		"46.jpg",
		"47.jpg",
		"48.jpg",
		"49.jpg",
		"50.jpg",
		"51.jpg",
		"52.jpg",
		"53.jpg",
		"54.jpg",
		"55.jpg",
		"56.jpg",
		"57.jpg",
		"31.jpg",
		"32.jpg",
		"33.jpg",
		"34.jpg",
		"34.jpg",
		"36.jpg",
		"37.jpg",
		"38.jpg",
		"39.jpg",
		"40.jpg",
		"41.jpg",
		"42.jpg",
		"43.jpg",
		"44.jpg",
		"45.jpg",
		"46.jpg",
		"47.jpg",
		"48.jpg",
		"49.jpg",
		"50.jpg",
		"51.jpg",
		"52.jpg",
		"53.jpg",
		"54.jpg",

		);
	for(var i=0;i<data.length;i++){
		oParent=document.getElementById("main");
		var oBox=document.createElement('div');
		oBox.className="box";
		oParent.appendChild(oBox);
		var oPic=document.createElement('div');
		oPic.className="pic";
		oBox.appendChild(oPic);
		var oImg=document.createElement('img');
		oImg.src="images/"+data[i];
		oPic.appendChild(oImg);
	}



window.onload=function(){
	waterfall('main','box');
}
function waterfall(parent,pin){
	var oParent=document.getElementById(parent);//父级对象
	var aPin=getClassObj(oParent,pin);//获取储存块框pin的数组aPin
	var iPinw=aPin[0].offsetWidth;//一个块框pin的宽
	var num=Math.floor(document.documentElement.clientWidth/iPinw);//每行中能容纳的块框的个数
	oParent.style.cssText='width:'+iPinw*num+'px;margin:0 auto;';//设置父级居中

	var pinHArr=[];//用于储存每列中的所有块框相加的高度。
	for(var i=0;i<aPin.length;i++){//历遍每一个块框元素
		var pinH=aPin[i].offsetHeight;
		if(i<num){
			pinHArr[i]=pinH;//第一行中的num个块框pin先添加进数组pinHArr

		}else{
			var minH=Math.min.apply(null,pinHArr);
			var minHIndex=getminHIndex(pinHArr,minH);
			aPin[i].style.position='absolute';//设置绝对位置；
			aPin[i].style.top=minH+'px';
			aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
			//数组 最小高度元素的高+添加上的aPin[i]块框高
			pinHArr[minHIndex]+=aPin[i].offsetHeight;//更新添加了块框后的列高
		}

	}


}
function getClassObj(parent,className){
	var obj=parent.getElementsByTagName('*');//获取父级所有子集
	var pinS=[];//创建一个数组 用于收集子元素
	for(var i=0;i<obj.length;i++){//遍历子元素，判断类别，压入数组
		if(obj[i].className==className){
			pinS.push(obj[i]);
		}

	};
	return pinS;
}
/****
	*获取pin高度 的最小值的索引index
	****/
function getminHIndex(arr,minH){
	for(var i in arr){
		if(arr[i]==minH){
			return i;
		}
	}
}
