import * as React from 'react';

/**
 * Interface for Iframe
 */
interface IIframe {
    src: string;
}

/**
 * Iframe component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class Iframe extends React.Component<IIframe, { height: number }> {
    /**
     * Constructor for Iframe
     */
    public constructor(props: any) {
        super(props);
        this.state = { height: 0 };
    }

    /**
     * Return JSX to render
     */
    public render() {
        return (
            <iframe
                src={ this.props.src }
                onLoad={ this.setContentHeight }
                width="100%"
                height={ this.state.height + 'px' }
                scrolling="no"
                frameBorder="0"
            />
        );
    }

    /**
     * Event handler for onload event
     */
    private setContentHeight = (e: any): void => {
        this.setState({
            height: e.target.contentWindow.document.body.scrollHeight
        });
    }
}
