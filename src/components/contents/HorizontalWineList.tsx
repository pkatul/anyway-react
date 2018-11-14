/**
 * Renders wines in horizontal direction
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import { WineColumn } from './WineColumn'

/**
 * Horizontal wine list component
 */
export const SFCComponent: React.SFC<{ wines: IWine[] }> = props => (
    <table>
        <tbody>
            <tr>
                {props.wines.map((wine: IWine) => (
                    <WineColumn key={wine.barcode_number} wine={wine} />
                ))}
            </tr>
        </tbody>
    </table>
)

export const HorizontalWineList = React.memo(SFCComponent)
