import Following from "../page/following";
import Home from "../page/home";
import Profile from "../page/profile";
import Upload from "../page/upload";
import HederOnly from "../components/hederOnly"
export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/upload',
        component: Upload,
        layout: HederOnly
    }
]
