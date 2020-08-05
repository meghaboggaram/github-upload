import nc from 'next-connect';

const handler = nc()
.get((req,res) => {
    res.send("Hello World");
})
.post((req, res) => {
    res.JSON({message: 'hello'})
})

export default handler;