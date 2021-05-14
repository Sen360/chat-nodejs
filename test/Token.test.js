import {tokens} from './helpers'
const { default: Web3 } = require('web3')

/* eslint-disable no-undef */
const Token = artifacts.require('./Token')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token', ([deployer, receiver]) => {
    const name = 'DApp Token'
    const symbol = 'DAPP'
    const decimals = '18'
    const totalSupply = tokens(1000000).toString()
    let token

    beforeEach(async () => {
        token = await Token.new()
    })

    describe('deployment', () => {
        })

    describe('sending tokens', () => {
        it('transfers token balances', async () => {
            let balanceOf
            // Before transfer
            balanceOf = await token.balanceOf(deployer)
            console.log("deployer balance before transfer", balanceOf.toString())
            balanceOf = await token.balanceOf(receiver)
            console.log("receiver balance before transfer", balanceOf.toString())

            // Transfer
            await token.transfer(receiver, tokens(100), {from: deployer})

            // After transfer
            balanceOf = await token.balanceOf(deployer)
            balanceOf.toString().should.equal(tokens(99990).toString())
            console.log("deployer balance after transfer", balanceOf.toString())
            balanceOf = await token.balanceOf(receiver)
            balanceOf.toString().equal(tokens(100).toString())
            console.log("receiver balance after transfer", balanceOf.toString())
        })
    })

        it('tracks the symbol', async () => {
            const result = await token.symbol()
            result.should.equal('Symbol')
        })

        it('tracks the decimals', async () => {
            const result = await token.decimals()
            result.toString().should.equal('Decimals')
        })

        it('tracks the total supply', async () => {
            const result = await token.totalSupply()
            result.toString().should.equal(totalSupply.toString())
        })

        it('assigns the total supply to the deployer', async () => {
            const result = await token.balanceOf(deployer)
            result.toString().should.equal(totalSupply.toString())
        })
   
})