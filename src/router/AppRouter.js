import AddProduct from '../pages/AddProduct'
import React, { useState, useEffect } from 'react'
import NavbarComp from '../components/Navbar';
import Home from '../pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCategory from '../pages/AddCategory';
import Details from '../pages/Details'
import { addNewCategory, addNewProduct, editCategoryHandler, editProductHandler, useFetch } from '../function/function';

const initialStateProduct = {
  category: '',
  description: '',
  price: 0,
  title: '',
  image: "",
  image2: "",
  image3: "",
}
const initialStateCategory = {
  category: '',
}

function AppRouter() {
  const [product, setProduct] = useState(initialStateProduct)
  const [category, setCategory] = useState(initialStateCategory)
  const handleProductSubmit = () => {
    if (product?.id) {
      editProductHandler(product)
    } else {
      addNewProduct(product)
    }
    setProduct(initialStateProduct)
  }
  const updateProductHandler = (item) => {
    setProduct({ ...item })
  }
  const updateCategoryHandler = (item) => {
    setCategory({ ...item })
  }
  const handleCategorySubmit = () => {
    if (category?.id) {
      editCategoryHandler(category)
    } else {
      addNewCategory(category)
    }
    setCategory(initialStateCategory)
  }
  const { productList, categoryList } = useFetch();
  const [itemsDef, setItemsDef] = useState()
  const [categoriesDef, setCategoriesDef] = useState()
  useEffect(async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json()
    console.log(`result products`, result)
    setItemsDef(result)
  }, [])
  useEffect(async () => {
    const data = await fetch('https://fakestoreapi.com/products/categories')
    const result = await data.json()
    console.log(`result categories`, result)
    setCategoriesDef(result)
  }, [])
  const items = itemsDef?.concat(productList)
  const categories = categoriesDef?.concat(categoryList.map((item) => item?.category))

  return (
    <Router>
      <NavbarComp />
      <Switch>
        <Route exact path="/">
          <Home 
          items={items} 
          categories={categories} 
          categoriesDef={categoriesDef} 
          updateCategoryHandler={updateCategoryHandler} 
          />
        </Route>
        <Route exact path="/details/:id">
          <Details 
          items={items} 
          updateProductHandler={updateProductHandler} 
          />
        </Route>
        <Route exact path="/addproduct">
          <AddProduct
            items={items}
            categories={categories}
            product={product}
            setProduct={setProduct}
            handleProductSubmit={handleProductSubmit}
          />
        </Route>
        <Route exact path="/addcategory">
          <AddCategory 
          category={category}
          setCategory={setCategory}
          handleCategorySubmit={handleCategorySubmit}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
