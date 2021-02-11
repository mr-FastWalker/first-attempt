import React from "react";
import s from './ProFileInfo.module.css';

const ProFileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    className={s.titleimg}
                    src='https://vologda-poisk.ru/system/Cover/images/000/105/321/big/more-plyazh-i-palmy-dlya-zhiteley-vologdy-rasskazyvaem-podrobnosti_1562555455.jpg'
                    alt='content title'
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProFileInfo;