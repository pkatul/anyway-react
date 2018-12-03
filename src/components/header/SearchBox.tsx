/**
 * Renders search box
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for SearchBox
 */
interface ISearchBox {
    imgDir: string
    placeholder: string
}

/**
 * Interface for SearchBox state
 */
interface ISearchBoxState {
    pressedKey: number
}

/**
 * SearchBox component
 */
export class SearchBox extends React.Component<ISearchBox, ISearchBoxState> {
    /**
     * Refers search box
     */
    private searchBox = React.createRef<HTMLInputElement>()

    /**
     * Constructor for SearchBox
     */
    public constructor(props: ISearchBox) {
        super(props)
        this.state = {
            pressedKey: 0
        }
    }

    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<SearchBox> {
        return (
            <div className="search-box">
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    className="search-box__input"
                    onKeyDown={this.onKeyDown}
                    onKeyUp={this.onKeyUp}
                    ref={this.searchBox}
                />

                <img
                    src={`${this.props.imgDir}/search_wine.png`}
                    className="search-box__button"
                    onClick={this.onSearch}
                />
            </div>
        )
    }

    /**
     * Event handler for onkeydown event for the search input
     */
    private onKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        this.setState({
            pressedKey: event ? event.which || event.keyCode : 0
        })
    }

    /**
     * Event handler for onkeyup event for the search input
     */
    private onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const keyCode = event ? event.which || event.keyCode : 0
        if (keyCode === 13 && this.state.pressedKey !== 229) {
            this.search(event.currentTarget.value)
        }
    }

    /**
     * Event handler for onclick event for the search button
     */
    private onSearch = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault()
        if (this.searchBox.current) {
            this.search(this.searchBox.current.value)
        }
    }

    /**
     * Conduct search
     *
     * TODO: Redirect to /search
     */
    private search = (keyword: string): void => {
        window.location.href = `//anyway-grapes.jp/store/index.php?submenu=search&keyword=${keyword}`
    }
}
