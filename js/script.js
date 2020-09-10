var app = new Vue({ // экземпляр vue - корневая сущность приложения. создадим приложение, передав конструктору vue oбъект с опциями 
    el: '#app', // el - объект, '#app'- свойство
    data: { // data - объект, место для хранения данных (свойство)
      brand: 'Vue Mastery',
      product: 'Socks', // product - свойство объекта data
      description: 'A pair of warm, fuzzy socks',
      selectedVariant: 0,
      altText: 'a pair of socks',
      link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
      inventory: 0,
      details: 
        ['80% cotton', '20% polyester', 'gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'blue',
          variantImage: 'https://habrastorage.org/getpro/habr/post_images/1fb/1cb/7d2/1fb1cb7d28670803a16c9776e4f6b435.png',
          variantQuantity: 10,
          onSale: true
        },
        {
          variantId: 2235,
          variantColor: 'green',
          variantImage: 'https://habrastorage.org/getpro/habr/post_images/d7b/a8f/327/d7ba8f3277026ac0d9fbceaa4f688f6c.png',
          variantQuantity: 0,
          onSale: false
        }
      ],
      sizes:
      ['s', 'm', 'l', 'xl', 'xxl'],
      cart: 0
    },
    methods: { // свойство в котором содержится объект с методами
      addToCart() {
        this.cart +=1
// не совсем понимаю зачем this - это указывает на элемент, по которому произошёл клик?
// this хранит ссылку на то место, где хранятся данные экземпляра Vue, в котором мы находимся
// ага, кажется я понял. this берёт себе значение cart и хранит его, соответственно, вызывая метод addToCart мы увеличиваем значение в this (взятое из cart)
// и таким образом значение из this передаётся в addToCart в html
      },
      lessOne() {
        if (this.cart === 0) return // нагуглил это решение - не позволять минусовать корзину, а вот как это работает - не нагуглил
        this.cart -=1
      },
      clearCart() {
        this.cart = 0
      },
      updateProduct(index) { // создадим метод updateProduct и передадим ему параметр variantImage
        this.selectedVariant = index;
        console.log(index); // и затем запишем в свойство image то, что попадёт в метод после клика по отслеживаемому элементу
        // этот метод годен только в том случае, если нужно получить только один параметр (в нашем случае цвет)
        // следовательно нужно устанавливать свойство на основе индекса
      }
    },
    computed: { // в этом объекте лежат вычисляемые свойства
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' are on sale now!'
            } else {
                return this.brand + ' ' + this.product + ' are not on sale now!'
            }
        }
    }
  });