import 'isomorphic-fetch'

async function submitForm(context) {
    const convertedContext = {}

    Object.keys(context).map(key => {
        if(context[key] !== undefined && context[key].value !== undefined) {
            convertedContext[key] = context[key].value
        }
    })

    var doneConvertedContext = JSON.stringify(convertedContext)

    try {
        const result = await Promise.race([
            await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: doneConvertedContext
            }),
            new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error('Timeout')), 10000)
            })
        ])

        const pinNumber = await result.text()

        return {
            status: result.status,
            pin: pinNumber
        }
    } catch (error) {
        return {
            status: 400
        }
    }
}

export default submitForm