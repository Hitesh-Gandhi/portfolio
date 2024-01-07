const FORM_ID = 'da0b2261-532d-4786-a5e1-24c75f46110b'
const PORTAL_ID = '44858755'
const endPoint = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`

export async function submitDetails(
    email,
    name,
    message
) {
    await fetch(
        endPoint,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                submittedAt: new Date().getTime(),
                fields: [
                    {
                        objectTypeId: '0-1',
                        name: 'email',
                        value: email,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'your_name',
                        value: name,
                    },
                    {
                        objectTypeId: '0-1',
                        name: 'message',
                        value: message,
                    }
                ],
            })
        }
    )
}