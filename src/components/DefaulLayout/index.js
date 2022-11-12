import style from './defaultStyle.module.scss'
import className from 'classnames/bind';
import Header from "../header";
import Slidebar from "../slibar";
const cx = className.bind(style)
function DefaulLayout({children}) {
    return ( 
        <div className={cx('wraper')}>
            <Header/>
            <div className={cx("container")}>
                <Slidebar/>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaulLayout;