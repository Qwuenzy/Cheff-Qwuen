import logo from "../assets/images/chef.jpeg"

export function Header(){
    return (
        <>
        <header className="header">
            <img src={logo} alt="chef-logo" />
            <h1 className="header-text">chef qwuenzy</h1>
        </header>
        </>
    )
}