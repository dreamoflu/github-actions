/*
 * @Author: your name
 * @Date: 2021-05-14 10:47:44
 * @LastEditTime: 2021-05-14 11:15:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github-actions/src/config/index.js
 */
/**
 * @description 配置项
 * @author 双越
 */

const { isPrd, isPrdDev } = require('../utils/env')

// 获取各个环境的不同配置文件
let fileName = 'dev.js'
if (isPrdDev) fileName = 'prd-dev.js'

if (isPrd) fileName = 'prd.js'

const conf = require(`./envs/${fileName}`) // eslint-disable-line

module.exports = conf
