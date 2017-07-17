import React, { Component } from 'react';
import MainItem from './mainItem.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as mainItemsAction from '../../actions/mainItemsAction.js';

class App extends Component {

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const urlJson = '../../files/data.json';
        this.props.mainItemsAction.getData(urlJson);
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
        dataState: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mainItemsAction: bindActionCreators(mainItemsAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);