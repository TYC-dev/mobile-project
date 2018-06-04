//mock出新闻的标题

import Mock from 'mockjs'
import apiPath from '../api/apipath'

const Random = Mock.Random;

const pruduceNewsTittleData = function(){
    let newsTittle = []
    for(let i = 0; i < 20; i++){
        let newTittleObject = {
            tittle: Random.csentence(5,20),
            sourceName: Random.cname(),
            date: Random.date()
        }
        newsTittle.push( newTittleObject )
    }
    return {
        newsTittle: newsTittle
    }
}

Mock.mock( apiPath.newsUrl, 'get', pruduceNewsTittleData)