//关卡数据
let windowW = window.innerWidth;
let windowH = window.innerHeight
let centerX = windowW/2;
let centerY = windowH/2;

let STAGE_LEVEL_1 = {
    map : '{"points":[[6,3],[6,8],[11,8],[11,3]],"lines":[{"point1":[6,3],"point2":[6,8]},{"point1":[6,8],"point2":[11,8]},{"point1":[11,8],"point2":[11,3]},{"point1":[11,3],"point2":[6,3]}]}',
    intersections : 2, //初始化时，线段相交的数量，也就是用来控制关卡难度的，但是数量不能太接近线段数量，不然无法初始化
}
let STAGE_LEVEL_2 = {
    map : '{"points":[[5,3],[3,6],[5,9],[9,9],[11,6],[9,3]],"lines":[{"point1":[5,3],"point2":[3,6]},{"point1":[3,6],"point2":[5,9]},{"point1":[5,9],"point2":[9,9]},{"point1":[9,9],"point2":[11,6]},{"point1":[11,6],"point2":[9,3]},{"point1":[9,3],"point2":[5,3]}]}',
    intersections : 3,
}
let STAGE_LEVEL_4 = {
    map : '{"points":[[5,3],[5,8],[9,3],[9,8],[13,3],[13,8]],"lines":[{"point1":[5,3],"point2":[5,8]},{"point1":[9,3],"point2":[9,8]},{"point1":[13,3],"point2":[13,8]}]}',
    intersections : 2,
}
let STAGE_LEVEL_5 = {
    intersections : 4,
    map : '{"points":[[4,1],[4,10],[13,10],[13,1],[10,7],[8,3],[6,6]],"lines":[{"point1":[4,1],"point2":[4,10]},{"point1":[4,10],"point2":[13,10]},{"point1":[13,10],"point2":[13,1]},{"point1":[13,1],"point2":[4,1]},{"point1":[10,7],"point2":[8,3]},{"point1":[8,3],"point2":[6,6]},{"point1":[6,6],"point2":[10,7]},{"point1":[13,1],"point2":[10,7]},{"point1":[8,3],"point2":[4,1]},{"point1":[6,6],"point2":[4,10]}]}',
}
let STAGE_LEVEL_6 = {
    intersections : 4,
    map : '{"points":[[6,0],[2,6],[6,11],[13,11],[13,0],[7,8],[7,3],[17,6],[12,8],[12,3]],"lines":[{"point1":[6,0],"point2":[2,6]},{"point1":[2,6],"point2":[6,11]},{"point1":[6,11],"point2":[13,11]},{"point1":[13,0],"point2":[6,0]},{"point1":[7,8],"point2":[7,3]},{"point1":[7,8],"point2":[13,11]},{"point1":[7,3],"point2":[2,6]},{"point1":[17,6],"point2":[13,11]},{"point1":[17,6],"point2":[13,0]},{"point1":[7,8],"point2":[12,8]},{"point1":[12,8],"point2":[12,3]},{"point1":[12,3],"point2":[7,3]},{"point1":[12,3],"point2":[6,0]},{"point1":[12,8],"point2":[17,6]}]}',
}
let STAGE_LEVEL_7 = {
    intersections : 14,
    map : '{"points":[[4,1],[4,4],[4,7],[4,10],[7,10],[10,10],[13,10],[16,10],[16,7],[16,4],[16,1],[13,1],[10,1],[7,1],[7,4],[7,7],[10,7],[13,7],[13,4],[10,4]],"lines":[{"point1":[4,1],"point2":[4,4]},{"point1":[4,4],"point2":[4,7]},{"point1":[4,7],"point2":[4,10]},{"point1":[4,10],"point2":[7,10]},{"point1":[7,10],"point2":[10,10]},{"point1":[10,10],"point2":[13,10]},{"point1":[13,10],"point2":[16,10]},{"point1":[16,10],"point2":[16,7]},{"point1":[16,7],"point2":[16,4]},{"point1":[16,4],"point2":[16,1]},{"point1":[16,1],"point2":[13,1]},{"point1":[13,1],"point2":[10,1]},{"point1":[10,1],"point2":[7,1]},{"point1":[7,1],"point2":[4,1]},{"point1":[4,4],"point2":[7,4]},{"point1":[4,7],"point2":[7,7]},{"point1":[7,7],"point2":[7,10]},{"point1":[10,7],"point2":[7,7]},{"point1":[13,7],"point2":[10,7]},{"point1":[16,7],"point2":[13,7]},{"point1":[16,4],"point2":[13,4]},{"point1":[13,4],"point2":[10,4]},{"point1":[10,4],"point2":[7,4]},{"point1":[7,4],"point2":[7,1]},{"point1":[7,4],"point2":[7,7]},{"point1":[10,7],"point2":[10,10]},{"point1":[13,7],"point2":[13,10]},{"point1":[13,4],"point2":[13,7]},{"point1":[10,7],"point2":[10,4]},{"point1":[10,4],"point2":[10,1]},{"point1":[13,1],"point2":[13,4]}]}',
}
let STAGE_LEVEL_8 = {
   intersections : 8,
   map : '{"points":[[7,6],[5,8],[5,10],[8,11],[8,1],[5,2],[5,4],[11,10],[14,8],[16,6],[11,2],[14,4]],"lines":[{"point1":[7,6],"point2":[5,8]},{"point1":[5,8],"point2":[5,10]},{"point1":[5,10],"point2":[8,11]},{"point1":[8,1],"point2":[5,2]},{"point1":[5,2],"point2":[5,4]},{"point1":[5,4],"point2":[7,6]},{"point1":[8,11],"point2":[11,10]},{"point1":[11,10],"point2":[14,8]},{"point1":[14,8],"point2":[16,6]},{"point1":[8,1],"point2":[11,2]},{"point1":[11,2],"point2":[14,4]},{"point1":[14,4],"point2":[16,6]}]}',
}
let STAGE_LEVEL_9 = {
    intersections : 16,
    map : '{"points":[[17,8],[14,11],[7,11],[4,8],[4,3],[7,0],[14,0],[17,3],[7,4],[7,7],[9,9],[9,2],[12,2],[14,4],[14,7],[12,9]],"lines":[{"point1":[17,8],"point2":[14,11]},{"point1":[14,11],"point2":[7,11]},{"point1":[7,11],"point2":[4,8]},{"point1":[4,8],"point2":[4,3]},{"point1":[4,3],"point2":[7,0]},{"point1":[7,0],"point2":[14,0]},{"point1":[14,0],"point2":[17,3]},{"point1":[17,3],"point2":[17,8]},{"point1":[7,4],"point2":[7,7]},{"point1":[7,7],"point2":[9,9]},{"point1":[9,2],"point2":[7,4]},{"point1":[9,2],"point2":[12,2]},{"point1":[12,2],"point2":[14,4]},{"point1":[14,4],"point2":[14,7]},{"point1":[14,7],"point2":[12,9]},{"point1":[12,9],"point2":[9,9]}]}',
}
let STAGE_LEVEL_10 = {
    intersections : 20,
    map : '{"points":[[4,1],[4,4],[4,7],[4,10],[7,10],[10,10],[13,10],[16,10],[16,7],[16,4],[16,1],[13,1],[10,1],[7,1],[13,4],[10,4],[10,7]],"lines":[{"point1":[4,1],"point2":[4,4]},{"point1":[4,4],"point2":[4,7]},{"point1":[4,7],"point2":[4,10]},{"point1":[4,10],"point2":[7,10]},{"point1":[7,10],"point2":[10,10]},{"point1":[10,10],"point2":[13,10]},{"point1":[13,10],"point2":[16,10]},{"point1":[16,10],"point2":[16,7]},{"point1":[16,7],"point2":[16,4]},{"point1":[16,4],"point2":[16,1]},{"point1":[16,1],"point2":[13,1]},{"point1":[13,1],"point2":[10,1]},{"point1":[10,1],"point2":[7,1]},{"point1":[7,1],"point2":[4,1]},{"point1":[16,4],"point2":[13,4]},{"point1":[13,4],"point2":[10,4]},{"point1":[10,7],"point2":[10,10]},{"point1":[10,7],"point2":[10,4]},{"point1":[10,4],"point2":[10,1]},{"point1":[10,4],"point2":[4,4]},{"point1":[10,7],"point2":[4,7]},{"point1":[16,7],"point2":[10,7]},{"point1":[16,1],"point2":[10,4]},{"point1":[10,7],"point2":[4,10]},{"point1":[4,1],"point2":[10,4]},{"point1":[10,7],"point2":[16,10]},{"point1":[16,4],"point2":[10,7]},{"point1":[10,7],"point2":[4,4]}]}',
}
let STAGE_LEVEL_11 = {
    map : '{"points":[[17,8],[14,11],[7,11],[4,8],[4,3],[7,0],[14,0],[17,3],[7,4],[7,7],[9,9],[9,2],[12,2],[14,4],[14,7],[12,9]],"lines":[{"point1":[17,8],"point2":[14,11]},{"point1":[14,11],"point2":[7,11]},{"point1":[7,11],"point2":[4,8]},{"point1":[4,8],"point2":[4,3]},{"point1":[4,3],"point2":[7,0]},{"point1":[7,0],"point2":[14,0]},{"point1":[14,0],"point2":[17,3]},{"point1":[17,3],"point2":[17,8]},{"point1":[7,4],"point2":[7,7]},{"point1":[7,7],"point2":[9,9]},{"point1":[9,2],"point2":[7,4]},{"point1":[9,2],"point2":[12,2]},{"point1":[12,2],"point2":[14,4]},{"point1":[14,4],"point2":[14,7]},{"point1":[14,7],"point2":[12,9]},{"point1":[12,9],"point2":[9,9]},{"point1":[7,7],"point2":[4,8]},{"point1":[7,4],"point2":[4,3]},{"point1":[9,2],"point2":[7,0]},{"point1":[12,2],"point2":[14,0]},{"point1":[14,4],"point2":[17,3]},{"point1":[14,7],"point2":[17,8]},{"point1":[12,9],"point2":[14,11]},{"point1":[9,9],"point2":[7,11]}]}',
    intersections : 20,
}
let STAGE_DATA = [
    STAGE_LEVEL_4,  //0
    STAGE_LEVEL_1,  //1
    STAGE_LEVEL_2,  //2
    STAGE_LEVEL_8,  //3
    STAGE_LEVEL_5,  //4
    STAGE_LEVEL_6,  //5
    STAGE_LEVEL_9,  //6
    STAGE_LEVEL_7,  //7
    STAGE_LEVEL_10, //8    
    STAGE_LEVEL_11, //9
]