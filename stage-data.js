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
let STAGE_LEVEL_3 = {
    map : '{"points":[[7,3],[5,6],[7,9],[10,7],[11,2],[14,6],[16,3]],"lines":[{"point1":[7,3],"point2":[5,6]},{"point1":[5,6],"point2":[7,9]},{"point1":[10,7],"point2":[7,3]},{"point1":[10,7],"point2":[7,9]},{"point1":[11,2],"point2":[14,6]},{"point1":[14,6],"point2":[16,3]},{"point1":[16,3],"point2":[11,2]}]}',
    intersections : 4,
}
let STAGE_LEVEL_4 = {
    map : '{"points":[[8,4],[4,5],[8,6],[8,9],[10,6],[13,8],[11,5],[13,2],[10,4],[8,1]],"lines":[{"point1":[8,4],"point2":[4,5]},{"point1":[4,5],"point2":[8,6]},{"point1":[8,6],"point2":[8,9]},{"point1":[8,9],"point2":[10,6]},{"point1":[10,6],"point2":[13,8]},{"point1":[13,8],"point2":[11,5]},{"point1":[11,5],"point2":[13,2]},{"point1":[13,2],"point2":[10,4]},{"point1":[10,4],"point2":[8,1]},{"point1":[8,1],"point2":[8,4]}]}',
    intersections : 4,
}
let STAGE_DATA = [   
    STAGE_LEVEL_1,
    STAGE_LEVEL_2,
    STAGE_LEVEL_3,
    STAGE_LEVEL_4, 
]