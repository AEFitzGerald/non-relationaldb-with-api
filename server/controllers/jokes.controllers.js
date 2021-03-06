const Joke = require('../models/Jokes.models');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json({ Jokes: allJokes })
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ Jokes: oneJoke })
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ Joke: newJoke })
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ Joke: updatedJoke })
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch(err => {
            res.json({ message: 'Something went wrong', error: err })
        });
}