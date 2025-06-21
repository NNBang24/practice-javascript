function Product (id ,name, price , quantity=1) {
    this.id = id,
    this.name = name,
    this.price = price,
    this.quantity =quantity 
}

 Product.prototype.disPlay =function(){
    console.log(`${this.id} - ${this.name} x ${this.quantity}`)
}
export default Product ;