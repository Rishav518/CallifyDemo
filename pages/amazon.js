import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Sidebarads from "../components/sidebarads";

function Amazon() {
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleAmazonSubmit = async (e, url, setData, setLoading) => {
    e.preventDefault();
    setLoading(true);

    fetch('https://flask-production-a8a2.up.railway.app/api/amazon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
    setLoading(false);
  };
 
  const handleCompareSubmit = (e) => {
    e.preventDefault();
    handleAmazonSubmit(e, url1, setData1, setLoading1);
    handleAmazonSubmit(e, url2, setData2, setLoading2);
  }
  return (
    <>
    <Header/>
    <Head>
    <title>EliteTools - About Us</title>
    </Head>
    <div className="bg-gray-800 flex items-start justify-center h-max">
        <Sidebar/>
        <div className="lg:w-[70%] w-full mt-14  flex items-center justify-center text-white ">
          
          <div className="flex items-center justify-center  w-full ">
           <div className="flex-col ">
            <div className="flex flex-col lg:flex-row justify-center items-center my-4">
                    <input placeholder="Enter URL of Amazon Product" className="w-72 h-10 px-2 rounded mx-4 my-2 text-gray-900 focus:bg-yellow-200" type="text" id="url1" name="url1" value={url1} onChange={(e) => setUrl1(e.target.value)} />
                    <input placeholder="Enter URL of Amazon Product" className="w-72 h-10 px-2 rounded mx-4 my-2 text-gray-900 focus:bg-yellow-200" type="text" id="url2" name="url2" value={url2} onChange={(e) => setUrl2(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium px-2 py-1 rounded my-1" type="submit" onClick={handleCompareSubmit}>Compare</button>
            </div>

      {loading1 || loading2 ? <p>Loading...</p> : null}
      {data1 && data2 &&
        <div className="flex items-center justify-center">
          
        <div className="flex justify-center max-h-screen  w-[80%] px-4 bg-gray-900 rounded-xl overflow-scroll scrollbar-hide">

            <div className="w-1/2 items-center justify-center mx-2">
                <h3 className="text-left my-2 text-lg text-gray-400 font-medium ">{data1.name}</h3>
                <div className=" flex items-center justify-center">
                <img src={data1.image_url} alt="Product 1" />
                </div>
                <div className="flex text-xl"><div className="font-medium">Current Price: </div><p className="mx-2 text-green-500">{data1.current_price}</p></div>
                <div className="flex text-lg"><div className="font-medium">Original Price: </div><p className="mx-2 text-red-500 ">{data1.real_price}</p></div>
                
                <table className="my-2">
                    <tbody>
                    {Object.entries(data1.table_data).map(([key, value]) => (
                        <tr key={key}>
                        <td className="bg-gray-700 py-1 px-4 font-medium border-b-2 border-gray-900"> {key}</td>
                        <td className="bg-gray-600 py-1 px-4  border-b-2 border-gray-900">{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
          </div>
            <div className="w-1/2 items-center justify-center mx-2 ">
                <h3 className="text-left my-2 text-lg text-gray-400 font-medium">{data2.name}</h3>
                <div className=" flex items-center justify-center">
                <img src={data2.image_url} alt="Product 1" />
                </div>
                <div className="flex text-xl"><div className="font-medium">Current Price: </div><p className="mx-2 text-green-500">{data2.current_price}</p></div>
                <div className="flex text-lg"><div className="font-medium">Original Price: </div><p className="mx-2 text-red-500 ">{data2.real_price}</p></div>
                
                <table className="my-2">
                    <tbody>
                    {Object.entries(data2.table_data).map(([key, value]) => (
                        <tr key={key}>
                        <td className="bg-gray-700 py-1 px-4 font-medium border-b-2 border-gray-900"> {key}</td>
                        <td className="bg-gray-600 py-1 px-4  border-b-2 border-gray-900">{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
          </div>
          
          </div>
        </div>
      }
    
    

            {/* Content */}
            <div className="py-8 w-full flex-col px-8 md:px-16 text-left text-gray-300 text-md space-y-4">
                <h2 className="text-xl font-medium">About Us</h2>
                <p>Elite Tools is a one-stop solution for all your tool needs. From construction to DIY, our premium website offers a wide range of top-quality tools to help you complete any project with ease. Our tools are selected for their durability and performance, ensuring you get the best results every time. We believe in providing our customers with the best possible experience and that's why we offer free shipping, easy returns, and excellent customer service. Browse our extensive collection of tools today and get started on your next project with confidence.</p>
                <p>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at <strong>arkay518@gmail.com</strong></p>

            </div>
            </div>
          </div>
          
        </div>
        <Sidebarads/>
    </div>
    </>
    
  );
};

export default Amazon;
