## 项目结构

```
.
├─.babelrc                            // babel的配置
├─.config.json                        // 如果使用了ip代理，那么配置文件在这里
├─.eslintcache                        // eslint的缓存
├─.eslintignore	                      // eslint设置忽略的文件
├─.eslintrc.json                      // eslint的配置文件
├─.gitignore                          // git忽略上传的文件
├─mockserver.js                       // node本地转发json的执行文件
├─package.json                        // npm命令包
├─proxy.js                            // 设置代理的js,现在基本不用
├─readme.md                           // 项目介绍
├─webpack-test.config.js              // webpack测试的配置文件，目前还没做
├─webpack.config.js                   // 目前项目webpack的配置文件
├─_config.yml 
├─_gitattributes
├─test
|  └setup-test-env.js
├─screenshots                         // 项目截图
|      ├─list.png
|      ├─login.png
|      ├─receiveData.png
|      ├─requestData.png
|      └welcome.png
├─mockapi                             // 前端静态json数据存放的文件夹
|    └data.json
├─app                                 // 页面主文件
|  ├─client.js
|  ├─history.js
|  ├─index.html                       // 入口html文件，配置静态菜单等全局常见变量
|  ├─routes.js                        // 路由配置
|  ├─utils                            // 公用的文件
|  |   ├─ajax.js                      // 发送异步获取数据的配置
|  |   ├─config.js                    // 常用的配置
|  |   └index.js                      // 发送异步数据前的准备工作
|  ├─style                            // 样式库
|  |   ├─base.less                    // 全局通用的样式
|  |   └theme.less                    // 存放变量的less
|  ├─store                            // redux的store的配置
|  |   └configureStore.js
|  ├─reducers                         // reduce的配置
|  |    ├─common.js
|  |    ├─house.js
|  |    ├─index.js
|  |    └tabList.js
|  ├─pages                            // 项目绝大部分业务文件
|  |   ├─welcome.js
|  |   ├─test
|  |   |  ├─index.js
|  |   |  ├─sub.js
|  |   |  └third.js
|  |   ├─house
|  |   |   ├─houseManage.js
|  |   |   └index.js
|  ├─middleware                       
|  |     ├─index.js
|  |     ├─logger.js
|  |     └router.js
|  ├─images                           // 图片文件夹
|  |   ├─default.png
|  |   ├─leftBg.jpg
|  |   └navcontrol.png
|  ├─iconfont
|  |    ├─iconfont.eot
|  |    ├─iconfont.svg
|  |    ├─iconfont.ttf
|  |    └iconfont.woff
|  ├─containers                       // 全局的框架文件 
|  |     ├─App
|  |     |  ├─extra.js
|  |     |  ├─footer.js
|  |     |  ├─header.js
|  |     |  ├─index.js
|  |     |  ├─login.js
|  |     |  ├─rightAside.js
|  |     |  ├─tabList.js
|  |     |  ├─leftNav
|  |     |  |    └index.js
|  ├─constants
|  |     ├─actionTypes.js
|  |     └index.js
|  ├─components                        // 公用的组件库 
|  |     ├─index.less
|  |     ├─searchTable
|  |     |      └index.js
|  |     ├─searchForm
|  |     |     └index.js
|  |     ├─searchChosen
|  |     |      └index.js
|  |     ├─multiSelect
|  |     |      └index.js
|  ├─api                              // 整个项目API的url配置
|  |  ├─common.js
|  |  ├─house.js
|  |  └index.js
|  ├─actions                          // 整个项目的actions配置
|  |    ├─common.js
|  |    ├─house.js
|  |    └tabList.js
