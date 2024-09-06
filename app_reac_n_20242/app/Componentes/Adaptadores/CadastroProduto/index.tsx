import { useState } from "react"
import { Text, TextInput, View } from "react-native"



const CadastroProduto = ()=>{
    let [nome,setNome] = useState('');
    let [descricao,setDescricao] = useState('');
    let [preço, setPreco] = useState(0);

//Continua Aqui
    return(
        <View>
            <Text   >Nome:</Text>
            <TextInput onChangeText={setNome} value={nome} />
            <Text   >Descricao:</Text>
            <TextInput onChangeText={setDescricao} value={descricao} />
            <Text>Preço:</Text>
            <TextInput onChangeText={(v) => setPreco(parseFloat(v))} inputMode="numeric" value={PerformanceObserver.toString()} />
            <Button title="Cadastrar" onPress={Cadastrar}></Button>
            
        </View>
    )
}