'use strict'

const modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()
const options = {
  host: '192.168.0.9',
  port: '502',
}
console.log(typeof socket)
const client = new modbus.client.TCP(socket) // 매번 새롭게 설정해야함.

socket.on('connect', async function () {
  console.log('connect!!')
  try {
    await sleep(3000)
    console.log('sleep end')
    const func = client.readHoldingRegisters(0, 5)
    let res = await func
    console.log(res.response._body.valuesAsArray)
    socket.end()
  } catch (err) {
    console.log(err)
  }
})

const sleep = (ms) => {
  return new Promise((resolve) => {
    console.log('sleep!!!!')
    setTimeout(resolve, ms)
  })
}

socket.on('error', console.error)
socket.on('close', function () {
  console.log('close1!!')
})
socket.connect(options)
