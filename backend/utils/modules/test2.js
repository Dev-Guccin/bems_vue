'use strict'

const modbus = require('jsmodbus')
const net = require('net')
let socket = new net.Socket()
const options = {
  host: '192.168.0.11',
  port: '502',
}
const client = new modbus.client.TCP(socket)

socket.on('connect', async function () {
  const func = client.readHoldingRegisters(0, 5)
  let res = await func
  console.log(res.response._body.valuesAsArray)
  await sleep(1000)

  socket.end()
})

socket.on('error', console.error)
socket.on('close', function () {
  console.log('close1!!')
  socket.connect(options)
})
socket.connect(options)

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
