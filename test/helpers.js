const { default: Web3 } = require('web3')

export const tokens = (n) => {
    return new Web3.utils.BN(
        Web3.utils.toWei(n.toString(), 'ether')
    )
}