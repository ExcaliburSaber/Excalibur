window.onload=function(){
	var picture=new Array(
		"24.jpg",
		"25.jpg",
		"26.jpg",
		"27.jpg",
		"28.jpg",
		"29.jpg",
		"30.jpg",
		"31.jpg",
		"32.jpg",
		"33.jpg",
		"34.jpg",
		"35.jpg",
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
		);
	waterfall('main','box');
	window.onscroll=function(){
		if(checkScrollSlide){
			var oParent=document.getElementById('main');
			//将数据块渲染到当前页面的尾部
			for(var i=0;i<picture.length;i++){
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="images/"+picture[i];
				oPic.appendChild(oImg);
			}
			waterfall("main","box");
		}
	}
}
function waterfall(parent,box){
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//console.log(oBoxs.length);
	var oBoxsW=oBoxs[0].offsetWidth;
	//console.log(oBoxsW);
	var cols=Math.floor(document.documentElement.clientWidth/oBoxsW||document.body.clientWidth/oBoxsW);
	//console.log(cols);
	//设置main的宽度和对齐方式
	oParent.style.cssText="width:"+oBoxsW*cols+'px;margin:0 auto';
	var hArr=[];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			//console.log(minH);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			//oBoxs[i].style.left=oBoxsW*index+'px';
			//第一种方法
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			//第二种方法
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
	//console.log(hArr);
}


function getByClass(parent,clsName){
	var boxArr=new Array(),
	oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
//检测是否具备加载数据块的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,box);
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;

}