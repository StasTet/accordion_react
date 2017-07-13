import React from 'react';
import SubItem from './subItem.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as subItemsAction from '../actions/subItemsAction.js';

class MainItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.data.visible) {
            this.hide(this.props.data.id);
        } else {
            this.show(this.props.data.id);
        }
    }

    show(id) {
        console.log(this.props.data)
        this.props.subItemsAction.setVisible('OPEN', id);
    }

    hide(id) {
        this.props.subItemsAction.setVisible('CLOSE', id);
    }
 
    render() {
        const visible = this.props.data.visible;

        return (
            <div onClick={this.handleClick}>
                <div className="main-item">{this.props.data.title}</div>
                <SubItem data={this.props.data.subitems} style={visible}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateApp: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subItemsAction: bindActionCreators(subItemsAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainItem);