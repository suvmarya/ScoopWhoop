import React from "react";
import Card from "./Card";
import axios from 'axios';

export async function reshapi() {
    const res = await axios.get(`https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=32`)
    const records = res.data.data;
    const result = records.map(({ title, auth_display: { display_name }, feature_img, readtime, pub_date, category: [category] }) => ({ title, display_name, feature_img, readtime, pub_date, category }))
    return result
}


function Fresh() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        (async () => {
            const records = await reshapi();
            if (records && records.length > 0) {
                setData(records);
            }
        })();
    }, []);

    return (
        <>
            <div className="main-fresh">
                {
                    data.map((val, ind) => {
                        return (
                            
                                <Card
                                    key={ind}
                                    imgsrc={val.feature_img}
                                    title={val.category}
                                    heading={val.title}
                                    name={val.display_name}
                                    pub_date={val.pub_date}
                                    readtime={val.readtime}
                                />
                          
                        );
                    })
                }
            </div>
        </>
    );
}
export default Fresh;