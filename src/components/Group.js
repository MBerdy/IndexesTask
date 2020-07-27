import React from "react";
import Card from './Card';
import Chunk from 'lodash.chunk';
function Group(props) {
    var sections = Chunk(props.data.indexes, 4);
    return (
        <div>
            <h3 className="subtitle">{props.data.groupName}</h3>
            <div className="group">
                {sections.map((indexes, i) => {
                    return (<div className="wrap" key={i}>
                        {indexes.map((index) => {
                            return (
                                <Card name={index.name}
                                    ethPriceInsWei={index.ethPriceInsWei}
                                    usdPriceInCent={index.usdPriceInCent}
                                    usdCapitalization={index.usdCapitalization}
                                    percentageChange={index.percentageChange} />
                            )
                        })}
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Group;