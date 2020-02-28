## Starting Repo for MERN Stack - The Complete Guide

how structured this project?
-utilities:contains some help functions
-schema for product, user, order and cart
-start point from app by using component and getInitialProps
-layout surround pages "Component pages" which has meta data, links, navbar and style
-then move from index as a start page (all products)
-click on item you will be redirect to individual product page (by id)
-navbar to switch between pages =>
-pages has components
-some pages gas initial props
-product has mutable component
-some components has some async function calls api "folder" afterwards implemented there using switch

---product page

product and create pages are using the same product api such as get,post and delete (becaus the same data on mongodb => products)
handleDelete : is inside product page specifically in ProductAttributes component

---create page

create page: has a form to collect data, those data will be validated through some function inside , there is tow type of data text and media
handelSubmit : fill data and made request to api with data (inputs and image)
-check if there is

<!-- afterwards we send them with post by using handelError which call endpoint api -->

-many different async call => inside getInitialProps , useEffect , or by event such as click
-No NodeJs: instead we are using NextJs for routing and fetching data api as routes/endpoints

+++++++++++++++++++++++++++++++++++++++++++++++++
----frontEnd error-------
handel error: inside in create product
1-useEffect to check data not if inputs not empty
2-try and catch
3-finally
4-show error to user input is empty for example
5-sorter error response by using catchError function
-----backEnd error-------
6-check if all filed fielded
7-move to the server api and add try catch to cover all

+++++++++++++++++++++++++++++++++++++++++++++++++
** check inputs by useEffect can be separated function
** handelChanges can be separated function
\*\* handelSubmit can be separated function
+++++++++++++++++++++++++++++++++++++++++++++++++
app
-layout => children + users ????
--headContent:meat , icons , libraries links
--header:navbar links
app component + props + ctx + getInitialProps ???
app => page + component + api
instead of using useEffect in each component, we use gitInitialProps
+++++++++++++++++++++++++++++++++++++++++++++++++

0-round app component with layout which is head + style + links
1-instance component + initialProps in each component
2-index => list component => return ui component + function returns array of objects, instead of iteration ui component
3-spread operator
computed property : setProduct( (preValue) => ({...preValue ,[name]:value})
media : window.URL.createObjectURL(files[0])
we use react semantic ui => form.filed + some properties like control, accept content
useState: set the default and change display using function
index page : list of products => from products
individual page : product => from products

+++++++++++++++++++++++++++++++++++++++++++++++++
some technic
-change useEffect to gitInitialProps method
-upload photos by using cloudinary stage/platform
-toggle message button , navbar links by using useState
-handel Error methods
-based url localhost:3000 depended on environment
-disabled={error||loading}
-validation inputs:we use it in useEffect while we are filling data,otherwise we set error true Object.values(product).every(ele=> Boolean(ele))
try , catch , finally
-convert string to boolean: Boolean(error)
-upload photo and preview by using window.URL.createObject
-catch error
-loading
-success message
-disable submit button while loading data
-use useEffect for fill data and trigger changes on product object
-timestamps:true inside model to include updated and created user
-inside the signup api we check the
-secret: is just like (password \* 5) => hashed,for example (5) is our secret
-setError??
-password select false => to exclude the password from database
-ctx =>we can use it for query , pathname , push
-isActive => for class
-cart.products.some: one atlea
-setTimeout + clearTimeOut => to run loading for a moment
-fix the total and remove comas => ((total \* 100) / 100).toFixed(2) calculated to 2 decimal palaces
-await Cart.findOneAndUpdate => $inc: { "products.$.quantity": quantity }
-await Cart.findOneAndUpdate => \$pull: {products:{ product: productsId }}
-Stripe library and stripeCheckout for processing of payments
-display ={isCartEmpty||success}
-( \$ne) to exclude from data base
-we can create small component in side a big component like => private in class
-useRef => little trick
