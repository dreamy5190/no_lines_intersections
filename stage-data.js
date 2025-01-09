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
    map : '{"points":[[6,0],[2,6],[6,11],[13,11],[13,0],[7,3],[10,3],[10,8],[7,8]],"lines":[{"point1":[6,0],"point2":[2,6]},{"point1":[2,6],"point2":[6,11]},{"point1":[6,11],"point2":[13,11]},{"point1":[13,11],"point2":[13,0]},{"point1":[13,0],"point2":[6,0]},{"point1":[7,3],"point2":[10,3]},{"point1":[10,3],"point2":[10,8]},{"point1":[10,8],"point2":[7,8]},{"point1":[7,8],"point2":[7,3]},{"point1":[13,0],"point2":[10,8]},{"point1":[7,8],"point2":[13,11]},{"point1":[6,0],"point2":[10,3]},{"point1":[7,3],"point2":[2,6]}]}',
}
let STAGE_LEVEL_7 = {
    intersections : 28,
    map : '{"points":[[4,1],[4,4],[4,7],[4,10],[7,10],[10,10],[13,10],[16,10],[16,7],[16,4],[16,1],[13,1],[10,1],[7,1],[7,4],[7,7],[10,7],[13,7],[13,4],[10,4]],"lines":[{"point1":[4,1],"point2":[4,4]},{"point1":[4,4],"point2":[4,7]},{"point1":[4,7],"point2":[4,10]},{"point1":[4,10],"point2":[7,10]},{"point1":[7,10],"point2":[10,10]},{"point1":[10,10],"point2":[13,10]},{"point1":[13,10],"point2":[16,10]},{"point1":[16,10],"point2":[16,7]},{"point1":[16,7],"point2":[16,4]},{"point1":[16,4],"point2":[16,1]},{"point1":[16,1],"point2":[13,1]},{"point1":[13,1],"point2":[10,1]},{"point1":[10,1],"point2":[7,1]},{"point1":[7,1],"point2":[4,1]},{"point1":[4,4],"point2":[7,4]},{"point1":[4,7],"point2":[7,7]},{"point1":[7,7],"point2":[7,10]},{"point1":[10,7],"point2":[7,7]},{"point1":[13,7],"point2":[10,7]},{"point1":[16,7],"point2":[13,7]},{"point1":[16,4],"point2":[13,4]},{"point1":[13,4],"point2":[10,4]},{"point1":[10,4],"point2":[7,4]},{"point1":[7,4],"point2":[7,1]},{"point1":[7,4],"point2":[7,7]},{"point1":[10,7],"point2":[10,10]},{"point1":[13,7],"point2":[13,10]},{"point1":[13,4],"point2":[13,7]},{"point1":[10,7],"point2":[10,4]},{"point1":[10,4],"point2":[10,1]},{"point1":[13,1],"point2":[13,4]}]}',
}
let STAGE_LEVEL_8 = {
    intersections : 8,
    map : '{"points":[[7,6],[5,8],[5,10],[8,11],[11,11],[13,9],[16,6],[13,3],[11,1],[8,1],[5,2],[5,4]],"lines":[{"point1":[7,6],"point2":[5,8]},{"point1":[5,8],"point2":[5,10]},{"point1":[5,10],"point2":[8,11]},{"point1":[8,11],"point2":[11,11]},{"point1":[11,11],"point2":[13,9]},{"point1":[13,9],"point2":[16,6]},{"point1":[16,6],"point2":[13,3]},{"point1":[13,3],"point2":[11,1]},{"point1":[11,1],"point2":[8,1]},{"point1":[8,1],"point2":[5,2]},{"point1":[5,2],"point2":[5,4]},{"point1":[5,4],"point2":[7,6]}]}',
}
let STAGE_LEVEL_3 = {
    map : '{"points":[[2,5],[6,3],[6,7],[7,5],[10,2],[10,8],[11,5],[15,1],[15,5],[15,9],[21,3],[21,7]],"lines":[{"point1":[2,5],"point2":[6,3]},{"point1":[6,3],"point2":[6,7]},{"point1":[6,7],"point2":[2,5]},{"point1":[7,5],"point2":[10,2]},{"point1":[10,2],"point2":[10,8]},{"point1":[10,8],"point2":[7,5]},{"point1":[11,5],"point2":[15,1]},{"point1":[15,1],"point2":[15,5]},{"point1":[15,5],"point2":[15,9]},{"point1":[15,9],"point2":[11,5]},{"point1":[21,3],"point2":[21,7]},{"point1":[21,7],"point2":[15,5]},{"point1":[15,5],"point2":[21,3]}]}',
    intersections : 10,
}
let STAGE_LEVEL_9 = {
    map : '{"points":[[10,0],[8,1],[6,4],[6,7],[8,10],[10,11],[13,11],[15,10],[17,7],[17,4],[16,1],[14,0],[10,3],[9,4],[9,6],[10,7],[12,7],[13,6],[13,4],[12,3]],"lines":[{"point1":[10,0],"point2":[8,1]},{"point1":[8,1],"point2":[6,4]},{"point1":[6,4],"point2":[6,7]},{"point1":[6,7],"point2":[8,10]},{"point1":[8,10],"point2":[10,11]},{"point1":[10,11],"point2":[13,11]},{"point1":[13,11],"point2":[15,10]},{"point1":[15,10],"point2":[17,7]},{"point1":[17,7],"point2":[17,4]},{"point1":[17,4],"point2":[16,1]},{"point1":[16,1],"point2":[14,0]},{"point1":[14,0],"point2":[10,0]},{"point1":[10,3],"point2":[9,4]},{"point1":[9,4],"point2":[9,6]},{"point1":[9,6],"point2":[10,7]},{"point1":[10,7],"point2":[12,7]},{"point1":[12,7],"point2":[13,6]},{"point1":[13,6],"point2":[13,4]},{"point1":[13,4],"point2":[12,3]},{"point1":[12,3],"point2":[10,3]}]}',
    intersections : 16,
}
let STAGE_DATA = [
    STAGE_LEVEL_4,   
    STAGE_LEVEL_1,
    STAGE_LEVEL_2,    
    STAGE_LEVEL_8,  
    STAGE_LEVEL_5,
    STAGE_LEVEL_6,
    STAGE_LEVEL_7,
    STAGE_LEVEL_3,
    STAGE_LEVEL_9
]