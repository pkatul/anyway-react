/**
 * Renders footer navigations
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'

/**
 * Interface for Link
 */
export interface ILink {
    path: string
    text: string
}

/**
 * Interface for FooterNav
 */
interface IFooterNav {
    links: ILink[]
}

/**
 * FooterNav component
 */
export const FooterNav: React.SFC<IFooterNav> = (props) => (
    <ul>
        {
            props.links.map(
                (link: ILink, index: number) =>
                <li className="footer__list-item" key={ index }>
                    <Link className="footer__link" to={ link.path }>{ link.text }</Link>
                </li>
            )
        }
    </ul>
)
