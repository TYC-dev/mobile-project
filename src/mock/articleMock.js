import Mock from 'mockjs'
import apiPath from '../api/apipath'

const Random = Mock.Random

const produceArticleData = function(){
    let articleData = [];
    for(let i = 0; i < 50; i++){
        let newArticleObject = {
            title: Random.csentence(5,10),
            aurhor: Random.cname(),
            date: Random.date(),
            content: Random.csentence(50,200)
        }
        articleData.push(newArticleObject)
    }
    return {
        articleData: articleData
    }
}

Mock.mock(apiPath.articleUrl, 'get', produceArticleData)