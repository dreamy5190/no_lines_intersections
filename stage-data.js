//关卡数据
let windowW = window.innerWidth;
let windowH = window.innerHeight
let centerX = windowW/2;
let centerY = windowH/2;

let STAGE_LEVEL_1 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 2, //初始化时，线段相交的数量，也就是用来控制关卡难度的，但是数量不能太接近线段数量，不然无法初始化
    //初始图形
    map : '{"points":[[4,2],[4,10],[9,2],[9,10],[14,2],[14,10]],"lines":[{"point1":[4,2],"point2":[4,10]},{"point1":[9,2],"point2":[9,10]},{"point1":[14,2],"point2":[14,10]}]}',
}
let STAGE_LEVEL_2 = {
    gridCountH : 13,
    gridCountV : 19,
    map : '{"points":[[4,2],[4,10],[11,10],[11,2]],"lines":[{"point1":[4,2],"point2":[4,10]},{"point1":[4,10],"point2":[11,10]},{"point1":[11,10],"point2":[11,2]},{"point1":[11,2],"point2":[4,2]}]}',
    intersections : 2,
}
let STAGE_LEVEL_3= {
    map : '{"points":[[2,6],[6,2],[7,7],[11,4],[7,9],[12,11]],"lines":[{"point1":[2,6],"point2":[6,2]},{"point1":[6,2],"point2":[7,7]},{"point1":[7,7],"point2":[2,6]},{"point1":[11,4],"point2":[7,9]},{"point1":[7,9],"point2":[12,11]},{"point1":[12,11],"point2":[11,4]}]}',
    gridCountH : 13,
    gridCountV : 19,
    intersections : 2,
}
let STAGE_LEVEL_4 = {
    gridCountH : 13,
    gridCountV : 19,
    map : '{"points":[[4,4],[4,8],[7,11],[11,11],[14,8],[14,4],[11,1],[7,1]],"lines":[{"point1":[4,4],"point2":[4,8]},{"point1":[4,8],"point2":[7,11]},{"point1":[7,11],"point2":[11,11]},{"point1":[11,11],"point2":[14,8]},{"point1":[14,8],"point2":[14,4]},{"point1":[14,4],"point2":[11,1]},{"point1":[11,1],"point2":[7,1]},{"point1":[7,1],"point2":[4,4]}]}',
    intersections : 2,
}
let STAGE_LEVEL_5 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 4,
    map : '{"points":[[8,4],[6,1],[12,2],[8,8],[6,11],[12,11],[9,6],[2,6],[6,4],[6,8]],"lines":[{"point1":[8,4],"point2":[6,1]},{"point1":[8,4],"point2":[12,2]},{"point1":[8,8],"point2":[6,11]},{"point1":[8,8],"point2":[12,11]},{"point1":[9,6],"point2":[12,2]},{"point1":[9,6],"point2":[12,11]},{"point1":[2,6],"point2":[6,4]},{"point1":[2,6],"point2":[6,8]},{"point1":[6,8],"point2":[6,11]},{"point1":[6,4],"point2":[6,1]}]}',
}
let STAGE_LEVEL_6 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 4,
    map : '{"points":[[2,6],[5,1],[10,1],[13,6],[10,11],[5,11],[5,8],[10,8],[5,4],[10,4]],"lines":[{"point1":[2,6],"point2":[5,1]},{"point1":[5,1],"point2":[10,1]},{"point1":[10,1],"point2":[13,6]},{"point1":[13,6],"point2":[10,11]},{"point1":[10,11],"point2":[5,11]},{"point1":[5,11],"point2":[2,6]},{"point1":[5,8],"point2":[10,8]},{"point1":[5,8],"point2":[5,4]},{"point1":[5,4],"point2":[10,4]},{"point1":[10,4],"point2":[10,8]}]}',
}
let STAGE_LEVEL_7 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 6,
    map : '{"points":[[2,6],[5,1],[10,1],[13,6],[10,11],[5,11],[5,8],[10,8],[5,4],[10,4]],"lines":[{"point1":[2,6],"point2":[5,1]},{"point1":[5,1],"point2":[10,1]},{"point1":[10,1],"point2":[13,6]},{"point1":[13,6],"point2":[10,11]},{"point1":[10,11],"point2":[5,11]},{"point1":[5,11],"point2":[2,6]},{"point1":[5,8],"point2":[10,8]},{"point1":[5,8],"point2":[5,4]},{"point1":[5,4],"point2":[10,4]},{"point1":[10,4],"point2":[10,8]},{"point1":[5,4],"point2":[10,1]},{"point1":[10,8],"point2":[5,11]},{"point1":[5,8],"point2":[2,6]},{"point1":[10,4],"point2":[13,6]}]}',
}
let STAGE_LEVEL_8 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 16,
    map : '{"points":[[0,12],[0,7],[3,12],[18,7],[18,12],[15,12],[18,0],[15,0],[0,0],[3,0],[0,5],[18,5],[5,2],[3,4],[3,8],[5,10],[15,4],[14,2],[13,10],[15,8]],"lines":[{"point1":[0,12],"point2":[0,7]},{"point1":[0,7],"point2":[3,12]},{"point1":[3,12],"point2":[0,12]},{"point1":[18,7],"point2":[18,12]},{"point1":[18,12],"point2":[15,12]},{"point1":[15,12],"point2":[18,7]},{"point1":[18,0],"point2":[15,0]},{"point1":[0,0],"point2":[3,0]},{"point1":[0,0],"point2":[0,5]},{"point1":[0,5],"point2":[3,0]},{"point1":[18,5],"point2":[18,0]},{"point1":[15,0],"point2":[18,5]},{"point1":[5,2],"point2":[3,4]},{"point1":[3,4],"point2":[3,8]},{"point1":[3,8],"point2":[5,10]},{"point1":[15,4],"point2":[14,2]},{"point1":[14,2],"point2":[5,2]},{"point1":[5,10],"point2":[13,10]},{"point1":[13,10],"point2":[15,8]},{"point1":[15,8],"point2":[15,4]}]}',
}
let STAGE_LEVEL_9 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 16,
    map : '{"points":[[4,4],[4,8],[7,11],[11,11],[14,8],[14,4],[11,1],[7,1],[6,3],[8,3],[6,5],[9,6],[6,7],[6,9],[8,9],[10,9],[12,9],[12,7],[10,3],[12,3],[12,5]],"lines":[{"point1":[4,4],"point2":[4,8]},{"point1":[4,8],"point2":[7,11]},{"point1":[7,11],"point2":[11,11]},{"point1":[11,11],"point2":[14,8]},{"point1":[14,8],"point2":[14,4]},{"point1":[14,4],"point2":[11,1]},{"point1":[11,1],"point2":[7,1]},{"point1":[7,1],"point2":[4,4]},{"point1":[6,3],"point2":[8,3]},{"point1":[6,3],"point2":[6,5]},{"point1":[6,5],"point2":[9,6]},{"point1":[9,6],"point2":[8,3]},{"point1":[6,7],"point2":[6,9]},{"point1":[6,9],"point2":[8,9]},{"point1":[8,9],"point2":[9,6]},{"point1":[9,6],"point2":[6,7]},{"point1":[10,9],"point2":[9,6]},{"point1":[12,9],"point2":[12,7]},{"point1":[12,9],"point2":[10,9]},{"point1":[12,7],"point2":[9,6]},{"point1":[10,3],"point2":[9,6]},{"point1":[10,3],"point2":[12,3]},{"point1":[12,5],"point2":[9,6]},{"point1":[12,3],"point2":[12,5]}]}',
}
let STAGE_LEVEL_10 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 20,
    map : '{"points":[[11,1],[11,4],[11,8],[11,11],[4,4],[7,4],[4,8],[7,8],[7,1],[8,1],[10,1],[14,8],[14,4],[4,5],[8,5],[4,7],[8,7],[8,11],[7,11],[10,11],[10,7],[14,7],[14,5],[10,5]],"lines":[{"point1":[11,1],"point2":[11,4]},{"point1":[11,8],"point2":[11,11]},{"point1":[4,4],"point2":[7,4]},{"point1":[4,8],"point2":[7,8]},{"point1":[7,1],"point2":[8,1]},{"point1":[7,1],"point2":[4,4]},{"point1":[7,1],"point2":[7,4]},{"point1":[11,1],"point2":[10,1]},{"point1":[10,1],"point2":[8,1]},{"point1":[14,8],"point2":[11,8]},{"point1":[14,8],"point2":[11,11]},{"point1":[14,4],"point2":[11,4]},{"point1":[14,4],"point2":[11,1]},{"point1":[4,4],"point2":[4,5]},{"point1":[4,5],"point2":[8,5]},{"point1":[8,5],"point2":[8,1]},{"point1":[4,5],"point2":[4,7]},{"point1":[4,7],"point2":[4,8]},{"point1":[4,7],"point2":[8,7]},{"point1":[8,7],"point2":[8,11]},{"point1":[8,11],"point2":[7,11]},{"point1":[7,11],"point2":[7,8]},{"point1":[4,8],"point2":[7,11]},{"point1":[8,11],"point2":[10,11]},{"point1":[10,11],"point2":[10,7]},{"point1":[10,7],"point2":[14,7]},{"point1":[14,7],"point2":[14,5]},{"point1":[14,5],"point2":[10,5]},{"point1":[10,5],"point2":[10,1]},{"point1":[14,4],"point2":[14,5]},{"point1":[14,7],"point2":[14,8]},{"point1":[11,11],"point2":[10,11]}]}',
}
let STAGE_LEVEL_11 = {
    gridCountH : 13,
    gridCountV : 19,
    map : '{"points":[[5,5],[5,7],[6,4],[8,4],[9,5],[8,8],[6,8],[4,1],[10,1],[10,11],[4,11],[2,6],[13,6],[7,6],[9,7],[8,2],[10,3],[6,2],[4,3],[6,10],[4,9],[8,10],[10,9]],"lines":[{"point1":[5,5],"point2":[5,7]},{"point1":[5,5],"point2":[6,4]},{"point1":[6,4],"point2":[8,4]},{"point1":[8,4],"point2":[9,5]},{"point1":[8,8],"point2":[6,8]},{"point1":[5,7],"point2":[6,8]},{"point1":[4,1],"point2":[10,1]},{"point1":[10,11],"point2":[4,11]},{"point1":[2,6],"point2":[4,11]},{"point1":[2,6],"point2":[4,1]},{"point1":[13,6],"point2":[10,11]},{"point1":[13,6],"point2":[10,1]},{"point1":[6,4],"point2":[7,6]},{"point1":[7,6],"point2":[8,4]},{"point1":[7,6],"point2":[6,8]},{"point1":[9,7],"point2":[8,8]},{"point1":[9,7],"point2":[9,5]},{"point1":[7,6],"point2":[8,8]},{"point1":[8,4],"point2":[8,2]},{"point1":[10,3],"point2":[8,4]},{"point1":[10,3],"point2":[8,2]},{"point1":[6,4],"point2":[6,2]},{"point1":[4,3],"point2":[6,2]},{"point1":[4,3],"point2":[6,4]},{"point1":[6,8],"point2":[6,10]},{"point1":[6,10],"point2":[4,9]},{"point1":[4,9],"point2":[6,8]},{"point1":[8,8],"point2":[8,10]},{"point1":[8,10],"point2":[10,9]},{"point1":[10,9],"point2":[8,8]}]}',
    intersections : 20,
}
let STAGE_LEVEL_12 = {
    gridCountH : 13,
    gridCountV : 19,
    intersections : 20,
    map : '{"points":[[4,4],[4,8],[7,11],[11,11],[14,8],[14,4],[11,1],[7,1],[7,5],[7,4],[11,5],[11,7],[7,7],[11,4],[7,8],[11,8],[5,5],[6,5],[6,3],[12,3],[13,5],[12,5],[13,7],[12,7],[12,9],[6,9],[6,7],[5,7]],"lines":[{"point1":[4,4],"point2":[4,8]},{"point1":[4,8],"point2":[7,11]},{"point1":[7,11],"point2":[11,11]},{"point1":[11,11],"point2":[14,8]},{"point1":[14,8],"point2":[14,4]},{"point1":[14,4],"point2":[11,1]},{"point1":[11,1],"point2":[7,1]},{"point1":[7,1],"point2":[4,4]},{"point1":[7,5],"point2":[7,4]},{"point1":[11,5],"point2":[7,5]},{"point1":[11,7],"point2":[7,7]},{"point1":[11,4],"point2":[7,4]},{"point1":[11,4],"point2":[11,5]},{"point1":[7,7],"point2":[7,8]},{"point1":[7,8],"point2":[11,8]},{"point1":[11,8],"point2":[11,7]},{"point1":[5,5],"point2":[6,5]},{"point1":[6,5],"point2":[6,3]},{"point1":[6,3],"point2":[12,3]},{"point1":[13,5],"point2":[12,5]},{"point1":[12,5],"point2":[12,3]},{"point1":[12,5],"point2":[11,5]},{"point1":[13,7],"point2":[12,7]},{"point1":[11,7],"point2":[12,7]},{"point1":[13,5],"point2":[13,7]},{"point1":[12,7],"point2":[12,9]},{"point1":[12,9],"point2":[6,9]},{"point1":[6,9],"point2":[6,7]},{"point1":[6,7],"point2":[5,7]},{"point1":[5,7],"point2":[5,5]},{"point1":[7,5],"point2":[6,5]},{"point1":[7,7],"point2":[6,7]}]}',
}
let STAGE_LEVEL_13 = {
    map : '{"points":[[0,4],[4,4],[5,4],[5,5],[5,6],[4,6],[4,5],[0,2],[18,2],[18,4],[15,4],[15,5],[15,6],[14,6],[14,5],[14,4],[4,8],[4,9],[4,10],[5,10],[5,9],[5,8],[0,10],[0,12],[18,12],[18,10],[15,10],[15,9],[15,8],[14,8],[14,9],[14,10],[7,5],[7,6],[9,6],[9,8],[7,8],[7,9],[12,9],[12,8],[10,8],[10,6],[12,6],[12,5]],"lines":[{"point1":[0,4],"point2":[4,4]},{"point1":[5,4],"point2":[4,4]},{"point1":[5,4],"point2":[5,5]},{"point1":[5,5],"point2":[5,6]},{"point1":[5,6],"point2":[4,6]},{"point1":[4,6],"point2":[4,5]},{"point1":[4,5],"point2":[4,4]},{"point1":[0,2],"point2":[0,4]},{"point1":[0,2],"point2":[18,2]},{"point1":[18,2],"point2":[18,4]},{"point1":[18,4],"point2":[15,4]},{"point1":[15,4],"point2":[15,5]},{"point1":[15,5],"point2":[15,6]},{"point1":[15,6],"point2":[14,6]},{"point1":[14,6],"point2":[14,5]},{"point1":[14,5],"point2":[14,4]},{"point1":[14,4],"point2":[15,4]},{"point1":[14,4],"point2":[5,4]},{"point1":[4,8],"point2":[4,9]},{"point1":[4,9],"point2":[4,10]},{"point1":[4,10],"point2":[5,10]},{"point1":[5,10],"point2":[5,9]},{"point1":[5,9],"point2":[5,8]},{"point1":[5,8],"point2":[4,8]},{"point1":[4,10],"point2":[0,10]},{"point1":[0,10],"point2":[0,12]},{"point1":[0,12],"point2":[18,12]},{"point1":[18,12],"point2":[18,10]},{"point1":[18,10],"point2":[15,10]},{"point1":[15,10],"point2":[15,9]},{"point1":[15,9],"point2":[15,8]},{"point1":[15,8],"point2":[14,8]},{"point1":[14,8],"point2":[14,9]},{"point1":[14,9],"point2":[14,10]},{"point1":[14,10],"point2":[5,10]},{"point1":[7,5],"point2":[7,6]},{"point1":[7,6],"point2":[9,6]},{"point1":[9,6],"point2":[9,8]},{"point1":[7,8],"point2":[7,9]},{"point1":[7,9],"point2":[12,9]},{"point1":[9,8],"point2":[7,8]},{"point1":[12,9],"point2":[12,8]},{"point1":[12,8],"point2":[10,8]},{"point1":[10,8],"point2":[10,6]},{"point1":[10,6],"point2":[12,6]},{"point1":[12,6],"point2":[12,5]},{"point1":[12,5],"point2":[7,5]}]}',
    gridCountH : 13,
    gridCountV : 19,
    intersections : 24,
}
let STAGE_LEVEL_14 = {
    map : '{"points":[[2,4],[2,8],[5,11],[9,11],[12,8],[12,4],[9,1],[5,1],[3,4],[4,4],[4,5],[4,3],[5,3],[5,4],[5,5],[4,8],[3,8],[4,9],[4,7],[5,7],[5,8],[5,9],[6,4],[6,3],[6,5],[6,7],[6,8],[6,9],[7,3],[7,4],[7,5],[7,8],[7,9],[7,7],[8,4],[8,3],[8,5],[9,4],[9,3],[9,5],[10,5],[10,3],[8,7],[8,8],[8,9],[9,7],[9,8],[9,9],[10,9],[10,7]],"lines":[{"point1":[2,4],"point2":[2,8]},{"point1":[2,8],"point2":[5,11]},{"point1":[5,11],"point2":[9,11]},{"point1":[12,8],"point2":[9,11]},{"point1":[12,8],"point2":[12,4]},{"point1":[12,4],"point2":[9,1]},{"point1":[9,1],"point2":[5,1]},{"point1":[5,1],"point2":[2,4]},{"point1":[3,4],"point2":[4,4]},{"point1":[4,4],"point2":[4,5]},{"point1":[4,4],"point2":[4,3]},{"point1":[5,3],"point2":[5,4]},{"point1":[5,4],"point2":[5,5]},{"point1":[5,4],"point2":[4,4]},{"point1":[4,8],"point2":[3,8]},{"point1":[4,9],"point2":[4,8]},{"point1":[4,8],"point2":[4,7]},{"point1":[5,7],"point2":[5,8]},{"point1":[5,8],"point2":[5,9]},{"point1":[5,4],"point2":[6,4]},{"point1":[6,3],"point2":[6,4]},{"point1":[6,4],"point2":[6,5]},{"point1":[6,7],"point2":[6,8]},{"point1":[6,8],"point2":[6,9]},{"point1":[6,8],"point2":[5,8]},{"point1":[5,8],"point2":[4,8]},{"point1":[7,3],"point2":[6,3]},{"point1":[7,3],"point2":[7,4]},{"point1":[7,4],"point2":[7,5]},{"point1":[7,5],"point2":[6,5]},{"point1":[7,8],"point2":[7,9]},{"point1":[7,9],"point2":[6,9]},{"point1":[7,7],"point2":[6,7]},{"point1":[7,7],"point2":[7,8]},{"point1":[7,4],"point2":[8,4]},{"point1":[8,3],"point2":[8,4]},{"point1":[8,4],"point2":[8,5]},{"point1":[8,4],"point2":[9,4]},{"point1":[9,3],"point2":[9,4]},{"point1":[9,4],"point2":[9,5]},{"point1":[9,5],"point2":[10,5]},{"point1":[10,5],"point2":[10,3]},{"point1":[10,3],"point2":[9,3]},{"point1":[8,7],"point2":[8,8]},{"point1":[8,8],"point2":[8,9]},{"point1":[8,8],"point2":[7,8]},{"point1":[9,7],"point2":[9,8]},{"point1":[9,9],"point2":[10,9]},{"point1":[10,7],"point2":[9,7]},{"point1":[10,7],"point2":[10,9]},{"point1":[9,9],"point2":[9,8]},{"point1":[9,8],"point2":[8,8]}]}',
    gridCountH : 13,
    gridCountV : 19,
    intersections : 24,
}
let STAGE_DATA = [
    STAGE_LEVEL_1,
    STAGE_LEVEL_2,
    STAGE_LEVEL_3,
    STAGE_LEVEL_4,
    STAGE_LEVEL_5,
    STAGE_LEVEL_6,
    STAGE_LEVEL_7,
    STAGE_LEVEL_8,
    STAGE_LEVEL_9,
    STAGE_LEVEL_10,
    STAGE_LEVEL_11,
    STAGE_LEVEL_12,
    STAGE_LEVEL_13,
    STAGE_LEVEL_14,
    // STAGE_LEVEL_4,  //0
    // STAGE_LEVEL_1,  //1
    // STAGE_LEVEL_2,  //2
    // STAGE_LEVEL_8,  //3
    // STAGE_LEVEL_5,  //4
    // STAGE_LEVEL_6,  //5
    // STAGE_LEVEL_9,  //6
    // STAGE_LEVEL_7,  //7
    // STAGE_LEVEL_10, //8    
    // STAGE_LEVEL_11, //9
]