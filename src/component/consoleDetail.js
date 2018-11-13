import React from 'react'

class ConsoleDetail extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div>{this.props.loggerMessage.name}</div>
                <div>{this.props.loggerMessage.log}</div>
            </div>
        )
    }
}

export default ConsoleDetail
