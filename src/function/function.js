import firebase from '../firebase/firebase';
import { useState, useEffect } from 'react'


export const addNewProduct = (product) => {
    const productRef = firebase.database().ref("product")
    productRef?.push(product)
}
export const addNewCategory = (category) => {
    const categoryRef = firebase.database().ref("category")
    categoryRef?.push(category)
}

export const useFetch = () => {
    const [productList, setProductList] = useState([])
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        const productRef = firebase.database().ref("product")
        productRef.on("value", (snapshot) => {
            const products = snapshot.val();
            const productArray = [];
            for (let id in products) {
                productArray.push({ id, ...products[id] })
            }
            setProductList(productArray)
        })
    }, [])
    useEffect(() => {
        const categoryRef = firebase.database().ref("category")
        categoryRef.on("value", (snapshot) => {
            const categorys = snapshot.val();
            const categoryArray = [];
            for (let id in categorys) {
                categoryArray.push({ id, ...categorys[id] })
            }
            setCategoryList(categoryArray)
        })
    }, [])
    return { productList, categoryList }
}

export const deleteProductHandler = (id) => {
    const productRef = firebase.database().ref("product").child(id);
    productRef.remove();
}

export const editProductHandler = (product) => {
    const productRef = firebase.database().ref("product").child(product.id);
    productRef.update(product)
}
export const deleteCategoryHandler = (id) => {
    const categoryRef = firebase.database().ref("category").child(id);
    categoryRef.remove();
}

export const editCategoryHandler = (category) => {
    const categoryRef = firebase.database().ref("category").child(category.id);
    categoryRef.update(category)
}