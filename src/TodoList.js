import React, { Component, Fragment } from "react";

import "./style.css"; // 3️⃣-①：将当前目录下的 CSS 样式引入；
import TodoItem from "./TodoItem";
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
            <Fragment>
                <div>

                    <label htmlFor="insertArea">请输入要进行的事项：</label>
                    {/*  */}
                    <input
                        id="insertArea"

                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}

                        onKeyDown={this.handleKeyDown.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                {/* <ul onClick={this.handleItemDelete.bind(this)}>
                    {this.state.list.map((item, index) => (
                        <li key={index} data-index={index}>{item} {index}</li>
                    ))}
                </ul> */}
                <ul>
                    {this.getTodoItem()}
                </ul>

            </Fragment>
        )
    }


    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={item}

                    content={item}
                    index={index}
                    itemDelete={this.handleItemDelete1.bind(this)}
                />
            )
        })
    }


    //但输入框内的数值发生变化的 时候，我们就开始执行函数
    handleInputChange(e) {
        // console.log(e.target.value)
        // console.log(this)
        this.setState({
            inputValue: e.target.value
        })
    }

    handleKeyDown(e) {

        if (e.key === 'Enter') {
            this.handleBtnClick()
        }
    }

    handleBtnClick() {

        // console.log('1')
        // 手动存储到store, store发生变化，自动更新页面
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    //删除某一项,(对于事件委托)
    handleItemDelete(e) {
        // 事件委托：判断点击的是否是 li 元素
        if (e.target.tagName.toLowerCase() === 'li') {
            const index = e.target.getAttribute('data-index'); // 获取下标
            const list = [...this.state.list];
            list.splice(index, 1);
            this.setState({
                list: list
            });
        }
    }


    //监听每一个元素项
    handleItemDelete1(index) {
        const list = [...this.state.list]
        /*❎-⑨：用 prevState 来代替  数据“修改前”的状态； */

        list.splice(index, 1)
        this.setState({ // ❎-⑧：新版 React 提倡我们用“传入函数”的形式修改“数据项”；
            list: list
        }
        )
    }

}

export default TodoList;
