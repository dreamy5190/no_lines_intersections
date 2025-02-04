
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function getGridPosition(gridCountH,gridCountV){
    // 把舞台横和竖分成mn分
    let countH = gridCountH ? gridCountH : 13; //横向格子数
    let countV = gridCountV ? gridCountV : 19;//竖向格子数
    let widthPercent = 0.84; //舞台占页面宽度的百分比
    // let heightPercent = 0.7;//舞台占页面高度的百分比
    let stageW = windowWidth * widthPercent;
    let gridWidth = stageW/(countH - 1);

    let stageH = gridWidth * countV;
    let points = [];
    let startX = (windowW - stageW)/2;
    let startY = (windowH - stageH)/2;
    // let gridWidth = stageW/(countH - 1);
    let gridHeight = gridWidth;//stageH/(countV - 1);
    for (let index = 0; index < countV; index++) {
        let y = startY + gridHeight * (index );
        let pointsH = [];
        for (let idx = 0; idx < countH; idx++) {
            let x = startX + gridWidth * (idx );            
            pointsH.push({
                x,
                y,
                width : gridWidth,
                height : gridWidth,
            })
        }      
        points.push(pointsH)
    }
    return points;
}