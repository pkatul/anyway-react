import * as React from 'react';
import { UserContext } from './context/UserContext';
import { WineImage } from './WineImage';

/**
 * Interface for Wine
 */
export interface IWine {
    barcode_number: string;
    combined_name: string;
    combined_name_jpn: string;
    producer: string;
    producer_jpn: string;
    vintage: string;
}

/**
 * WineColumn component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class WineColumn extends React.Component<{ wine: IWine }, {}> {
    /**
     * Maximum number of display text to render
     */
    private maxDisplayTextLength: number = 40;

    /**
     * Return wine column JSX to render
     */
    public render() {
        const wineId = this.props.wine.barcode_number;

        return (
            <UserContext.Consumer>
                { (ctx: { code: string, rootUrl: string }) => (
                    <td className="wine-column">
                        <a
                            href={ `${ctx.rootUrl}/store/index.php?submenu=wine_detail&id=${wineId}&lang=${ctx.code}` }
                            target="wine_detail"
                            className="wine-link">

                            <WineImage
                                id={ wineId }
                                baseUrl={ `${ctx.rootUrl}/images/wines/400px` }
                                className="wine-img" />

                            <div>{ this.getDisplayText(this.getWineName(this.props.wine, ctx.code)) }</div>
                        </a>
                    </td>
                )}
            </UserContext.Consumer>
        );
    }

    /**
     * Get the text to display.
     * If the length of the text exceed the limit,
     * ellipsis chars ... is displayed.
     *
     * @param string name Name of the wine
     * @return string Name of the wine to be displayed
     */
    private getDisplayText(name: string): string {
        return (name.length > this.maxDisplayTextLength) ?
            name.substr(0, this.maxDisplayTextLength - 3) + '...' :
            name;
    }

    /**
     * Get name of the specified wine
     *
     * @param IWine wine Target wine
     * @param string lang Language code
     */
    private getWineName(wine: IWine, lang: string): string {
        const vintage = wine.vintage;
        const name = (lang === 'ja') ? wine.combined_name_jpn : wine.combined_name;
        const producer = (lang === 'ja') ? wine.producer_jpn : wine.producer;

        return `${vintage} ${name} / ${producer}`;
    }
}
