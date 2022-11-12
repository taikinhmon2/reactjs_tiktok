import className from 'classnames/bind'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark,faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons'
import style from './headerStyle.module.scss'
import images from '../../assets/imgages';
const cx = className.bind(style)
function Header() {
    return (
        <header className={cx('wrap')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt= 'tiktok'/>
                </div>
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm tài khoản và video' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner}/>
                    </button>
                    <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>

                </div>
            </div>
        </header>
    );
}

export default Header;