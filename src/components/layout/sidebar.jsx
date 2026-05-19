import tick from "../../assets/img/Iconos/tick.png";
import user from "../../assets/img/Iconos/user.png";
import heart from "../../assets/img/Iconos/heart.png";

const Sidebar = () => {
    return (
        <div className="Sidebar">x

            <div className="pefil">
                <img src={foto_perfil} />
                <div className="nombreUsuario">
                    <p>Martina Korinfeld</p>
                    <img src={tik} />
                </div>
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

export default Sidebar;