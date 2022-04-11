import React, {useEffect, useState} from 'react';

function withSubscription(WrappedComponent, selectData) {
  return function Subscription(props){
    const [data, setData] = useState([]);
    useEffect(() => {
      async function fetchMyAPI() {
        try{
          const data = await selectData(props);
          setData(data);
        } catch (e) {
          console.log(e);
        }
      }
      fetchMyAPI();
    }, [])

    return <WrappedComponent data={data} {...props} />;
  }
}

export default withSubscription;