import React from "react";
import Group from './Group';
// import Web3 from 'web3';
// import Contract from 'web3-eth-contract';


class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        }
    }

    componentWillMount() {
        //data will be received here from external resource (Contract) through web3
        let groups = [
            {
                groupName: "Venture Portfolio Index",
                indexes: [
                    {
                        id: "1",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "2",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "3",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "4",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "5",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "6",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "7",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "8",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    }
                ]
            },
            {
                groupName: "Venture Portfolio Index",
                indexes: [
                    {
                        id: "1",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "2",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "3",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "4",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    }
                ]
            },
            {
                groupName: "Venture Portfolio Index",
                indexes: [
                    {
                        id: "1",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "2",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "3",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "4",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "5",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "6",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "7",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    },
                    {
                        id: "8",
                        name: "DeFI Index",
                        ethPriceInsWei: "$100",
                        usdPriceInCent: "0.04 ETH",
                        usdCapitalization: "$2,456,235.00",
                        percentageChange: "+55%",
                    }
                ]
            }
        ];
        this.setState({groups: groups})
    }

    renderGroup(i,) {
        return <Group data={this.state.groups[i]} />
    }

    render() {
        return (
            <div>
                {this.renderGroup(0)}
                {this.renderGroup(1)}
                {this.renderGroup(2)}
            </div>
        )
    }
}

export default Groups;