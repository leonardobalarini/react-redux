import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButon from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e) {
        const {add, search, clear,  description} = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }
    render() {
        const {add, search, clear,  description} = this.props
        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButon style='primary' icon='plus' onClick={() => add(description)} ></IconButon>
                    <IconButon style='info' icon='search' onClick={ search} ></IconButon>
                    <IconButon style='default' icon='close' onClick={() => clear()} ></IconButon>

                </Grid>
            </div>
        )
    }
}



const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)