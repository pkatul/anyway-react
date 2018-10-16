/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { APIInfoList } from './APIInfoList';
import { APIWineList } from './APIWineList';

/**
 * DefaultContents component
 */
export class DefaultContents extends React.Component {
    /**
     * Return default contents JSX to render
     */
    public render(): React.ReactElement<DefaultContents> {
        return (
            <div id="page-contents">
                <h2>新着情報</h2>
                <div className="new-info-pane">
                    <APIInfoList url="api/v1/new-infos" />
                </div>
                <h2>入荷ワイン</h2>
                <div className="arrival-pane">
                    <APIWineList url="api/v1/new-wines" />
                </div>
                <h2>ランキング</h2>
                <div className="ranking-pane">
                    <APIWineList url="api/v1/ranking-wines" />
                </div>
            </div>
        );
    }
}
