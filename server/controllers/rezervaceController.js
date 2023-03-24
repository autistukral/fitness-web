const Rezervace = require('../model/Rezervace');

const handleNewRezervace = async (req, res) => {
    const { date, activity, trainer, price } = req.body;

    try {
        const result = await Rezervace.create({
            "date": date,
            "activity": activity,
            "trainer": trainer,
            "price": price
        });

        console.log(result);

        res.status(201).json({ 'success': `New reservation created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewRezervace };