const fetch = require('node-fetch')
const { default: Axios } = require('axios')
const fs = require('fs')
const FormData = require('form-data')
const fromBuffer = require('file-type')


function uptonaufal(filename, name) {
    var image = fs.createReadStream(filename)
    var form = new FormData()
    form.append('image', image, name)
     
    const upload = fetch('https://storage.naufalhoster.xyz', {
        method: 'POST',
        body: form
    }).then((response) => response.json())
        .then((result) => {
            return result
        })
        .catch(e => {
            return e
        })
    return upload
}
module.exports = uptonaufal
