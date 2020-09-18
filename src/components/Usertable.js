import React, { Component } from 'react';

class UserTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.account}
                </td>
                <td>
                    {this.props.obj.contactnumber}
                </td>
                <td>
                    {this.props.obj.region}
                </td>
                <td>
                    {this.props.obj.inquirytype}
                </td>
            </tr>
        );
    }
}

export default UserTable;