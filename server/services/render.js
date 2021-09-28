const homeRoute = (req, res) => {
    res.render('index')
};

const form1Route = (req, res) => {
    res.render('form1')
}

const form2Route = (req, res) => {
    res.render('form2')
}

const form3Route = (req, res) => {
    res.render('form3')
}

module.exports = {homeRoute, form1Route, form2Route, form3Route}