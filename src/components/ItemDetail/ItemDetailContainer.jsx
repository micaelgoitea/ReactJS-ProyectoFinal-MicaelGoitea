import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json";
import Loading from "../Loading";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrayProductos);
        }, 2000)
    })
};

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() });
                setLoading(false);
            } else {
                console.log("No existe el Documento!");
                setItem({});
            }
        });
    }, [id]);

    return (

        <>
            {
                loading ? <Loading /> : <ItemDetail item={item} />
            }
        </>

    )
}

export default ItemDetailContainer;