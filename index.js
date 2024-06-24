const mongoose = require("mongoose")
require("dotenv").config()

const app = require("./app")
const consoleMessage = require("./utils/console.util");
const port = process.env.PORT || 5000;

// databse connection
mongoose.connect(process.env.ATLAS_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async()=>{
    consoleMessage.successMessage("Connected to MongoDB.");
})
.catch((error) => consoleMessage.errorMessage(error.message));

app.get('/', (req, res) => {
    res.send('PrimeAuto BD Server is running');
});

app.listen(port, () => {
    consoleMessage.warningMessage(`Server is running on port ${port}.`);
});
