const Acceuil = () => {
    const links = [{ path: "/bouton", name: "Bouton" },{ path: "/fils", name: "Fils" },{ path: "/clavier", name: "Clavier" }];

    return (
        <div className="links">
            <h1>Documentation</h1>
            <ul>
            {
                links.map((link) => (
                    <li key={link.path}>
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default Acceuil;
