/**
 * Renders photo table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import PhotoColumn from 'components/contents/PhotoColumn'
import * as React from 'react'
import { IPhoto } from 'states/IPhoto'

/**
 * Interface for rendering photo table
 */
export interface IPhotoTable {
    onMount: () => void
    photos: IPhoto[]
}

/**
 * Photo table component
 */
export default class PhotoTable extends React.Component<IPhotoTable> {
    /**
     * Return JSX to render
     */
    public render() {
        const { photos } = this.props
        const rows = this.convertToRows(photos)
        const jsx = rows.map((row: IPhoto[], index: number) => (
            <tr key={`photo_row_${index}`}>
                {row.map((photo: IPhoto) => (
                    <PhotoColumn
                        comment={photo.comment}
                        filename={photo.filename}
                        dir={photo.dir}
                        key={photo.filename}
                        onClick={this.handleClick}
                    />
                ))}
            </tr>
        ))

        return (
            <table className="photo__table">
                <tbody>{jsx}</tbody>
            </table>
        )
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount()
    }

    /**
     * Convert the specified array into array of rows.
     * Each row contains 4 columns at max.
     */
    private convertToRows = (photos: IPhoto[]): IPhoto[][] => {
        if (photos.length <= 4) {
            return [photos]
        }

        const [first, second, third, forth, ...rest] = photos

        return [[first, second, third, forth], ...this.convertToRows(rest)]
    }

    /**
     * Handles image click
     */
    private handleClick = () => {
        alert('Click thumbnail')
        /*
            var $parentAnchor = $(this).closest('a');

            ModalWindow.show('<img src="' + $parentAnchor.attr('img') + '" />',
                $parentAnchor.attr('rel'));
        */
        return false
    }
}
