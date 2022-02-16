
function Footer() {

    var yr = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <p> copyright ⓒ {yr} </p>
        </footer>
    );
}

export default Footer;