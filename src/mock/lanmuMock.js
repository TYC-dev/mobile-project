import Mock from 'mockjs'
import apiPath from '../api/apipath'

const Random = Mock.Random

const produceLanmuData = function(){
    let lanmuData = []
    for(let i = 0; i < 10; i++){
        let newLanmuObject = {
            avatar: Random.dataImage('120x120', 'avatar'),
            name: Random.cname()
        }
        lanmuData.push( newLanmuObject )
    }
    return {
        lanmuData: lanmuData
    }
}

Mock.mock(apiPath.lanmuUrl, 'get', produceLanmuData)