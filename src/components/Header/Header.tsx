import s from "./Header.module.css"

export default function Header () {
    return (
        <div className={s.headerContainer}>
            <header className={s.header}>
                <div className={s.navigation}>
                    <div className={s.logoContainer}>
                        <img src={'./vercel.svg'}/>
                    </div>
                    <div className={s.userContainer}>
                        #username
                    </div>
                </div>
            </header>
        </div>
    )
}