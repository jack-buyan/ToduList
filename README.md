## 路由的基本使用
   1.明确好界面中的导航区，展示区
   2.导航区的a标签改为Link标签
   3.展示区写Route标签进行路径的匹配
        <Link to="/xxx"> Demo </Link>
        <Route path="/xxx" component={Demo}/>
   4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>
   

## Switch的使用
    1.通常情况下，path和component是一一对应的关系。
    2.Switch可以提高路由匹配效率（单一匹配）。

## 路由的严格匹配与模糊匹配
     1.默认使用的是模糊匹配（输入的路径 必须包含要匹配的路径，且顺序要一致）
     2.开启严格模式：<Route exact={true} path="/about" component={About}/>
     3.严格匹配不要随便开启，需要再开，有些时候会导致无法继续匹配二级路由

## 向路由组件传递参数
    1.params参数
        路由链接(携带参数)：<Link to='/demo/test/tom/18'>详情</Link>
        注册路由(声明接收)：<Route path='/demo/test/:name/:age'component={Test} /Route>
        接收参数：const {name,age} = this.props.match.params
    2.search参数
        路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'>详情</Link>
        注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
        接收参数：const {search} = this.props.location
        备注：获取到的search是urlencoded编码 字符串，需要借助querystring解析
    3.state参数
        路由链接(携带参数)：<Link to={{patnname:'/demo/test',state:{name:'tow',age:18}}}>详情</Link>
        注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
        接收参数：const {state} = this.props.location.state

## 编程式路由导航
        借助this.props.history对象上的API对操作路由跳转，前进，后退
        this.props.history.push()
        this.props.history.replace()
        this.props.history.goBack()
        this.props.history.goForward()
        this.props.history.go()

## BrowserRouter与HashRouter的区别
        1.底层原理不一样：
            BrowserRouter使用的是H5的history API，不兼容IR9及以下版本。
            HashRouter使用的是URL的哈希值。
        2.path表现形式不一样
            BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
            HashRouter的路径包含 #localhost:3000/#/demo/test
        3.刷新后对路由state参数的影响
            （1）BrowsRouter刷新后会 导致路由state参数的丢失。
            （2）HashRouter刷新后会导致路由state参数的丢失。
        4.备注：HashRouter可以用于解决一些路径错误相关的问题

## Effect Hook
        (1).Effect Hook 可以在函数中执行副作用操作（用于模拟类组件中的生命周期钩子）
        (2).React中的副作用操作：
            发ajax请求数据获取、设置订阅/启动定时器、手动更改真实dom
        (3).语法和说明：
            useEffect(()=>{
                在此可以执行任何带副作用操作
                return ()=>{
                    在此做一些收尾工作，比如清除定时器/取消订阅等
                }
            },[]) //如果指定的是[]，回调函数只会在第一次render()执行 ，数组里有值，更改这个值就会触发一次useEffect如[data]

## Ref Hook
        (1).语法：const refContainer = useRef()
        (2).作用：保存标签对象 ，功能与React.createRef()一样

## State Hook
        State Hook 让函数组件也有state状态，并进行数据的读写操作
        (2).语法  const [a,b] = React.useState(数据)
        (3).useState()说明：
            参数：a 第一个初始化指定的是值在内部作缓存
            返回值：包含2个元素的数组，第1个为内部当前状态，第二个为更新状态值的函数
        (4).b()2种写法
            b(data):参数作为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
            b(data => data):参数作为函数，接收原本的状态值，返回新的状态，内部用其覆盖原来的状态值

## useContext
        使用方法 引入 useContext和createContext
        (2).在组件都能拿得到的地方声明  const CountContext = createContext(0);
        (3).在父组件      <CountContext.Provider value={传入的值}>
                            <Ab/> //子组件
                         </CountContext.Provider>
        (4).子组件获取  const count = useContext(CountContext);