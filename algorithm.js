'use strict';

var initArr = [] ,clearRule;
var m = 5;
var n = 5;
//种类5中，Math.floor(Math.random() * 5+1); 
// max - 期望的最大值
// min - 期望的最小值 
// parseInt(Math.random()*(max-min+1)+min,10);
// Math.floor(Math.random()*(max-min+1)+min);
for(i = 0;i<m;i++){
	initArr[i] = [];
	for(j = 0;j<n;j++){
		initArr[i][j] = Math.floor(Math.random() * 5+1);

	}
}
console.log(initArr);
//eg:
//3,2,2,3,2
//1,2,5,2,5
//3,3,3,1,5
//3,2,4,2,1
//5,4,5,1,3
//消除思路
//从右下角开始，每个元素与其上、左元素对比：不同，前进一个元素
//                                          相同，此方向继续加一对比：不同，前进一个元素
//                                                                    相同，消除，左上方元素填充，元素重排，触发局部对比机制：
//
//矩阵对比思路，算法？？？


//消除规则（简易版，无特效消除）
//横3消，竖3消横， 1分
//横4消，竖4消横， 3分
//横5消，竖5消横， 5分


 //局部对比机制
 //
 //
 //
 //
 //局部对比定位？？？
 //
 //
