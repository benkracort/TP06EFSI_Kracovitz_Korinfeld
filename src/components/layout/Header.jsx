import logo1 from "../../assets/img/Logos/Imagotipo 1.png";
import logo2 from "../../assets/img/Logos/Imagotipo 2.png";

import settings from "../../assets/img/Iconos/settings.png";
import camara from "../../assets/img/Iconos/camara.png";
import send from "../../assets/img/Iconos/send.png";

import newPost from "../../assets/img/Iconos/newPost.png";

const Header = () => {
    return (
        <div className="header">

            <div className="headerLogos">
                <img src={logo1} />
                <img src={logo2} />
            </div>

            <div className="headerSearch">
                <input
                    type="search"
                    placeholder="Username, hashtag and story search"
                />
            </div>

            <div className="headerRight">

                <div className="headerIconos">
                    <img src={settings} />
                    <img src={camara} />
                    <img src={send} />
                </div>

                <div className="headerNewPost">
                   <img src={newPost} />
                </div>

            </div>

        </div>
    );
};

export default Header;