/**
 * PageTemplate component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

// Code-Splitting
const AnywayAside = React.lazy(() => import('../sidebar/AnywayAside'))
const AnywayFooter = React.lazy(() => import('../footer/AnywayFooter'))
const AnywayHeader = React.lazy(() => import('../header/AnywayHeader'))

/**
 * PageTemplate component
 */
const PageTemplate = React.memo<{ children: React.ReactNode }>(props => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <AnywayHeader logined={false} />
        <div className="container">
            <AnywayAside />
            {props.children}
        </div>
        <AnywayFooter />
    </React.Suspense>
))

export default PageTemplate
