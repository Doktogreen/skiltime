import * as React from 'react';
import Header from './Header';
import LeftNavBar from './LeftNavBar';
import RightNavBar from './RightNavBar';
import CenterDisplay from './CenterDisplay';
import Footer from './Footer'

function index() {
    return (
        <div>
            <Header />
            <span className="all-sides">
                <LeftNavBar />
                    <CenterDisplay />
                <RightNavBar />
            </span>
            <Footer />
        </div>
    )
}

export default index;