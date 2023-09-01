import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import * as S from './styled';

import { saveDataToLocalStorage } from '../../utils/localStorage';

function Header() {
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        const saveChecked = localStorage.getItem('saveChecked');
        if (saveChecked) {
            setChecked(JSON.parse(saveChecked));
        }
    }, []);

    useEffect(() => {
        saveDataToLocalStorage('saveChecked', checked);
        document.documentElement.style.setProperty('--background-color', checked ? '#2f2f36' : '#fff');
        document.documentElement.style.setProperty('--font-color', checked ? '#e1e1e1' : '#6E7E91');
    }, [checked]);

    const toggleBackground = (click: boolean) => {
        setChecked(click);
    };

    const switchStyle = {
        backgroundColor: checked ? '#191b1d' : '#556170',
    };

    return (
        <S.HeaderDiv>
            <S.ContentsDiv>
                <Link to="/">
                    <S.LogoDiv>
                        <h2>YouKwon515</h2>
                        <p>Blog</p>
                    </S.LogoDiv>
                </Link>
                <Switch checked={checked} onChange={toggleBackground} style={switchStyle}/>
            </S.ContentsDiv>
        </S.HeaderDiv>
    );
}

export default Header;