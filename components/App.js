var App = React.createClass({
    render: function() {
        return (
            <div className={"app"}>
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
                <p className={"label"} />
            </div>
        );
    }
});
var contacts = [
    {
        id: 1,
        firstName: "Jan",
        lastName: "Nowak",
        phone: "12345647",
        email: "jan.nowak@example.com"
    },
    {
        id: 2,
        firstName: "Adam",
        lastName: "Kowalski",
        phone: "12345647",
        email: "adam.kowalski@example.com"
    },
    {
        id: 3,
        firstName: "Zbigniew",
        lastName: "Koziol",
        phone: "12345647",
        email: "zbigniew.koziol@example.com"
    },
    {
        id: 4,
        firstName: "Norbert",
        lastName: "Mielczarek",
        phone: "12345647",
        email: "adam.kowalski@example.com"
    }
];

var contactForm = {
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
}; // inf co ma byc w kontakt form
