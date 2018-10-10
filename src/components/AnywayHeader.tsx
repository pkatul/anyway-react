import * as React from 'react';
import { IUserContext, UserContext } from './context/UserContext';
import { SearchBox } from './SearchBox';

/**
 * Interface for AnywayHeader
 */
interface IAnywayHeader {
    logined: boolean;
}

/**
 * AnywayHeader component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class AnywayHeader extends React.Component<IAnywayHeader, {}> {
    /**
     * Return image JSX to render
     */
    public render() {
        const jsx = (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) => (
                        <header>
                            <a href={ `${ctx.siteUrl}/index.php` }><img src={ `${ctx.imgDir}/_logo.png` } /></a>
                            <br />
                            <a
                                href={ `${ctx.siteUrl}/index.php?submenu=vintage_info` }
                                className="page-links">Vintages</a>

                            <a href={ `${ctx.siteUrl}/producers/index.html` } className="page-links">Producers</a>
                            <a href={ `${ctx.siteUrl}/index.php?submenu=critics` } className="page-links">Critics</a>
                            <SearchBox placeholder="ワイン検索" />
                            <div id="signup-fld">
                                <a href={ `${ctx.siteUrl}/cart.php` } className="cmd-links">カート</a>
                                {
                                    this.props.logined ? (
                                        <>
                                            <a href={ `${ctx.siteUrl}/login.php` } className="cmd-links">ログイン</a>
                                            <a
                                                href="#"
                                                id="register-link"
                                                onClick={ this.showRegistrationForm }
                                                className="cmd-links">会員登録</a>
                                        </>
                                    ) : (
                                        <>
                                            <a href={ `${ctx.siteUrl}/logout.php` } className="cmd-links">ログアウト</a>
                                            <a
                                                href={ `${ctx.siteUrl}/customer_info.php` }
                                                className="cmd-links">会員ページ</a>
                                        </>
                                    )
                                }
                            </div>
                        </header>
                    )
                }
            </UserContext.Consumer>
        );

        return jsx;
    }

    /**
     * Event handler for onclick event
     */
    private showRegistrationForm = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        alert('HO');
    }
}
