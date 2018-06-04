//每一个api有单独的文件，统一引入到index.js中

//引入mockjs
import Mock from 'mockjs'

//将所有的mock文件引入
require('./newMock')
require('./colMock')
require('./lanmuMock')

require('./articleMock')

//设置ajax请求超时时间
Mock.setup({
    timeout: 0-300
})