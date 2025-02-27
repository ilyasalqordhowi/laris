import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

function DashboardProduct() {
    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-[#F5F5FB] p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        My Products
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-5">
                    Manage it well and get money
                </div>
                <Link to="/dashboard/product/new-product"
                    className="font-medium max-w-[180px] mb-2 text-white py-2 px-5 bg-[#29A867] rounded-md"
                    >
                        Add New Product
                </Link>
                <div className="flex justify-end">
                    <div className="flex mb-4 max-w-52 w-full gap-4 items-center border-black bg-transparent border-2 h-9 px-6 rounded-2xl overflow-hidden ">
                        <button type="button" className="">
                            <FaMagnifyingGlass />
                        </button>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="flex-1 outline-none bg-transparent text-xs"
                        />
                    </div>
                </div>
                <div className="h-0 flex-grow overflow-y-auto">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="mb-5">
                                <img src={product1} alt="" className="object-cover object-center"/>
                            </div>
                            <div className="text-lg">MSI Raider GE76</div>
                            <div className="text-[#C5C5C5]">electronic</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardProduct