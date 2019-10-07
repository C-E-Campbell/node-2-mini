const books = [];
let id = 0;
module.exports = {
	read: (req, res) => {
		res.status(200).send(books);
	},
	create: (req, res) => {
		const { title, author } = req.body;
		books.push({ title, author, id });
		id++;
		res.status(200).send(books);
	},
	update: (req, res) => {
		let index = null;
		books.forEach((book, i) => {
			if (book.id === Number(req.params.id)) index = i;
		});
		books[index] = {
			id: books[index].id,
			title: req.body.title || books[index].title,
			author: req.body.author || books[index].author
		};
		res.status(200).send(books);
	},
	delete: (req, res) => {
		const { id } = req.params;
		const index = books.findIndex(book => {
			return book.id === parseInt(id);
		});
		books.splice(index, 1);
		res.status(200).send(books);
	}
};
