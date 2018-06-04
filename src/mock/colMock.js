import apiPath from '../api/apipath'
import Mock from 'mockjs'

const Random = Mock.Random

const produceColData = function(){
    let colData = [];
    for(let i = 0; i < 20; i++){
        let newColObject = {
            colTitle: Random.csentence(6,10),
            colDetail: Random.csentence(25,40)
        }
        colData.push(newColObject)
    }
    return {
        colData: colData
    }
}


Mock.mock(apiPath.colUrl, 'get', produceColData)