import React, { Component } from 'react';
import { connect } from 'react-redux';

//connect方法的接受的第一个参数，用途是：将state映射到props上面
function mapStateToProps(state) {
    return {
        num: state.counter
    };
}

function mapDispatchToProps(dispatch){
    return {
        increment(){
            dispatch({
                type:'increment'
            })
        },
        decrement(){
            dispatch({
                type:'decrement'
            })
        }

    }
}

class ReactReduxCounter extends Component {
    increment = () => {
        this.props.increment()
    }
    decrement = () => {
        this.props.decrement()
    }
    render() {
        return (
            <div>
                <div>num: { this.props.num }</div>
                <button onClick = { this.increment }>点我 +1</button>
                <button onClick = { this.decrement }>点我 -1</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ReactReduxCounter);
