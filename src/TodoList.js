import React, { Component, Fragment } from "react";


//传统的类编程
class TodoList extends Component {


    //构造函数
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '', //输入 的数值
            list: []         //计划清单
        }

    }



    render() {
        return (

            // 🚀有个 input 框，后边紧跟一个“提交”按钮。
            // <div><input /><button>提交</button></div>
            // ❗️❗️❗️貌似应该这样写，但……请保存代码查看页面报错！
            <Fragment>
                <div><input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} /><button>提交</button></div>
                <ul>
                    <li>React 初识</li>
                    <li>React 入门</li>
                    <li>React 进阶</li>
                </ul>
            </Fragment>
        )
    }


    //但输入框内的数值发生变化的 时候，我们就开始执行函数
    handleInputChange(e) {
        console.log(e.target.value)
        // console.log(this)

    }
}

export default TodoList;
