const Header = () => {
    return (
        <div>
            <div className="headerLogos">
                <img src="../assets/img/Logos/Imagotipo 1.png"></img>
                <img src="../assets/img/Logos/Imagotipo 2.png"></img>
            </div>
            <input type="search" id="site-search" name="q" placeholder="Username, hashtag and story search"></input>
            <div className="headerIconos">
                <img src="../assets/img/Iconos/setting.png"></img>
                <img src="../assets/img/Iconos/camara.png"></img>
                <img src="../assets/img/Iconos/send.png"></img>
            </div>
            <div className="headerNewPost">
                <img src="../assets/img/Iconos/mas.png"></img>
                <p>New Post</p>
            </div>
        </div>
    )
}

export default Header