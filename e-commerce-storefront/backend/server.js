const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace <connection_string> with your MongoDB connection string)
mongoose.connect('mongodb+srv://ilkindigoca:Pass5599!@cluster0.6l8svz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Product schema and model
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

// RESTful endpoints for products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
});

app.put('/products/:id', async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
});

app.delete('/products/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});