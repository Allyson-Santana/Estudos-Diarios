from flask import Flask, jsonify, request
from bd import books

app = Flask(__name__)

# Main

@app.route('/books', methods=['GET'])
def get():
    return jsonify(books)

@app.route('/books', methods=['POST'])
def create():
    new_book = request.get_json()
    books.append(new_book)
    return jsonify(new_book)

@app.route('/books/<int:id>', methods=['GET'])
def getOne(id: str):
    for book in books:
        if book.get('id') == id:
            return jsonify(book)

@app.route('/books/<int:id>', methods=['PUT'])
def update(id: str):
    book_update = request.get_json()
    for index, book in enumerate(books):
        if book.get('id') == id:
            books[index].update(book_update)
            return jsonify(books[index])

@app.route('/books/<int:id>', methods=['DELETE'])
def destroy(id: str):
    for index, book in enumerate(books):
        if book.get('id') == id:
            del books[index]
            break
    return jsonify(id)


# Serven run
app.run(port=5555, host='localhost', debug='true')
