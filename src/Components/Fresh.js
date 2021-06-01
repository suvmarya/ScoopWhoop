import React from "react";
import Card from "./Card";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

export const Fresh = () => {
    const [data, setData] = React.useState([])
    const [limit, setLimit] = React.useState(8)

    const reshapi = async (limit) => {
        const res = await axios.get(`https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=${limit}`)
        const records = res.data.data;
        const result = records.map(({ title, auth_display: { display_name }, feature_img, readtime, pub_date, category: [category] }) => ({ title, display_name, feature_img, readtime, pub_date, category }))
        return result
    }

    const fetchMoreData = async () => {
        const loadapi = await reshapi(limit)

        if (limit === 8) {
            setData(loadapi)
            setLimit(limit + 8)
        }
        else {
            setTimeout(() => {
                setData(loadapi)
                setLimit(limit + 8)
            }, 2500)
        }
    };

    return (
        <>
            <div className="main-fresh">
                <InfiniteScroll
                    dataLength={limit}
                    next={fetchMoreData()}
                    hasMore={true}
                    loader={
                       
                            <div className="circle-loading">
                                <svg className="circle-logo" width="25" viewBox="0 0  40 31">
                                    <g fill="#2D7BEC" fillRule="nonzero">
                                        <path d="M40 0v.352c-.014.056-.037.112-.042.168a13091.609 13091.609 0 00-.84 10.949 11549.448 11549.448 0 00-1.045 13.403c-.04.495-.047.487-.557.565-2.722.412-5.443.826-8.164 1.243-.417.063-.836.122-1.279.187l-.876-18.004-.271.052-.924 18.272-9.951 1.517-1.96-24.758 6.305-.96.826 18.01c.196.029.282-.026.292-.22.065-1.247.138-2.493.209-3.74l.325-5.72c.13-2.266.26-4.533.392-6.799.036-.616.074-1.232.112-1.86l8.991-1.37 1.054 17.99.272-.038.826-18.28L40 0zM13.557 13.28l-6.23.95v-.272-3.067c0-.1.004-.202-.01-.301-.028-.199-.085-.396-.326-.422-.239-.025-.448.066-.54.295-.06.151-.088.324-.09.488-.008.913.008 1.827-.008 2.74-.01.564.24.968.747 1.172.42.17.872.272 1.318.363.992.202 1.958.477 2.903.845 1.2.467 1.868 1.353 2.171 2.54.097.382.15.774.155 1.167.019 1.316.03 2.632.001 3.947-.032 1.443-.376 2.802-1.307 3.964-.852 1.065-1.995 1.705-3.278 2.119-1.531.494-3.107.746-4.72.648a6.418 6.418 0 01-1.62-.309C1.266 29.661.517 28.564.24 27.127a9.35 9.35 0 01-.155-1.572c-.023-1.138-.008-2.278-.007-3.418 0-.066.006-.132.01-.216l6.21-.947V24.279c0 .1 0 .201.006.302.01.206.073.382.307.435.22.051.486-.067.565-.286.06-.16.087-.341.088-.514.008-.905-.002-1.81.006-2.715.006-.538-.22-.948-.725-1.128a16.685 16.685 0 00-1.807-.51c-.845-.2-1.674-.43-2.472-.775-1.238-.533-1.86-1.511-2.133-2.756a2.755 2.755 0 01-.075-.572c-.01-1.841-.176-3.69.112-5.52.35-2.225 1.666-3.734 3.76-4.577 1.845-.742 3.773-1.054 5.765-.881 2.107.183 3.474 1.476 3.751 3.564.086.645.096 1.302.108 1.954.016.987.004 1.975.004 2.98z"></path>
                                    </g>
                                </svg>
                                <svg className="circle-svg" viewBox="0 0 100 100">
                                    <circle class="circle__svg-circle" cx="50" cy="50" r="45"></circle>
                                </svg>
                                <span className="loading-text">Loading...</span>
                               
                            </div>
                            
                       
                    }
                >

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
                </InfiniteScroll>

            </div>
        </>
    );
}
export default Fresh;
