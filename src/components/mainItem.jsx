import React from 'react';
import SubItem from './subItem.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as subItemsAction from '../actions/subItemsAction.js';
import { OPEN, CLOSE } from '../constants';

class MainItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let id = this.props.data.id

        if (this.props.data.visible) {
            this.hide(id);
        } else {
            this.show(id);
        }
    }

    show(id) {
        this.props.subItemsAction.setVisible(OPEN, id);
    }

    hide(id) {
        this.props.subItemsAction.setVisible(CLOSE, id);
    }

    render() {
        const visible = this.props.data.visible;
        
        return (
            <div onClick={this.handleClick}>
                <div className="main__item">{this.props.data.title}</div>
                <SubItem data={this.props.data.subitems} style={visible} />
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { 
        dataState: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subItemsAction: bindActionCreators(subItemsAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainItem);