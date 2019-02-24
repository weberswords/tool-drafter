import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

export default class Tools extends Component {
    
    render() {
        const { tools, onDelete, onClick } = this.props;
        return(
            <div>
                {tools && tools.map(data => {
                return (
                    <Chip 
                        label={data.label}
                        onDelete={onDelete}
                        onClick={onClick}
                    />
                    )
                })}
            </div>
        )
    }
}
