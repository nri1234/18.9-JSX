var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div className={"contactItem"}>
                <img
                    className={"contactImage"}
                    src={"./images/user-circle.png"}
                    alt={"contactImage"}
                />
                <p className={"contactLabel"}>
                    Name: {this.props.item.firstName}
                </p>
                <p className={"contactLabel"}>
                    Last Name: {this.props.item.lastName}
                </p>
                <p className={"phoneLabel"}>
                    Numer tel: {this.props.item.phone}
                </p>
                <a href={"mailto:" + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
        );
    }
});
