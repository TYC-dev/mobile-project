import axios from 'axios'   //引入axios

export function fetch( options ){
    return new Promise( ( resolve, reject) => {
        const instance = axios.create({    //创建axios实例，写配置信息
            headers: {
                'Content-Type': 'application/json'
            }
        })
        instance( options )
            .then( response => {
                resolve( response )
            })
            .catch( error => {
                console.log('请求异常信息：'+ error)
                reject(error)
            })
    } )
}