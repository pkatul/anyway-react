/**
 * Renders wines in horizontal direction
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { WineColumn } from 'components/contents/WineColumn'
import * as React from 'react'
import { IWine } from 'states/IWine'

/**
 * Props interface for HorizontalWineList
 */
interface IProps {
    wines: IWine[]
}

/**
 * Horizontal wine list component
 */
const HorizontalWineList: React.FC<IProps> = props => {
    const { wines } = props

    return (
        <table>
            <tbody>
                <tr>
                    {wines.map((wine: IWine) => (
                        <WineColumn key={wine.barcode_number} wine={wine} />
                    ))}
                </tr>
            </tbody>
        </table>
    )
}

export default React.memo(HorizontalWineList)
