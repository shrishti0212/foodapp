const Contact =() =>{
    return <div className="p-2 m-2">
        <h3 className="font-bold text-3xl p-2 m-4">Contact us Here</h3>
        <form>
            <input
            type="text"
            className="border border-black p-2 m-2 rounded-3xl "
            placeholder="User-Id"
            />
            
            <input
            type="text"
            className="border border-black p-2 m-2 rounded-3xl "
            placeholder="message"
            />
            <button className="border border-black p-2 m-2 bg-green-100 rounded-3xl"
            >Submit</button>
        </form>
        <div className="py-5 my-10">
            <h2 className="font-bold">Customers Support</h2>
            <h4>PHONE: 9123456789</h4>
            <h4>EMAIL: nomnomnow@gmail.com</h4>
        </div>
       
    </div>;

};

export default Contact;
