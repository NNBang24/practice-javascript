function Cart (){
    this.productList = []

}
Cart.prototype.add = function(product){
    const target = this.productList.find((item) => {
        return item.id === product.id
    })
    if ( target){
        target.quantity  += product.quantity ;
    }
    else {
        this.productList.push(product);
    }
}
Cart.prototype.remove =function(id) {
    const target =this.productList.findIndex((item) => {
        return item.id = id
    })
    if(target ){
        this.productList.splice(target,1)
    }
}
Cart.prototype.updateQuanity = function(id , quantity ) {
    if ( quantity <= 0){
        return undefined
    }
    else {
        const target = this.productList.find((item)=>{
            return item.id = id ;
        })
        if (target){
            target.quantity  = quantity  ;  
            return target ;
        }
        return undefined ;
    }
}

//
Cart.prototype.disPlay = function(){
    console.log('--------Cart--------')
    let sum = 0 ;
    this.productList.forEach((product) =>{
        product.disPlay();
        sum += product.price * product.quantity  ;
    })
    console.log('-----');
    console.log(`Sum ${sum}`)
}

export default Cart ;