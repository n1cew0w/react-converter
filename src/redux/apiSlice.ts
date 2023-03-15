import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";


interface Data {
    Date: string
    PreviousDate: string
    PreviousURL: string
    Timestamp: string
    Valute: {}
}

const baseURL = `https://www.cbr-xml-daily.ru/daily_json.js`

const getCurrencyData = async () => {
    axios.get<Data>('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => {
            console.log(response.data)
        })
}


const initialState = {
    value: {},
}

export const apiSlice = createSlice({
    name: 'getDataApi',
    initialState,
    reducers:{
        getData: (state) =>{
            getCurrencyData()
        },
    }
})

export const {getData} = apiSlice.actions
export default apiSlice.reducer