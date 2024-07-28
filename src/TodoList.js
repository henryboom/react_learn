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
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul onClick={this.handleItemDelete.bind(this)}>
                    {this.state.list.map((item, index) => (
                        <li key={index} data-index={index}>{item} {index}</li>
                    ))}
                </ul>
            </Fragment>
        )
    }


    //但输入框内的数值发生变化的 时候，我们就开始执行函数
    handleInputChange(e) {
        // console.log(e.target.value)
        // console.log(this)
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        // 手动存储到store, store发生变化，自动更新页面
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    //删除某一项
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
}

export default TodoList;
