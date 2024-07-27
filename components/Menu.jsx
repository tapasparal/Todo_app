import React, { useState } from "react";

const Menu = () => {
    const [table, setTable] = useState([]);
    const [info, setInfo] = useState({
        name: '',
        email: '',
        mobile: ''
    })
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }
    const display = (e) => {
        setTable([...table, info]);
        setInfo({ name: '', email: '', mobile: '' })
    }
    return (
        <>
            Enter Name:
            <input type="text" name="name" value={info.name} onChange={handleChange} />
            <br /><br />
            Email Id:
            <input type="email" name="email" value={info.email} onChange={handleChange} />
            <br /><br />
            Mobile Number:
            <input type="number" name="mobile" value={info.mobile} onChange={handleChange} />
            <br /><br />
            <button type="submit" onClick={display}>Add</button>
            <hr />
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>SL. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        table.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobile}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}
export default Menu