class Product {

    //NOT NECESSARY IF WE HAVE CONSTRUCTOR DEFINED
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

class Component {

    constructor(renderHookId){
        this.hookId = renderHookId;
    }

    createRootElement(tag,cssClasses,attributes){
        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className = cssClasses;
        }
        if(attributes && attributes.length > 0){
            for(const attr of attributes){
                rootElement.setAttribute(attr.name,attr.value);
            }
        }
        document.getElementsById(this.hookId).append(rootElement);
    }

}

class ShoppingCart extends Component{
    items = [];
    
    set cartItems(value){
        this.items = value;
        this.totalOutput.innerHTML  =   `<h2>Total : \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount(){
        const sum = this.items.reduce(
            (pervValue,curItem) => pervValue + curItem.price,
            0
        );
        return sum;
    }

    constructor(){
        super();
    }

    addProduct(product){
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;

    }

    render(){
        const cartEl = this.createRootElement('section','class');
        cartEl.innerHTML = `
            <h2>Total : \$${0}</h2>
            <button>Order Now!</button>
        `;
        this.totalOutput =  cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem {
    constructor(product){
        this.product = product;
    }

    addToCart(){
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class = "product-item_content">
                        <h2>${this.product.title}</h2>
                        <h2>\$${this.product.price}</h2>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;

        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click',this.addToCart.bind(this));
        return prodEl;
    }
}


class ProductList {
    products = [
        new Product('Bag', 'https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'A leather bag', 99.99),

        new Product('Bat', 'https://plus.unsplash.com/premium_photo-1679690884144-1f43b8f3bf41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'A cricket bat', 19.99),
    ];

    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render() ;
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render(){
        const renderHook = document.getElementById('app');
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App{
    static cart;

    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();