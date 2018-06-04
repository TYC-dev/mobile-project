import apiPath from '../api/apipath'  //引用apipath
import { fetch } from './fetch'    //引用fetch.js

const get_news = function(){  //获取新闻标题的接口
    return fetch({
        url: apiPath.newsUrl,
        method: 'get'
    })
}

const get_col = function(){   //获取专题的接口
    return fetch({
        url: apiPath.colUrl,
        method: 'get'
    })
}

const get_lanmu = function(){
    return fetch({
        url: apiPath.lanmuUrl,
        method: 'get'
    })
}

const get_article = function(){
    return fetch({
        url: apiPath.articleUrl,
        method: 'get'
    })
}

export { get_news, get_col, get_lanmu, get_article }  //导出接口