import React, { Component } from "react";

//格式校验
import PropTypes from "prop-types"
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    render() {
        const { content } = this.props;

        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        const { itemDelete, index } = this.props;
        itemDelete(index)
    }


}
TodoItem.propTypes = {


    //假设test参数必要 ，但是无法传入
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    itemDelete: PropTypes.func,
    index: PropTypes.number

}


TodoItem.defaultProps = { // 2️⃣-①：给 TodoItem 增添一些“默认属性”；

    test: "hello, " /*
                                    2️⃣-②：比如增加一个默认属性 test，其值为 "hello, " 。
                                    表示，即使父组件没办法给我子组件传递这个 test 属性，我子组件依然能够
                    使用 test 属性，因为我自己定义了一个“默认值”。
                                     */
}

export default TodoItem;