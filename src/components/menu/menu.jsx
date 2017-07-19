import React, { Component } from 'react';
import MainItem from './mainItem.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as getDataAction from '../../actions/left-menu/getDataAction.js';

class App extends Component {

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const urlJson = '../../../files/left-menu.json';
        
        this.props.getDataAction.getData(urlJson);
    }

    render() {
        const { data } = this.props.dataState;

        return (
            <aside>
                <nav className="accordion">
                    {
                        data.map((item, index) => {
                            return <MainItem data={item} key={_.uniqueId()} />
                        })
                    }
                </nav>
            </aside>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataState: state.leftMenu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataAction: bindActionCreators(getDataAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);