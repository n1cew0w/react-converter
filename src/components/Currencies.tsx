import React, {FunctionComponent, ReactElement} from 'react';
import {useGetAllDataQuery} from "../redux/api";
import {Data, Map, ValuteData} from "../../interface";


const Currencies: React.FC = () => {
    // const datat = useSelector((state: RootState) => state.getData.value)
    const {data, error, isLoading} = useGetAllDataQuery('');

    if (data) {
        Object.entries(data.Valute).map((value, key) => {
            value.map((item) => {
                const abbreviation = value[0]
                const items: Map = value[1].Name
                console.log(items)
                return <>{items}</>
            })

        })
    }


    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.Date}</h3>
                    <h2>{data.Timestamp}</h2>

                </>
            ) : null


            }
        </div>
    );
};

export default Currencies;