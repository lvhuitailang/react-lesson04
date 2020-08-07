import React, {Component} from 'react';
import {
    Button
} from 'antd'

import './index.less';

const testHoc = (WrappedConponet) => {
    return class HocComponet extends Component{
        render() {
            return(
                <>
                    <WrappedConponet />
                    <div>这是装饰器的componet</div>
                </>


            )
        }
    }
}
@testHoc
class App extends Component {
    render() {
        return (
            <div>
               app
                <Button type={"primary"}>antd</Button>
            </div>
        );
    }
}

export default App;