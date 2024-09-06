import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import React from "react";

import { Text, View, Image, Button } from "react-native";

interface PropProd{
    produto:Produto,

}

const ItemProduto:React.FC<PropProd> = ( {produto})=> {
    
    console.log(produto)
    
    function Excluir(id: number) {
        throw new Error("Function not implemented.");
    }

    return (
        <View style={Style.card} >
            <Text style={Style.cardText} >{produto.nome}</Text>
            <Text style={Style.cardText} >{produto.preco}</Text>
            <Image source={{uri:produto.foto} } 
             style={Style.image}   />
            <Button title="Excluir" onPress={() => {Excluir(produto.id)}} />
            
        </View>
    )

}

export default ItemProduto;