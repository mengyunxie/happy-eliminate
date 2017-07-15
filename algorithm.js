<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>key</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    </head>
    <body>
    </body>
<script type="text/javascript">
// var initArr = [] ,clearRule;
var ROW_MAX = 5;
var COL_MAX = 5;

//种类5中，Math.floor(Math.random() * 5+1); 
// max - 期望的最大值
// min - 期望的最小值 
// parseInt(Math.random()*(max-min+1)+min,10);
// Math.floor(Math.random()*(max-min+1)+min);
// for(i = 0;i<m;i++){
// 	initArr[i] = [];
// 	for(j = 0;j<n;j++){
// 		initArr[i][j] = Math.floor(Math.random() * 5+1);

// 	}
// }
// console.log(initArr);



//eg:
//3,2,2,3,2         , , ,3,2        5,5,2,3,2        5, ,2,3,2        5,3,2,3,2
//1,2,5,2,5        3,2,2,2,5        3,2,2,2,5        3, ,2,2,5        3,3,2,2,5
//3,3,3,1,5        1,2,5,1,5        1,2,5,5,5        1, ,5,1,5        1,4,5,1,5
//3,2,4,2,1        3,2,4,2,1        3,2,4,2,1        3,5,4,2,1        3,5,4,2,1
//5,4,5,1,3  ===>  5,4,5,1,3  ===>  5,4,5,1,3  ===>  5,4,5,1,3  ===>  5,4,5,1,3

//3,2,2,3,2         , , ,3,2        5,5,1,3,3        0,0,0,0,0        0,0,0,0,0
//1,2,5,2,5        3,2,2,2,5        3,2,2,2,2        0,1,1,1,0        0,1,1,1,0
//3,3,3,1,5        1,2,5,1,5        1,1,5,5,5        0,0,2,1,1        0,0,0,0,0
//3,2,4,2,1        3,2,4,2,1        3,2,5,2,1        0,0,1,0,0        0,1,1,1,1
//5,4,5,1,3  ===>  5,4,5,1,3  ===>  5,4,5,1,3  ===>  0,0,1,0,0  ===>  0,0,0,0,0

//0,1,2,1,0        0,2,1,1,0        0,0,1,0,0        0,0,1,0,0        1,1,1,0,1
//0,0,1,0,0        0,1,0,0,0        0,1,2,1,0        1,0,1,0,0        0,0,0,0,1
//0,0,1,0,0        0,1,0,0,0        0,0,1,0,0        1,0,2,1,1        0,0,0,0,1
//0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        1,0,1,0,0        0,0,0,0,0
//0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,1,0,0        0,0,0,0,0

//0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0
//0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0
//0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0
//0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0
//0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0        0,0,0,0,0

//消除思路
//N种图形，生成N份副表，横向比较，有3个相同，加一；竖列比较，有3个相同，加一；
//副表判断有2，特效图形
//       无2，横向相加，等3，3消，返回；等4，4消，返回；等5，5消，返回；
//           竖列相加，等3，3消，返回；等4，4消，返回；等5，5消，返回；
//
//从右下角开始，每个元素与其上、左元素对比：不同，前进一个元素
//                                          相同，此方向继续加一对比：不同，前进一个元素
//                                                                    相同，消除，左上方元素填充，元素重排，触发局部对比机制：
//
var initArr1 = [[3,2,2,3,2],
                [1,2,5,2,5],
                [3,1,3,1,5],
                [3,2,4,2,1],
                [5,4,5,1,3]];
var speci1 = [[0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0]];
var speci2 = [[0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0]];
var speci3 = [[0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0]];
var speci4 = [[0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0]];
var speci5 = [[0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0]];

function setSpeci(speci, row, col) {
    var theSpeci;
    switch (speci) {
        case 1:
            theSpeci = speci1;
            break;
        case 2:
            theSpeci = speci2;
            break;
        case 3:
            theSpeci = speci3;
            break;
        case 4:
            theSpeci = speci4;
            break;
        case 5:
            theSpeci = speci5;
            break;
    }
    theSpeci[row][col] += 1;
}

function diffAll(arrParams){

    var initArr = arrParams;

    for (var row = 0; row < ROW_MAX; row++) {
        for (var col = 0; col < COL_MAX - 2; col++) {
            if (initArr[row][col] == initArr[row][col + 1]) {
                if (initArr[row][col] == initArr[row][col + 2]) {
                    setSpeci(initArr[row][col], row, col);
                    setSpeci(initArr[row][col], row, col + 1);
                    setSpeci(initArr[row][col], row, col + 2);
                    if (col + 3 >= COL_MAX) {
                        continue;
                    }
                    if (initArr[row][col] == initArr[row][col + 3]) {
                        setSpeci(initArr[row][col], row, col + 3);
                        if (col + 4 >= COL_MAX) {
                            continue;
                        }
                        if (initArr[row][col] == initArr[row][col + 4]) {
                            setSpeci(initArr[row][col], row, col + 4);
                        }
                    }
                }
            }
        }
    }
    for (var col = 0; col < COL_MAX; col++) {
        for (var row = 0; row < ROW_MAX - 2; row++) {
            if (initArr[row][col] == initArr[row + 1][col]) {
                if (initArr[row][col] == initArr[row + 2][col]) {
                    setSpeci(initArr[row][col], row, col);
                    setSpeci(initArr[row][col], row + 1, col);
                    setSpeci(initArr[row][col], row + 2, col);
                    if (row + 3 >= ROW_MAX) {
                        continue;
                    }
                    if (initArr[row][col] == initArr[row + 3][col]) {
                        setSpeci(initArr[row][col], row + 3, col);
                        if (row + 4 >= ROW_MAX) {
                            continue;
                        }
                        if (initArr[row][col] == initArr[row + 4][col]) {
                            setSpeci(initArr[row][col], row+ 4, col);
                        }
                    }
                }
            }
        }
    }
}
diffAll(initArr1);
console.log(speci1);
console.log(speci2);
console.log(speci3);
console.log(speci4);
console.log(speci5);
console.log("speci5");


//矩阵对比思路，算法？？？
//思路一：元素对比判断
//第一圈：
//每个元素判断四个方位（右>下>左>上）是否有元素，无返回；
//有，判断是否相同
//

//
//思路二：图形对比判断
//按图形优先级判断，有存在消除，填补空缺，在重新。。。
//               无，下一个优先级图形判断。。。
//

//L形判断：
//右侧判断
//右一不同，右下L and 右上L : false，判断左侧。
//   相同，右二不同，右下L and 右上L : false，判断左侧。
//           相同，判断下 ，下一相同，下二相同，右下L : true;消除，填补空缺。重新全盘L形判断。
//                                    不同，右下L : false，判断上一，不同，右上L : false，判断左侧。
//                                                                相同，上二不同，右上L : false，判断左侧。
//                                                                         相同，右上L : true;消除，填补空缺。重新全盘L形判断;
//                           不同，右下L : false，判断上一，不同，右上L : false，判断左侧。
//                                                      相同，上二不同，右上L : false，判断左侧。
//                                                               相同，右上L : true;消除，填补空缺。重新全盘L形判断;
//

//左侧判断
//左一不同，左下L and 左上L : false，判断下一元素。
//   相同，左二不同，左下L and 左上L : false，判断下一元素。
//           相同，判断下 ，下一相同，下二相同，左下L : true;消除，填补空缺。重新全盘L形判断。
//                                    不同，左下L : false，判断上一，不同，左上L : false，判断下一元素。
//                                                                相同，上二不同，左上L : false，判断左侧。
//                                                                         相同，左上L : true;消除，填补空缺。重新全盘L形判断;
//                           不同，左下L : false，判断上一，不同，左上L : false，判断下一元素。
//                                                      相同，上二不同，左上L : false，判断下一元素。
//                                                               相同，左上L : true;消除，填补空缺。重新全盘L形判断;
//                            


//T形判断：
//
//

//横竖5判断：
//
//

//横竖4判断：
//
//

//横竖3判断：
//
//



//消除规则（简易版，无特效消除）
//横3消，竖3消， 1分，优先级4；
//横4消，竖4消， 3分，优先级3；
//横5消，竖5消， 5分，优先级2；
//T消，5消，7分，优先级1；
//L消，5消，7分，优先级0；


 //定位记录
 //程序主动发起比较判断，定位记录
 //交换事件触发，定位记录，优先级高

 //交换机制
 //对比周围是否可以交换，触发消除机制
 //

 //局部对比机制
 //
 //
 //
 //
</script>
</html>

