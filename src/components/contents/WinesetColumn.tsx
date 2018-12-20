/**
 * Renders wineset table column
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWineset } from '../../interfaces/IWineset'
import { Image } from './Image'

/**
 * Wineset table column component
 */
const WinesetColumn = React.memo<IWineset>(props => (
    <td className="wineset__column">
        <a
            href={`//anyway-grapes.jp/store/index.php?submenu=set_detail&id=${
                props.id
            }&pc_view=1`}
        >
            <Image
                className="wineset__image"
                srcUrl={`../images/wine_sets/${props.id}.png`}
                errorUrl="../images/wine_sets/no_wine_set_image.png"
                alt={String(props.id)}
            />
            <br />
            <br />
            <span>{props.name}</span>
            <br />
            <br />
            <span className="emphasis-span">
                {props.stock > 0 ? '【 送料無料 】' : '完売しました'}
            </span>
        </a>
    </td>
))

export default WinesetColumn
