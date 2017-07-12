import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import SubItem from './subItem.jsx';
import * as subItemsAction from './store/actions/subItemsAction.js'

class MainItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.subItems.visible) {
            console.log(this.props.data.id, 'id')
            this.hide(this.props.data.id);
        } else {
            this.show(this.props.data.id);
        }
    }

    show(id) {
        this.props.subItemsAction.setVisible('OPEN', id);
    }

    hide(id) {
        this.props.subItemsAction.setVisible('CLOSE', id);
    }
 
    render() {
        // console.log(this.props.data.id)
        const { visible } = this.props.subItemsReducers;
        const { setVisible } = this.props.subItemsAction;

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
        subItems: state.subItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subItemsAction: bindActionCreators(subItemsAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainItem);