import * as React from 'react';

/**
 * Interface for HtmlPage
 */
interface IHtmlPage {
    file: string;
}

/**
 * HtmlPage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class HtmlPage extends React.Component<IHtmlPage, { date: Date }> {
    /**
     * Timer ID
     */
    private timerID: any;

    /**
     * Constructor for HtmlPage
     */
    public constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    /**
     * Runs after the component output has been rendered to the DOM.
     */
    public componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /**
     * Runs when the component is removed from the DOM.
     */
    public componentWillUnmount() {
        clearInterval(this.timerID);
    }

    /**
     * Return payment info JSX to render
     */
    public render() {
        const iframeClass = 'content-height-iframe';
        const srcUrl = `//anyway-grapes.jp/pages/ja/${ this.props.file }`;

        return (
            <div>
                <h2>{ this.state.date.toLocaleTimeString() }</h2>
                <iframe src={ srcUrl } width="100%" className={ iframeClass } />
            </div>
        );
    }

    /**
     * Update current date
     */
    private tick() {
        this.setState((state: any, props: any) => ({
            date: new Date()
        }));
    }
}
