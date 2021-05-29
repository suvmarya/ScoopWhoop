import React from 'react';

import axios from 'axios';

export default class Freshapi extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=8`)
      .then(res => {
        const records = res.data.data;
        const result = records.map(({title, auth_display: {display_name}, feature_img, readtime, category: [category]}) => ({title, display_name, feature_img, readtime, category}))
        console.log("records=======",result)
        return(
          result
        )
      })
  }

  render() {
    return (
        <>
      
      </>
    )
  }
}