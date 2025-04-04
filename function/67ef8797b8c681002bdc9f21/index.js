export default function (req, res) {
    return res.status(201).send(new Date().toISOString());
}
