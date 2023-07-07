## 路由的基本使用
   1.明确好界面中的导航区，展示区
   2.导航区的a标签改为Link标签
        <Link to="/xxx"> Demo </Link>
   3.展示区写Route标签进行路径的匹配
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